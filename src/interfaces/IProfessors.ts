import { ICourse } from "./ICourses";

export interface IProfessor {
  _id: string;
  name: string;
  email: string;
  titration: string;
  unitId: string;
  lattes: string;
  reference: string;
  notes: string;
  activityStatus: string;
  courses: ICourse[];
}