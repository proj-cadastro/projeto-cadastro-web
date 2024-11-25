export interface Filters {
    search: string;
    courses: string[];
    titulacoes: string[];
    status: boolean;
  }
  
  export interface ProfessorFiltersProps {
    filters: Filters;
    setFilters: (filters: Filters) => void;
    availableCourses: string[];
    availableTitulacoes: string[];
  }
  