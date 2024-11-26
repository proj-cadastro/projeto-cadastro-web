export type CourseType = {
  id: string;
  name: string;
  codCourse: string;
  subjects?: string[];
  initialism: string;
  model: string;
  professors?: { name: string }[];
  coordinator?: { name: string };
};
