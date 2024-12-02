import { IProfessor } from "./IProfessors";

export interface ICourse {
  _id: string;
  name: string;
  codCourse: string;
  subjects?: string[] | string | undefined;
  initialism: string;
  model: string;
  professors: IProfessor[];
  coordinator: IProfessor;
}
