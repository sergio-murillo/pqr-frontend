import { Request } from '@core/entities/common.entities';

export type RequestState = Readonly<{
  create: Request;
  isLoadingRequests: boolean;
}>;
