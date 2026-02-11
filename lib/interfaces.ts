export type ProjectTab = "latest" | "apps" | "branding";

export type ProjectType = "application" | "branding";

export interface IProject {
  name: string;
  description: string;
  img: string;
  /** Override image format when .avif fails (e.g. "webp", "png") */
  imgFormat?: string;
  /** Bypass Next.js optimization when image fails to process */
  unoptimized?: boolean;
  type: ProjectType;
  url?: string;
  source?: string;
  tech: string[];
  wip?: boolean;
}
