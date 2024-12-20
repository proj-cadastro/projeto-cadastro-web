import { useState, useEffect } from "react";
import { CourseService } from "../service/Service";
import { ICourse } from "@/interfaces/ICourses";

const useCourses = () => {
  const [courses, setCourses] = useState<{ value: any; label: string }[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [coursesData, setCoursesData] = useState<{ value: any; label: string }[]>([]);

  useEffect(() => {
    // Função para buscar os cursos
    const fetchCourses = async () => {
      try {
        const response = await CourseService.listarTodos(); // Substitua pela URL da sua API
         const aux: ICourse[] = response.data;

        // Formatando os dados para o formato necessário
        const formattedCourses = aux.map((course) => ({
          value: course._id,
          label: course.name,
        }));

        const formattedCoursesData = aux.map((c) => ({
          value: c,
          label: c.name,
        }));


        setCoursesData(formattedCoursesData)
        setCourses(formattedCourses);
      } catch (err) {
        setError("Falha ao carregar os cursos");
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  return { courses, loading, error, coursesData, setCoursesData };
};

export default useCourses;
