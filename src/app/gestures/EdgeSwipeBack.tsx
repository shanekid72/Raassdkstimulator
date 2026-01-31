import { useEffect, useRef, type ReactNode } from "react";
import {
  animate,
  motion,
  useDragControls,
  useMotionValue,
  useTransform,
  type PanInfo,
} from "framer-motion";

const EDGE_WIDTH = 22;
const MAX_DRAG = 140;
const START_THRESHOLD = 10;
const TRIGGER_DISTANCE = 110;
const TRIGGER_VELOCITY = 650;
const OVERLAY_OPACITY = 0.18;

export type EdgeSwipeBackProps = {
  enabled?: boolean;
  onBack: () => void;
  children: ReactNode;
};

export function EdgeSwipeBack({ enabled = true, onBack, children }: EdgeSwipeBackProps) {
  const dragControls = useDragControls();
  const x = useMotionValue(0);
  const overlayOpacity = useTransform(x, [0, MAX_DRAG], [0, OVERLAY_OPACITY]);
  const pointerStartRef = useRef<{ x: number; y: number } | null>(null);
  const pointerIdRef = useRef<number | null>(null);
  const dragActiveRef = useRef(false);
  const edgeAllowedRef = useRef(false);

  const resetTracking = () => {
    pointerStartRef.current = null;
    pointerIdRef.current = null;
    dragActiveRef.current = false;
    edgeAllowedRef.current = false;
  };

  const isModalOpen = () =>
    typeof document !== "undefined" && document.documentElement.dataset.modalOpen === "true";

  useEffect(() => {
    if (!enabled) {
      resetTracking();
      x.set(0);
    }
  }, [enabled, x]);

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!enabled || isModalOpen()) return;
    if (event.button !== undefined && event.button !== 0) return;

    if (event.clientX > EDGE_WIDTH) {
      resetTracking();
      return;
    }

    edgeAllowedRef.current = true;
    pointerStartRef.current = { x: event.clientX, y: event.clientY };
    pointerIdRef.current = event.pointerId;
    dragActiveRef.current = false;
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!enabled || isModalOpen()) return;
    if (!edgeAllowedRef.current || dragActiveRef.current) return;
    if (pointerIdRef.current !== event.pointerId) return;
    if (!pointerStartRef.current) return;

    const dx = event.clientX - pointerStartRef.current.x;
    const dy = event.clientY - pointerStartRef.current.y;
    const absDx = Math.abs(dx);
    const absDy = Math.abs(dy);

    if (absDx + absDy < 2) return;

    if (Math.max(absDx, absDy) < START_THRESHOLD) {
      if (absDy > absDx) {
        resetTracking();
      }
      return;
    }

    if (absDy > absDx || dx <= 0) {
      resetTracking();
      return;
    }

    dragActiveRef.current = true;
    dragControls.start(event);
  };

  const handlePointerUp = () => {
    resetTracking();
  };

  const handlePointerCancel = () => {
    resetTracking();
  };

  const handleDragEnd = (
    _event: PointerEvent | MouseEvent | TouchEvent,
    info: PanInfo
  ) => {
    if (!enabled || isModalOpen()) {
      animate(x, 0, { type: "spring", stiffness: 300, damping: 30 });
      return;
    }

    const shouldNavigateBack =
      info.offset.x > TRIGGER_DISTANCE || info.velocity.x > TRIGGER_VELOCITY;

    if (shouldNavigateBack) {
      x.set(0);
      onBack();
    } else {
      animate(x, 0, { type: "spring", stiffness: 300, damping: 30 });
    }
  };

  return (
    <motion.div
      className="relative h-full"
      drag={enabled ? "x" : false}
      dragControls={dragControls}
      dragListener={false}
      dragConstraints={{ left: 0, right: MAX_DRAG }}
      dragElastic={0}
      dragMomentum={false}
      style={{ x, touchAction: "pan-y" }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerCancel}
      onDragEnd={handleDragEnd}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 bg-black"
        style={{ opacity: overlayOpacity }}
      />
      <div className="relative h-full">{children}</div>
    </motion.div>
  );
}
