export type CreativeCategory =
  | 'digital-marketing'
  | 'video-production'
  | 'content-creation'
  | 'branding-visual';

export interface CreativeWork {
  id: string;
  title: string;
  category: CreativeCategory;
  categoryLabel: string;
  clientOrContext: string;
  year: string;
  summary: string;
  role: string;
  keyHighlights: string[];
  toolsAndStack: string[];
  deliverables: string[];
  impactOrOutcome?: string;
}
