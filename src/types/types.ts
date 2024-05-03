export interface Experience {
  date: string;
  title: string;
  description: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  github?: string;
  youtube?: string;
  demo?: string;
  skills: string[];
  images: string[];
}
