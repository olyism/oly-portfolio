import { ThemeColor } from "@/types/enums";

interface Project {
  title: string;
  slug: string;
  summary?: string;
  tags?: string[];
  url?: string;
  github?: string;
  themeColor?: ThemeColor;
  date?: string;
  content?: string;
}

export default Project;
