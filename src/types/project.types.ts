export type ProjectCategory = 'clinical-his' | 'operational-platform';

export interface ProjectRole {
  title: string;
  responsibilities: string[];
}

export interface ProjectEvidence {
  testSuites?: string;
  testsCount?: string;
  migrationsNote?: string;
  architectureTier?: string;
  realtimeSync?: string;
  mobileCapability?: string;
  reportingEngines?: string;
  accessControl?: string;
}

export interface WorkflowItem {
  order: number;
  title: string;
  actor: 'Perawat' | 'Dokter' | 'Petugas Ambulans' | 'Admin IGD' | 'Petugas Laundry' | 'Sistem';
  summary: string;
  verificationRule?: string;
}

export interface FeatureHighlight {
  title: string;
  description: string;
  technicalEvidence: string;
}

export interface StandardAlignmentItem {
  standard: string;
  conceptApplied: string;
  implementationDetail: string;
}

export interface MediaScreenshot {
  id: string;
  title: string;
  caption: string;
  imagePath: string;
  deviceType: 'desktop' | 'mobile' | 'tv';
  syntheticDataNote: string;
  highlightPoints: string[];
}

export interface ProjectData {
  slug: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  categoryLabel: string;
  githubUrl: string;
  isPrivateRepo?: boolean;
  repoVisibilityNote?: string;
  developmentStatus?: string;
  currentLimitations?: string[];
  plannedRoadmap?: string[];
  timeframe: string;
  role: ProjectRole;
  evidence: ProjectEvidence;
  summary: string;
  problemContext: string;
  solutionApproach: string;
  workflows: WorkflowItem[];
  features: FeatureHighlight[];
  technologies: {
    layer: 'Frontend' | 'Backend & Data' | 'Mobile & Integrasi' | 'Quality & Testing';
    tags: string[];
  }[];
  standardsAlignment: StandardAlignmentItem[];
  screenshots: MediaScreenshot[];
  disclosure: string;
}
