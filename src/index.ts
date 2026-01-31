/**
 * Barrel export for embedding RaaS SDK Simulator in parent applications.
 * 
 * Usage in parent app:
 * ```tsx
 * import { RaasApp, SimulatorProvider } from 'raas-sdkstimulator';
 * 
 * function LuluExchangeApp() {
 *   return (
 *     <SimulatorProvider>
 *       <RaasApp embedded />
 *     </SimulatorProvider>
 *   );
 * }
 * ```
 */

// Main App component - use with embedded={true} when embedding in parent app
export { default as RaasApp } from './app/App';

// State provider - wrap RaasApp with this
export { SimulatorProvider } from './app/simulator/SimulatorStore';

// Re-export types that parent app might need
export type { DynamicAlertState } from './app/ui/DynamicAlert';
