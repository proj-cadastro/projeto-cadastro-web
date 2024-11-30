// useProfessors.ts
import { IProfessor } from '@/interfaces/IProfessors';
import { useState, useEffect } from 'react';
import { ProfessorService } from './Service';

const useProfessors = () => {
  const [professors, setProfessors] = useState<{ label: string, value: any }[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfessors = async () => {
      try {
        const response = await ProfessorService.listarTodos();
        const professorsData: IProfessor[] = response.data;

        const formattedProfessors = professorsData.map((professor) => ({
          label: professor.name,
          value: professor, // O objeto professor completo, pois precisa ser enviado para o backend
        }));

        setProfessors(formattedProfessors);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
        setError('Falha ao carregar os professores');
      } finally {
        setLoading(false);
      }
    };

    fetchProfessors();
  }, []); // Esse useEffect vai rodar apenas uma vez, no carregamento inicial

  return { professors, loading, error };
};

export default useProfessors;
