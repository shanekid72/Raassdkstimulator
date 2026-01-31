import React, { useRef } from "react";
import { DynamicAlert, DynamicAlertState } from "@/app/ui/DynamicAlert";
import { useKeyboardAvoidance } from "@/app/hooks/useKeyboardAvoidance";

interface MobileLayoutProps {
    children: React.ReactNode;
    alertState?: DynamicAlertState;
    alertMessage?: string;
    onAlertClose?: () => void;
    className?: string;
    /** When true, renders without phone frame for embedding in parent app */
    embedded?: boolean;
}

export function MobileLayout({ children, alertState = "idle", alertMessage, onAlertClose, className, embedded = false }: MobileLayoutProps) {
    const contentRef = useRef<HTMLDivElement | null>(null);
    useKeyboardAvoidance(contentRef);

    // Shared content that appears in both modes
    const content = (
        <>
            {/* DYNAMIC ISLAND (Fixed Overlay) - DynamicAlert handles its own positioning */}
            <DynamicAlert state={alertState} message={alertMessage} onClose={onAlertClose} />

            {/* SCROLLABLE CONTENT AREA - full height, padding prevents content behind overlays */}
            <div
                ref={contentRef}
                className="h-full w-full overflow-y-auto overscroll-none scrollbar-hide world-app-bg"
            >
                <div
                    className="flex min-h-full flex-col px-4 pt-14 pb-10"
                    style={{
                        paddingBottom: `calc(2.5rem + var(--keyboard-offset, 0px))`,
                    }}
                >
                    {children}
                </div>
            </div>

            {/* FOOTER (Fixed Overlay) - z-50 so it stays above content */}
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-50 flex flex-col items-center justify-end bg-gradient-to-t from-[#0d0d0f]/95 via-[#0d0d0f]/80 to-transparent pt-8 pb-2">
                <div className="text-center text-xs text-white/70 mb-2">Powered By LuLu Exchange</div>
                {/* Only show home indicator in standalone mode */}
                {!embedded && <div className="h-1.5 w-32 rounded-full bg-white/20" />}
            </div>
        </>
    );

    // Embedded mode: no phone frame, fill parent container
    if (embedded) {
        return (
            <div
                id="phone-frame"
                className={`relative h-full w-full overflow-hidden bg-[#0d0d0f] ${className ?? ""}`}
            >
                {content}
            </div>
        );
    }

    // Standalone mode: with phone frame for development
    return (
        <div className="raas-standalone flex min-h-screen w-full items-center justify-center bg-[#1a1a1a] p-4">
            {/* PHONE FRAME */}
            <div
                id="phone-frame"
                className={`relative h-[844px] w-[390px] overflow-hidden rounded-[40px] bg-[#0d0d0f] shadow-2xl ring-8 ring-gray-900 ${className ?? ""}`}
            >
                {content}
            </div>
        </div>
    );
}
