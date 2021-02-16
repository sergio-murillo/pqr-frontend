// Interfaces encargadas de mapear las respuestas de los servicios

export interface CreateRequest {
  title: string;
  description: string;
  answer?: string;
  clientId: string;
  state: 'CREATED' | 'IN_PROCESS' | 'CLOSED';
  type: 'P' | 'Q';
}
