export interface ModalInformativeData {
  icon: string;
  key: string;
  btnText: string;
  type: string;
}

export interface Customer {
  id: string;
  identification_number: string;
  first_name: string;
  last_name: string;
  cellphone_number: string;
  age: number;
}

export interface Request {
  id: string;
  title: string;
  description: string;
  creation_date: string;
  response_date: string;
  customer: Customer;
  answer?: string;
  state: string;
  type: string;
}

export interface ListRequest {
  response: Request[];
  countResults: number;
}

export interface AutoCompleteItem {
  code: string;
  name: string;
  secundary_code?: string;
  filter: string;
}

export interface ListCustomer {
  response: Customer[];
  countResults: number;
}
