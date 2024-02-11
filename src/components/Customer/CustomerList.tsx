import { CustomerCard } from "./CustomerCard";
import { useCustomerContext } from "../../context/Customer/useCustomerContext";
import { SimpleGrid } from "@chakra-ui/react";

export const CustomerList = () => {
  const { customers } = useCustomerContext();

  return (
    <>
      <SimpleGrid columns={1} spacing={10}>
        {customers.map((customer) => (
          <CustomerCard key={customer.id} customer={customer} />
        ))}
      </SimpleGrid>
    </>
  );
};
