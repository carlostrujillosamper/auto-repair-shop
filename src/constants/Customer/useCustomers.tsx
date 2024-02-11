import { useMemo } from "react";
import { CUSTOMERS } from "./customers";

export const useCustomers = () => {
  const customers = useMemo(
    () =>
      CUSTOMERS.map((customer) => ({
        ...customer,
        id: Math.random().toString(36).slice(2, 9),
        service: customer.service.map((service) => ({
          ...service,
          id: Math.random().toString(36).slice(2, 9),
        })),
      })),
    []
  );

  return { customers };
};
