import { IProfessor } from "./IProfessors";

export interface ICourse {
  id: string;
  name: string;
  codCourse: string;
  subjects?: string[];
  initialism: string;
  model: string;
  professors: string[];
  coordinator: string;
}
