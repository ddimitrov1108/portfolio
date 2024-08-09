export type ProjectTab = "latest" | "apps" | "branding";

export type ProjectType = "application" | "branding";

export interface IProject {
  name: string;
  description: string;
  img: string;
  type: ProjectType;
  url?: string;
  source?: string;
  tech: string[];
}
