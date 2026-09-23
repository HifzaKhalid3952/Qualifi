export type RQFLevel = 2 | 3 | 4 | 5 | 6 | 7 | 8;

export interface Unit {
  code: string;
  title: string;
  level: number;
  credits: number;
  glh: number;
  isMandatory: boolean;
  description: string;
}

export interface Qualification {
  id: string;
  title: string;
  sector: string;
  sectorId: string;
  level: RQFLevel;
  ofqualQN: string;
  qualificationType?: string;
  accreditationStatus?: string;
  availability?: string;
  credits: number;
  tqt: number; // Total Qualification Time (Hours)
  glh: number; // Guided Learning Hours
  grading: 'Pass / Fail' | 'Pass / Merit / Distinction';
  regulationStatus: string;
  overview: string;
  aims: string[];
  entryRequirements: string[];
  progression: string[];
  universityPartners: string[];
  units: Unit[];
  assessmentFormat: string;
  learningOutcomes?: string[];
  featured?: boolean;
}

export interface Sector {
  id: string;
  name: string;
  description: string;
  qualificationCount: number;
}

export interface SectorCluster {
  id: string;
  name: string;
  clusterType: 'cluster' | 'standalone';
  clusterSummary: string;
  sectorIds: string[];
  subSectors: {
    id: string;
    name: string;
  }[];
}

export interface ApprovedCentre {
  id: string;
  name: string;
  centreNumber: string;
  country: string;
  city: string;
  deliveryMode: 'Online' | 'Blended' | 'Classroom';
  sectors: string[];
  contactEmail: string;
}
