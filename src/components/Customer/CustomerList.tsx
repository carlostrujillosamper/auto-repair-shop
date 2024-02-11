import { CustomerCard } from "./CustomerCard";
import { useCustomerContext } from "../../context/Customer/useCustomerContext";

export const CustomerList = () => {
  const { customers } = useCustomerContext();

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
