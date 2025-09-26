import { useState, useEffect } from "react";
import { CourseService } from "../service/Service";
import CourseResponseDTO from "@/dto/CourseResponseDTO";

const useCourses = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [coursesData, setCoursesData] = useState<{ value: any; label: string }[]>([]);

  useEffect(() => {
    // Função para buscar os cursos
    const fetchCourses = async () => {
      try {
        const response = await CourseService.listarTodos(); // Substitua pela URL da sua API

        const aux: CourseResponseDTO[] = response.data.data.map(
          (c: any) => {
            return new CourseResponseDTO(
              c.id,
              c.nome,
              c.codigo,
              c.sigla,
              c.modelo,
              c.coordenadorId
            )
          }
        )

        const formattedCoursesData = aux.map((c) => ({
          value: c,
          label: c.getNome(),
        }));


        setCoursesData(formattedCoursesData)
      } catch (err) {
        setError("Falha ao carregar os cursos");
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  return { loading, error, coursesData, setCoursesData };
};

export default useCourses;
