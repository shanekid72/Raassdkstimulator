import { Scan, Settings, UserCheck, Users, ArrowDown, Grid2x2, DollarSign, CircleUser, Bell } from "lucide-react";
import { Button } from "@/app/ui/Button";

interface HomeScreenProps {
    onStartOnboarding: () => void;
    onStartRecipient: () => void;
    onStartTransaction: () => void;
    onTestLoading?: () => void;
    onTestSuccess?: () => void;
}

export default function HomeScreen({
    onStartOnboarding,
    onStartRecipient,
    onStartTransaction,
    onTestLoading,
    onTestSuccess,
}: HomeScreenProps) {
    return (
        <div className="h-full w-full bg-[#f7f7f8]">
            <div className="h-full px-6 pt-6 pb-4 flex flex-col">
                <div className="flex items-center justify-between">
                    <button
                        type="button"
                        className="h-11 w-11 rounded-full bg-white shadow-[0_8px_20px_rgba(0,0,0,0.08)] border border-black/5 flex items-center justify-center"
                        aria-label="Scan"
                    >
                        <Scan className="h-5 w-5 text-foreground" />
                    </button>
                    <h1 className="text-base font-semibold text-foreground">Apps</h1>
                    <button
                        type="button"
                        className="h-11 w-11 rounded-full bg-white shadow-[0_8px_20px_rgba(0,0,0,0.08)] border border-black/5 flex items-center justify-center"
                        aria-label="Settings"
                    >
                        <Settings className="h-5 w-5 text-foreground" />
                    </button>
                </div>

                <div className="mt-6">
                    <div className="relative overflow-hidden rounded-[28px] border border-white/5 bg-gradient-to-br from-[#2f3034] via-[#1c1d21] to-[#0f1012] p-5 text-white shadow-[0_24px_50px_rgba(0,0,0,0.2)]">
                        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18),_transparent_55%)]" />

                        <div className="relative flex items-center gap-3">
                            <div className="h-11 w-11 rounded-2xl border border-white/15 bg-white/10 flex items-center justify-center">
                                <div className="h-6 w-6 rounded-full border border-white/60 text-[10px] font-semibold flex items-center justify-center">
                                    LX
                                </div>
                            </div>
                            <div>
                                <p className="text-sm font-semibold">LuLu Exchange</p>
                                <p className="text-xs text-white/60">RaaS Wallet</p>
                            </div>
                        </div>

                        <div className="relative mt-6 flex items-center justify-center gap-3 text-white/90">
                            <div className="h-8 w-8 rounded-full border border-white/60 flex items-center justify-center text-xs font-semibold">
                                L
                            </div>
                            <span className="text-2xl font-semibold tracking-tight">42.006024</span>
                        </div>

                        <div className="relative mt-6 flex items-end justify-between gap-4">
                            <div>
                                <p className="text-[10px] uppercase tracking-wide text-white/60">Verify now</p>
                                <p className="text-sm font-semibold leading-snug">Verify identity to unlock your account</p>
                            </div>
                            <button
                                type="button"
                                onClick={onStartOnboarding}
                                className="h-9 px-5 rounded-full border border-white/15 bg-white/15 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
                            >
                                Verify
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mt-4 flex items-center justify-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-foreground" />
                    <span className="h-2 w-2 rounded-full bg-foreground/30" />
                    <span className="h-2 w-2 rounded-full bg-foreground/30" />
                </div>

                <div className="mt-6 grid grid-cols-3 gap-x-6 gap-y-6">
                    <button
                        type="button"
                        onClick={onStartOnboarding}
                        className="flex flex-col items-center gap-2 text-foreground"
                    >
                        <div className="h-16 w-16 rounded-[18px] bg-gradient-to-br from-[#4b63ff] to-[#90a1ff] shadow-[0_10px_18px_rgba(75,99,255,0.25)] flex items-center justify-center">
                            <UserCheck className="h-6 w-6 text-white" />
                        </div>
                        <span className="text-xs font-medium">Verify</span>
                    </button>

                    <button
                        type="button"
                        onClick={onStartRecipient}
                        className="flex flex-col items-center gap-2 text-foreground"
                    >
                        <div className="h-16 w-16 rounded-[18px] bg-gradient-to-br from-[#0f1115] to-[#3b3e45] shadow-[0_10px_18px_rgba(0,0,0,0.25)] flex items-center justify-center">
                            <Users className="h-6 w-6 text-white" />
                        </div>
                        <span className="text-xs font-medium">Recipients</span>
                    </button>

                    <button
                        type="button"
                        onClick={onStartTransaction}
                        className="flex flex-col items-center gap-2 text-foreground"
                    >
                        <div className="h-16 w-16 rounded-[18px] bg-gradient-to-br from-[#f2f3f6] to-[#cfd3da] shadow-[0_10px_18px_rgba(0,0,0,0.12)] flex items-center justify-center">
                            <ArrowDown className="h-6 w-6 text-[#2b2d33]" />
                        </div>
                        <span className="text-xs font-medium">Transfer</span>
                    </button>

                    <button
                        type="button"
                        onClick={onTestLoading}
                        className="flex flex-col items-center gap-2 text-foreground"
                    >
                        <div className="h-16 w-16 rounded-[18px] bg-gradient-to-br from-[#6d5bd0] to-[#c3b6ff] shadow-[0_10px_18px_rgba(109,91,208,0.22)] flex items-center justify-center">
                            <Bell className="h-6 w-6 text-white" />
                        </div>
                        <span className="text-xs font-medium">Alerts</span>
                    </button>
                </div>

                {(onTestLoading || onTestSuccess) && (
                    <div className="mt-5 flex items-center justify-center gap-2">
                        {onTestLoading && (
                            <Button size="sm" variant="ghost" onClick={onTestLoading}>
                                Test Loading
                            </Button>
                        )}
                        {onTestSuccess && (
                            <Button size="sm" variant="ghost" onClick={onTestSuccess}>
                                Test Success
                            </Button>
                        )}
                    </div>
                )}

                <div className="mt-auto pt-6">
                    <div className="mx-auto w-full max-w-[260px] flex items-center justify-between text-muted-foreground">
                        <button type="button" className="flex flex-col items-center gap-1 text-foreground">
                            <Grid2x2 className="h-5 w-5" />
                            <span className="text-[10px] font-medium">Apps</span>
                        </button>
                        <button type="button" className="flex flex-col items-center gap-1">
                            <DollarSign className="h-5 w-5" />
                            <span className="text-[10px]">Payments</span>
                        </button>
                        <button type="button" className="flex flex-col items-center gap-1">
                            <CircleUser className="h-5 w-5" />
                            <span className="text-[10px]">Profile</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
