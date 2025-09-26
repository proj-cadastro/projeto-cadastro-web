import { IProfessor } from "@/interfaces/IProfessors";
import { useState, useEffect } from "react";
import { ProfessorService } from "../service/Service";
import { ISpecialty } from "@/interfaces/ISpecialty";
import ProfessorDTO from "@/dto/ProfessorDTO";

const useProfessors = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [professors, setProfessors] = useState<{ label: string; value: any }[]>(
    []
  );
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);



  const [specialties, setSpecialties] = useState<ISpecialty[]>([]);


  useEffect(() => {
    const fetchProfessors = async () => {
      try {
        const response = await ProfessorService.listarTodos();

        const professorsData: ProfessorDTO[] = response.data.data.map(
          (p: any) =>
            new ProfessorDTO(
              p.nome,
              p.email,
              p.titulacao,
              p.idUnidade,
              p.referencia,
              p.lattes,
              p.statusAtividade,
              p.observacoes,
              p.id
            )
        );

        console.log(professorsData)

        const formattedProfessors = professorsData.map((professor) => ({
          label: professor.getNome(),
          value: professor, // O objeto professor completo, pois precisa ser enviado para o backend
        }));

        setProfessors(formattedProfessors);
        const specialtyCounts: Record<string, number> = {};
        professorsData.forEach((professor) => {
          const specialty = professor.getTitulacao(); // Campo com a especialidade
          if (specialty) {
            specialtyCounts[specialty] = (specialtyCounts[specialty] || 0) + 1;
          }
        });

        const specialtiesArray = Object.entries(specialtyCounts).map(
          ([specialty, count]) => ({
            specialty,
            count,
          })
        );

        setSpecialties(specialtiesArray);

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
        setError("Falha ao carregar os professores");
      } finally {
        setLoading(false);
      }
    };

    fetchProfessors();
  }, []);
  return { professors, specialties, loading, error, setProfessors };
};

export default useProfessors;


//ponto de parada