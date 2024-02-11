import { useState } from "react";
import { Customer } from "../../components/Customer/types";
import { useCustomers } from "../../constants/Customer/useCustomers";
import { CustomerContext } from "./CustomerContext";

export const CustomerProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { customers: initialData } = useCustomers();

  const [customers, setCustomers] = useState<Customer[]>(initialData);
  console.log(customers)

  return (
    <CustomerContext.Provider value={{ customers, setCustomers }}>
      {children}
    </CustomerContext.Provider>
  );
};
