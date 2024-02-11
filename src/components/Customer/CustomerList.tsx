import { CustomerCard } from "./CustomerCard";
import { useCustomerContext } from "../../context/Customer/useCustomerContext";
import { SimpleGrid } from "@chakra-ui/react";

export const CustomerList = () => {
  const { customers } = useCustomerContext();

  return (
    <>
      <SimpleGrid columns={2} spacing={5}>
        {customers.map((customer) => (
          <CustomerCard key={customer.id} customer={customer} />
        ))}
      </SimpleGrid>
    </>
  );
};
