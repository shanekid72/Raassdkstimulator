---
name: Project Issues Fix Plan
overview: A comprehensive review found 12 issues across the codebase including 1 failing test, 3 high-priority bugs, 4 medium-priority improvements, and 4 low-priority enhancements.
todos:
  - id: fix-test
    content: Fix failing test by wrapping App in SimulatorProvider
    status: completed
  - id: fix-payment-input
    content: Add state management to PaymentVerificationScreen input
    status: completed
  - id: fix-duplicate-purpose
    content: Remove duplicate 'Savings' entry from TransferPurposeScreen
    status: completed
  - id: fix-confetti-imports
    content: Replace direct confetti imports with fireConfetti utility in 2 files
    status: completed
  - id: fix-useeffect-deps
    content: Fix useEffect dependency array in App.tsx
    status: completed
  - id: fix-css-conflict
    content: Remove conflicting CSS classes in App.tsx
    status: completed
  - id: improve-accessibility
    content: Add accessibility attributes to Input, Select, Modal, BottomSheet, Header
    status: completed
isProject: false
---

# Project Issues Comprehensive Fix Plan

## Build Status

- Build: Passing (no TypeScript or compilation errors)
- Lint: Clean (no linter errors)
- Tests: 1 FAILING

---

## High Priority Issues

### 1. Failing Test - Missing SimulatorProvider

**Location:** [src/test/App.test.tsx](src/test/App.test.tsx)

The test renders `<App />` without wrapping it in `SimulatorProvider`, causing the error:

```
Error: useSimulator must be used within a SimulatorProvider
```

**Fix:** Wrap the App component in SimulatorProvider in the test:

```typescript
import { SimulatorProvider } from "@/app/simulator/SimulatorStore";

render(
  <SimulatorProvider>
    <App />
  </SimulatorProvider>
);
```

---

### 2. Uncontrolled Input - PaymentVerificationScreen

**Location:** [src/app/features/transaction/PaymentVerificationScreen.tsx](src/app/features/transaction/PaymentVerificationScreen.tsx) (line 21)

The Input component has no `value` or `onChange` props, making it non-functional:

```tsx
<Input placeholder="" />  // Uncontrolled - user input not captured
```

**Fix:** Add state management for the secure code input:

```tsx
const [secureCode, setSecureCode] = useState("");
// ...
<Input 
  label="Secure Code"
  value={secureCode} 
  onChange={(e) => setSecureCode(e.target.value)} 
/>
```

---

### 3. Duplicate Array Entries - TransferPurposeScreen

**Location:** [src/app/features/transaction/TransferPurposeScreen.tsx](src/app/features/transaction/TransferPurposeScreen.tsx) (lines 10-19)

The `PURPOSES` array has duplicate "Savings" entries (lines 15 and 18), which causes React key conflicts:

```typescript
const PURPOSES = [
    "Educational Fees",
    "Investment",
    "Real Estate Investment",
    "Repayment of Loan",
    "Savings",        // First occurrence
    "Travel Expenses",
    "Salary",
    "Savings",        // Duplicate - remove this
];
```

**Fix:** Remove the duplicate entry.

---

## Medium Priority Issues

### 4. Inconsistent Confetti Implementation

**Locations:**

- [src/app/features/onboarding/OnboardingSuccessScreen.tsx](src/app/features/onboarding/OnboardingSuccessScreen.tsx) (line 5)
- [src/app/features/transaction/TransactionSuccessScreen.tsx](src/app/features/transaction/TransactionSuccessScreen.tsx) (line 5)

These files import `confetti` directly from `canvas-confetti` instead of using the centralized `fireConfetti()` utility from `src/app/lib/confetti.ts`.

**Fix:** Replace direct imports with the centralized utility:

```typescript
// Before
import confetti from "canvas-confetti";
confetti({ ... });

// After  
import { fireConfetti } from "@/app/lib/confetti";
fireConfetti();
```

