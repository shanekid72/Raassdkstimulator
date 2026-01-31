---
name: Fix Phone Frame Layout Overlap
overview: Fix the persistent overlap/flicker at the bottom of the phone frame by restructuring the layout to use a more robust flexbox approach, ensuring consistent backgrounds, and properly handling the footer/home indicator positioning.
todos:
  - id: refactor-mobile-layout
    content: Refactor MobileLayout.tsx to use flexbox layout with fixed footer area instead of absolute positioning
    status: completed
  - id: fix-app-animation-height
    content: Change motion.div in App.tsx from h-full to min-h-full
    status: cancelled
  - id: add-edge-swipe-background
    content: Add bg-background class to EdgeSwipeBack.tsx wrapper to prevent color bleeding
    status: completed
  - id: test-all-flows
    content: Test all onboarding, recipient, and transaction flows for layout consistency
    status: completed
isProject: false
---

# Fix Phone Frame Layout Overlap

## Root Cause Analysis

The overlap issue stems from three interconnected problems:

1. **Height Chain Problem**: Multiple nested elements use `h-full`, creating a rigid 852px height requirement that conflicts with padding/content expectations
2. **Absolute Footer vs Content Padding**: The footer (`bottom-8`) and home indicator (`bottom-2`) are absolutely positioned siblings to the content area, but rely on content padding to prevent overlap
3. **Background Color Inconsistency**: Different layers have different backgrounds, causing visible bands during transitions

## Solution: Restructure Layout to Flexbox Model

### Phase 1: Fix [MobileLayout.tsx](src/app/layout/MobileLayout.tsx)

Change from current absolute footer positioning to a flex-based layout:

**Current structure:**

- Content area: `h-full overflow-y-auto` with bottom padding
- Footer: `absolute bottom-8` (overlays content)
- Home indicator: `absolute bottom-2` (overlays content)

**New structure:**

- Phone frame: `flex flex-col` container
- Content area: `flex-1 overflow-y-auto min-h-0` (grows to fill, allows shrinking)
- Footer container: Fixed height at bottom, not absolute
- Move padding from inline styles to a wrapper inside content area for cleaner separation

Key changes in [MobileLayout.tsx](src/app/layout/MobileLayout.tsx):

```tsx
// Phone frame becomes flex container
<div id="phone-frame" className="relative w-full max-w-[393px] h-[852px] bg-background rounded-[46px] ... flex flex-col overflow-hidden">
    
    {/* Top safe area with Dynamic Island */}
    <div className="shrink-0" style={{ height: topInset }}>
        <DynamicAlert ... />
    </div>
    
    {/* Content area - grows to fill available space */}
    <div className="flex-1 min-h-0 overflow-y-auto no-scrollbar scroll-smooth world-app-bg">
        {children}
    </div>
    
    {/* Fixed footer area - never overlaps content */}
    <div className="shrink-0 bg-background" style={{ height: bottomInset }}>
        <div className="text-center text-xs text-muted-foreground pt-2">
            Powered By LuLu Exchange
        </div>
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[134px] h-[5px] bg-black/20 rounded-full" />
    </div>
</div>
```

### Phase 2: Fix [App.tsx](src/app/App.tsx) Animation Wrapper

Remove `h-full` from motion.div to prevent height forcing:

```tsx
<motion.div
    key={contentKey}
    initial={{ opacity: 0, x: 24 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -24 }}
    transition={{ type: "spring", stiffness: 260, damping: 28 }}
    className="min-h-full"  // Changed from h-full to min-h-full
>
```

### Phase 3: Ensure Consistent Backgrounds

Add background class to motion.div and EdgeSwipeBack to prevent color bleeding during transitions:

In [EdgeSwipeBack.tsx](src/app/gestures/EdgeSwipeBack.tsx), add `bg-background` to the wrapper:

```tsx
<div className="relative h-full bg-background">{children}</div>
```

### Phase 4: Screen Layout Patterns (Optional Fixes)

Screens that use `h-full` and `mt-auto` should work with the new layout, but verify:

- [VerificationIntroScreen.tsx](src/app/features/onboarding/VerificationIntroScreen.tsx): Uses `h-full` with `mt-auto` - should work
- [DocumentUploadScreen.tsx](src/app/features/onboarding/DocumentUploadScreen.tsx): Uses `h-full` with `mt-auto` - should work
- [ProcessingScreen.tsx](src/app/features/onboarding/ProcessingScreen.tsx): Uses `h-full` - should work
- [OnboardingContinueScreen.tsx](src/app/features/onboarding/OnboardingContinueScreen.tsx): Uses `h-full` - should work
- [HomeScreen.tsx](src/app/features/home/HomeScreen.tsx): Uses `h-full` with `mt-auto` - should work

### Phase 5: CSS Cleanup in [index.css](src/styles/index.css)

The global styles look fine. The `overflow: hidden` and `overscroll-behavior: none` on html/body prevent bounce effects.

## Testing Checklist

After implementation:

- Navigate through all onboarding screens to verify no overlap
- Check footer visibility during screen transitions
- Verify home indicator is always visible
- Test on different content heights (short vs scrollable content)
- Verify no dark/white bands appear during transitions
- Test keyboard avoidance still works with new layout

