import React from "react";
import { DynamicAlert, DynamicAlertState } from "@/app/ui/DynamicAlert";

interface MobileLayoutProps {
    children: React.ReactNode;
    alertState?: DynamicAlertState;
    alertMessage?: string;
    onAlertClose?: () => void;
    className?: string;
}

export function MobileLayout({ children, alertState = "idle", alertMessage, onAlertClose, className }: MobileLayoutProps) {
    return (
        <div className="min-h-screen bg-[#0d0d0f] flex items-center justify-center p-6">
            {/* Mobile Frame */}
            <div id="phone-frame" className="relative w-full max-w-[393px] h-[852px] bg-background rounded-[46px] shadow-[0_20px_60px_rgba(0,0,0,0.35)] overflow-hidden border-[10px] border-black/80">

                {/* Dynamic Island / Status Bar Area */}
                <DynamicAlert state={alertState} message={alertMessage} onClose={onAlertClose} />

                {/* Content Area */}
                <div className={`relative h-full w-full overflow-y-auto no-scrollbar scroll-smooth world-app-bg ${className}`}>
                    {children}
                </div>

                {/* Home Indicator (iPhone style) */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[134px] h-[5px] bg-black/20 rounded-full" />
            </div>
        </div>
    );
}
