import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  Stack,
  StackDivider,
  Box,
  Button,
  Flex
} from "@chakra-ui/react";
import { CustomerServiceForm } from "./CustomerServiceForm/CustomerServiceForm";
import { useCustomerServiceForm } from "./CustomerServiceForm/useCustomerServiceForm";
import { CustomerCardProps } from "./types";
import { CustomerServiceTable } from "./CustomerServiceTable";

export const CustomerCard = ({ customer }: CustomerCardProps) => {
  const {
    firstName,
    lastName,
    year,
    make,
    model,
    service: services,
  } = customer;

  const {
    isFormVisible,
    newService,
    isSaving,
    handleAddService,
    handleInputChange,
    toggleAddServiceFormVisibility,
  } = useCustomerServiceForm(customer.id);

  return (
    <Card>
      <CardHeader>
        <Heading size="md" textAlign={"left"}>
          {firstName} {lastName}
        </Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <Heading size="xs" textTransform="uppercase" textAlign={"left"}>
              {make} {model} {year}
            </Heading>
          </Box>
          <Box>
            <Heading marginBottom={3} size="xs" textTransform="uppercase" textAlign={"left"}>
              Services
            </Heading>
            <CustomerServiceTable services={services} />
            <Flex marginTop={3} w="100%" justifyContent="flex-end">
              {!isFormVisible ? (
                <Button type="button" onClick={toggleAddServiceFormVisibility}>
                  New Service
                </Button>
              ) : (
                <Button type="button" onClick={toggleAddServiceFormVisibility}>
                  Cancel New Service
                </Button>
              )}
            </Flex>
            {isFormVisible && (
              <CustomerServiceForm
                newService={newService}
                handleAddService={handleAddService}
                handleInputChange={handleInputChange}
                isSaving={isSaving}
              />
            )}
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
};
