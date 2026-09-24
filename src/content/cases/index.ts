// Every built case study, by slug. Projects without one keep the
// placeholder case page until they're written up.
import type { CaseStudy } from './types';
import { systemsPortal } from './systems-portal';

export const cases: Record<string, CaseStudy> = {
  [systemsPortal.slug]: systemsPortal,
};
