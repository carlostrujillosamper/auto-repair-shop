export interface Customer {
  firstName: string;
  lastName: string;
  year: number;
  make: string;
  model: string;
  service: Service[];
  id: string;
}

export interface Service {
  code: number;
  desc: string;
  date: string;
  cost: number;
  id: string;
}

export interface CustomerCardProps {
  customer: Customer;
}
