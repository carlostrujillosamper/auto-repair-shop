import { useState } from "react";
import { promiseDelay } from "../../../utils/promiseDelay";
import { useCustomerContext } from "../../../context/Customer/useCustomerContext";

export const useCustomerServiceForm = (
  customerId: string
) => {
  const { customers, setCustomers } = useCustomerContext();
  const [isSaving, setIsSaving] = useState(false);
  const [newService, setNewService] = useState({
    code: 0,
    date: "",
    cost: 0,
    desc: "",
    id: "",
  });

  const [isFormVisible, setIsFormVisible] = useState(false);

  const save = async (): Promise<void> => {
    return promiseDelay(3000).then(() => {
      const customerIndex = customers.findIndex(
        (customer) => customer.id === customerId
      );
      const updatedCustomer = customers[customerIndex];
      const newServiceWithId = { ...newService, id: Math.random().toString() };
      updatedCustomer.service = [...updatedCustomer.service, newServiceWithId];
      const updatedCustomers = [
        ...customers.slice(0, customerIndex),
        updatedCustomer,
        ...customers.slice(customerIndex + 1),
      ];
      setCustomers(updatedCustomers);
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewService((prevService) => ({
      ...prevService,
      [name]: value,
    }));
  };

  const handleAddService = async (e: React.FormEvent) => {
    console.log(e);
    e.preventDefault();
    setIsSaving(true);
    try {
      await save();
    } catch (e) {
      console.error(e);
    } finally {
      setIsSaving(false);
    }
  };

  const toggleAddServiceFormVisibility = () => {
    setIsFormVisible((prevIsFormVisible) => !prevIsFormVisible);
  };

  return {
    isFormVisible,
    newService,
    isSaving,
    handleAddService,
    handleInputChange,
    toggleAddServiceFormVisibility,
  };
};
