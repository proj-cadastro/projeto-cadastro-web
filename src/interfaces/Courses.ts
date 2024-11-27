import { IProfessor } from "./Professors";

export interface ICourse {
  id: string;
  name: string;
  codCourse: string;
  subjects?: string[];
  initialism: string;
  model: string;
  professors: IProfessor[];
  coordinator: IProfessor;
}