---

### 5. useEffect Dependency Issue - App.tsx

**Location:** [src/app/App.tsx](src/app/App.tsx) (lines 109-119)

The `useEffect` that handles `onboardingStep` changes depends on the entire `state` object, causing it to run on any state change.

**Fix:** Change dependency from `state` to specific properties:

```typescript
}, [replace, state.flow, state.onboardingStep]);
```

---

### 6. Conflicting CSS Classes - App.tsx

**Location:** [src/app/App.tsx](src/app/App.tsx) (line 316)

The className includes both `bg-[#f7f7f8]` and `bg-none`, which conflict.

**Fix:** Remove one of the conflicting classes.

---

### 7. Fragile Image Import Paths - VerificationIntroScreen

**Location:** [src/app/features/onboarding/VerificationIntroScreen.tsx](src/app/features/onboarding/VerificationIntroScreen.tsx) (lines 4-6)

Images are imported using fragile relative paths (`../../../../`):

```typescript
import uaePassButton from "../../../../UAEPASS_Continue with_Btn_Pill_Black_Active.png";
```

**Recommendation:** Move image assets to `src/assets/` and use absolute imports with the `@/` alias.

---

## Low Priority Issues

### 8. Accessibility Improvements Needed

**Input.tsx and Select.tsx:**

- Missing `htmlFor` on labels and `id` on inputs
- Missing `aria-describedby` linking to error/helper text

**BottomSheet.tsx and Modal.tsx:**

- Missing `aria-labelledby` pointing to the title element

**DynamicAlert.tsx:**

- Missing `role="alert"` or `aria-live` for screen reader announcements

**Header.tsx:**

- Back button missing `aria-label="Go back"`

---

### 9. TypeScript Strict Mode Disabled

**Location:** [tsconfig.json](tsconfig.json) (line 8)

`strict: false` means potential type issues may go unnoticed. Consider enabling for better type safety.

---

### 10. Missing Error Boundaries

No React error boundaries found. Unhandled errors could crash the app. Consider adding error boundaries around major flows for production readiness.

---

### 11. Hardcoded Exchange Rates

Multiple screens hardcode exchange rates (e.g., `15.33`):

- `TransactionSuccessScreen.tsx`
- `ConfirmationScreen.tsx`
- `AmountScreen.tsx`

**Recommendation:** Centralize exchange rate constants in a shared config or context.

---

### 12. NodeJS.Timeout Type Compatibility

**Location:** [src/app/features/onboarding/DocumentUploadScreen.tsx](src/app/features/onboarding/DocumentUploadScreen.tsx)

Uses `NodeJS.Timeout` type which may not be available in all environments.

**Fix:** Use `ReturnType<typeof setTimeout>` for better compatibility.

---

## Summary Table


| Priority | Issue                           | Location                      | Effort |
| -------- | ------------------------------- | ----------------------------- | ------ |
| High     | Test failing - missing provider | App.test.tsx                  | 2 min  |
| High     | Uncontrolled input              | PaymentVerificationScreen.tsx | 5 min  |
| High     | Duplicate array entry           | TransferPurposeScreen.tsx     | 1 min  |
| Medium   | Inconsistent confetti imports   | 2 files                       | 5 min  |
| Medium   | useEffect dependency            | App.tsx                       | 2 min  |
| Medium   | Conflicting CSS classes         | App.tsx                       | 1 min  |
| Medium   | Fragile image paths             | VerificationIntroScreen.tsx   | 10 min |
| Low      | Accessibility improvements      | Multiple UI components        | 30 min |
| Low      | TypeScript strict mode          | tsconfig.json                 | varies |
| Low      | Error boundaries                | New file needed               | 15 min |
| Low      | Hardcoded exchange rates        | Multiple files                | 20 min |
| Low      | NodeJS.Timeout type             | DocumentUploadScreen.tsx      | 2 min  |


