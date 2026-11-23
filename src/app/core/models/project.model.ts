export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  demoUrl?: string;
  repoUrl?: string;
}
