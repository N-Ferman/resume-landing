export interface ProfilePromptData {
  name: string;
  role: string;
  experience: string;
  techStack: string[];
  directions: string[];
  contacts: {
    email: string;
    telegram: string;
    github: string;
  };
  education: string[];
  projects: Array<{
    title: string;
    description: string;
    stack: string[];
    contribution: string;
  }>;
  about: string;
}
