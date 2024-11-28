import { ICourse } from "./ICourses";

export interface IProfessor {
  id: string;
  name: string;
  email: string;
  titration: string;
  registrationNumber: string;
  unitId: string;
  lattes: string;
  reference: string;
  notes: string;
  activityStatus: string;
  courses: string[];
}
