import { IProfessor } from '@/interfaces/IProfessors';
import { useState, useEffect } from 'react';
import { ProfessorService } from './Service';

const useProfessors = () => {
  const [professors, setProfessors] = useState<{ value: IProfessor; label: string }[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfessors = async () => {
      try {
        const response = await ProfessorService.listarTodos();
        const professorsData: IProfessor[] = response.data;

        // Formatando os dados para o formato necessário
        const formattedProfessors = professorsData.map(professor => ({
          value: professor, // Valor completo do objeto professor
          label: professor.name, // Nome do professor para exibir no dropdown
        }));

        setProfessors(formattedProfessors);
      } catch (err) {
        setError('Falha ao carregar os professores');
      } finally {
        setLoading(false);
      }
    };

    fetchProfessors();
  }, []);

  return { professors, loading, error };
};

export default useProfessors;
