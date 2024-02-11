import { createContext } from "react";
import { Customer } from "../../components/Customer/types";

interface CustomerContextProps {
    customers: Customer[];
    setCustomers: (value: Customer[]) => void;
    
}

export const CustomerContext = createContext<CustomerContextProps>(
  {} as CustomerContextProps
);
