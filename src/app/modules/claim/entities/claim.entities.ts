// Interfaces encargadas de mapear las respuestas de los servicios

import { Customer, Request } from '@core/entities/common.entities';

export interface CreateClaim {
  title: string;
  description: string;
  answer?: string;
  requestId: string;
  state: 'CREATED' | 'IN_PROCESS' | 'CLOSED';
}

export interface Claim {
  id: string;
  title: string;
  description: string;
  creation_date: string;
  response_date: string;
  customer: Customer;
  request: Request;
  answer?: string;
  state: string;
}

export interface ListClaim {
  response: Claim[];
  countResults: number;
}
