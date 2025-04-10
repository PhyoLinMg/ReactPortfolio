export interface AllSkillcategory {
    id: string;
    icon: string;
    title: string;
    skills: Skill[];
  }
  
  export interface Skill {
    id: string;
    icon: string;
    name: string;
  }