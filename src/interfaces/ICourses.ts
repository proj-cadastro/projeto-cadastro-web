import { IProfessor } from "./IProfessors";

export interface ICourse {
  _id: string;
  nome: string;
  codCourse: string;
  subjects?: string[] | string | undefined;
  initialism: string;
  model: string;
  professors: IProfessor[];
  coordinator: IProfessor;
}
