export interface SkillLevelDetails {
  id: number;
  description: string;
  examples: string;
  positions: string[];
  skill: number;
}

export interface SkillDetailedData {
  id?: string;
  name?: string;
  description?: string;
  category?: string;
  L1Details?: SkillLevelDetails;
  L2Details?: SkillLevelDetails;
  L3Details?: SkillLevelDetails;
  L4Details?: SkillLevelDetails;
  L5Details?: SkillLevelDetails;
  L1?: number;
  L2?: number;
  L3?: number;
  L4?: number;
  L5?: number;
}
