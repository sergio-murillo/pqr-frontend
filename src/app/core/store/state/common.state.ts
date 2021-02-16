// Definición del estado

import {
  ListCustomer,
  ListRequest,
  Request,
} from '../../entities/common.entities';

export type CommonState = Readonly<{
  getById: Request;
  getAll: ListRequest;
  getAllCustomers: ListCustomer;
  isLoading: boolean;
}>;
