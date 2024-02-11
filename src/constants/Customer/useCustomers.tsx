import { useMemo } from "react";
import { CUSTOMERS } from "./customers";
import { generateId } from "../../utils/generateId";

export const useCustomers = () => {
  const customers = useMemo(
    () =>
      CUSTOMERS.map((customer) => ({
        ...customer,
        id: generateId(),
        service: customer.service.map((service) => ({
          ...service,
          id: generateId(),
        })),
      })),
    []
  );

  return { customers };
};
