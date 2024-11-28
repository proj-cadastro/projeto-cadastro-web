import axios from 'axios';

const api = axios.create({
  baseURL: 'https://projeto-cadastro-api.onrender.com/', // URL base da API
});

// Serviços para Users
const UserService = {
  listarTodos: () => api.get('/users'),
  criar: (dados: any) => api.post('/users', dados),
  buscarPorId: (id: string) =>  api.get(`/users/${id}`),
  deletar: (id: string) => api.delete(`/users/${id}`),
};

// Serviços para Professors
const ProfessorService = {
  listarTodos: () => api.get('/professors'),
  criar: (dados: any) => api.post('/professors', dados),
  buscarPorId: (id: string) => api.get(`/professors/${id}`),
  atualizar: (id: string, dados: any) => api.put(`/professors/${id}`, dados),
  deletar: (id: string) => api.delete(`/professors/${id}`),
};

// Serviços para Courses
const CourseService = {
  listarTodos: () => api.get('/courses'),
  criar: (dados: any) => api.post('/courses', dados),
  buscarPorId: (id: string) => api.get(`/courses/${id}`),
  atualizar: (id: string, dados: any) => api.put(`/courses/${id}`, dados),
  deletar: (id: string) => api.delete(`/courses/${id}`),
};

export { UserService, ProfessorService, CourseService };