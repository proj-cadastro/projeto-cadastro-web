import { CourseType } from "@/types/Courses";

export const mockCourses: CourseType[] = [
    {
      id: "1",
      name: "Desenvolvimento de Sistemas",
      codCourse: "DSM01",
      subjects: ["Programação", "Banco de Dados", "Redes"],
      initialism: "DSM",
      model: "Presencial",
      professors: [{ name: "Prof. João" }, { name: "Prof. Maria" }],
      coordinator: { name: "Prof. Ana" },
    },
    {
      id: "2",
      name: "Gestão Empresarial",
      codCourse: "GE02",
      subjects: ["Administração", "Contabilidade"],
      initialism: "GE",
      model: "EAD",
      professors: [{ name: "Prof. Carlos" }],
      coordinator: { name: "Prof. Paulo" },
    },
  ];
  