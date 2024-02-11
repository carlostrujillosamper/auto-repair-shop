import { CUSTOMERS } from "../../constants/Customer/customers";
import { CustomerCard } from "./CustomerCard";

export const CustomerList = () => {
  return (
    <div className="customer-list">
      {CUSTOMERS.map((customer, index) => (
        <CustomerCard key={index} customer={customer} />
      ))}
    </div>
  );
}