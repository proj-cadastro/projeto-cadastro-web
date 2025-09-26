/* eslint-disable @typescript-eslint/no-explicit-any */
import api from "./axiosConfig";
import LoginDTO from "./../dto/LoginDTO"
import UserDTO from "@/dto/UserDTO";
import ProfessorDTO from "@/dto/ProfessorDTO";
import CourseResponseDTO from "@/dto/CourseResponseDTO";
import CourseRequestDTO from "@/dto/CourseRequestDTO";

const UserService = {
  listarTodos: () => api.get("/usuarios"),
  criar: (dados: any) => api.post("/usuarios", new UserDTO(dados.username, dados.email, dados.password)),
  buscarPorId: (id: string) => api.get(`/usuarios/${id}`),
  deletar: (id: string) => api.delete(`/usuarios/${id}`),
  login: (credentials: { email: string; password: string }) =>

    api.post("/auth/login", new LoginDTO(credentials.email, credentials.password)),

}
  ;

// Serviços para Professors
const ProfessorService = {
  listarTodos: () => api.get("/professores"),
  criar: (dados: any) => api.post("/professores", new ProfessorDTO(
    dados.name, dados.email, dados.titration, dados.unitId, dados.reference, dados.lattes, dados.activityStatus, dados.notes)),
  buscarPorId: (id: string) => api.get(`/professores/${id}`),
  atualizar: (id: string, dados: any) => api.put(`/professores/${id}`, dados),
  deletar: (id: string) => api.delete(`/professores/${id}`),
};

// Serviços para Courses
const CourseService = {
  listarTodos: () => api.get("/cursos"),
  criar: (dados: any) => api.post("/cursos", new CourseRequestDTO(dados.name, dados.codCourse, dados.initialism, dados.model, dados.coordinator.id)),
  buscarPorId: (id: string) => api.get(`/cursos/${id}`),
  atualizar: (id: string, dados: any) => api.put(`/cursos/${id}`, dados),
  deletar: (id: number) => api.delete(`/cursos/${id}`),
};

export { UserService, ProfessorService, CourseService };
