import { useState } from "react";
import { useCustomers } from "../../constants/Customer/useCustomers";
import { CustomerCard } from "./CustomerCard";

export const CustomerList = () => {
  const { customers: initialData } = useCustomers();
  const [ customers ] = useState(initialData);

  return (
    <>
      <div className="customer-list">
        {customers.map((customer) => (
          <CustomerCard key={customer.id} customer={customer} />
        ))}
      </div>
    </>
  );
};
