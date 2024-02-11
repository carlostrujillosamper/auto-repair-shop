import { useEffect, useState } from "react";
import { Customer } from "../../components/Customer/types";
import { useCustomers } from "../../constants/Customer/useCustomers";
import { CustomerContext } from "./CustomerContext";

export const CustomerProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { customers: initialData } = useCustomers();
  const [customers, setCustomers] = useState<Customer[]>(
    JSON.parse(localStorage.getItem("customers") as string) || initialData
  );

  useEffect(() => {
    localStorage.setItem("customers", JSON.stringify(customers));
  }, [customers]);
  return (
    <CustomerContext.Provider value={{ customers, setCustomers }}>
      {children}
    </CustomerContext.Provider>
  );
};
