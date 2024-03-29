import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  Stack,
  StackDivider,
  Box,
  Button,
  Flex,
  useToast,
} from "@chakra-ui/react";
import { CustomerServiceForm } from "./CustomerServiceForm/CustomerServiceForm";
import { useCustomerServiceForm } from "./CustomerServiceForm/useCustomerServiceForm";
import { CustomerCardProps } from "./types";
import { CustomerServiceTable } from "./CustomerServiceTable";
import { useEffect } from "react";

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
    saveError,
    savedSuccesfully,
  } = useCustomerServiceForm(customer.id);
  const toast = useToast();
  useEffect(() => {
    if (savedSuccesfully) {
      toast({
        title: "Saved succesfully.",
        description: "Service has been added to the customer.",
        status: "success",
        duration: 9000,
        isClosable: true,
        position: "top",
      });
    }
    if (saveError) {
      toast({
        title: "Error.",
        description: "Something went wrong",
        status: "error",
        duration: 9000,
        isClosable: true,
        position: "top",
      });
    }
  }, [savedSuccesfully, saveError]);

  return (
    <>
      <Card role="region" aria-labelledby={`customer-${customer.id}-heading`}>
        <CardHeader>
          <Heading
            size="md"
            textAlign={"left"}
            id={`customer-${customer.id}-heading`}
          >
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
            <Heading
              marginBottom={3}
              size="xs"
              textTransform="uppercase"
              textAlign={"left"}
              color="grey"
            >
              Services
            </Heading>
            <Box>
              <CustomerServiceTable services={services} />
              <Flex marginTop={3} w="100%" justifyContent="flex-end">
                {!isFormVisible ? (
                  <Button
                    type="button"
                    onClick={toggleAddServiceFormVisibility}
                  >
                    New Service
                  </Button>
                ) : (
                  <Button
                    type="button"
                    onClick={toggleAddServiceFormVisibility}
                  >
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
    </>
  );
};
