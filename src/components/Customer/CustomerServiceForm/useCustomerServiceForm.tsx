import { useState } from "react";
import { promiseDelay } from "../../../utils/promiseDelay";
import { useCustomerContext } from "../../../context/Customer/useCustomerContext";
import { generateId } from "../../../utils/generateId";
import { Service } from "../types";

interface Error {
  code?: string;
  desc?: string;
  date?: string;
  cost?: string;
}

export const useCustomerServiceForm = (customerId: string) => {
  const { customers, setCustomers } = useCustomerContext();
  const [isSaving, setIsSaving] = useState(false);
  const [newService, setNewService] = useState({} as Service);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [errors, setErrors] = useState({} as Error);
  const [savedSuccesfully, setSavedSuccesfully] = useState(false);
  const [saveError, setSaveError] = useState(false);

  const save = async (): Promise<void> => {
    return promiseDelay(3000).then(() => {
      const customerIndex = customers.findIndex(
        (customer) => customer.id === customerId,
      );
      const updatedCustomer = customers[customerIndex];
      updatedCustomer.service = [...updatedCustomer.service, newService];
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
      [name]: parseFormValue({ name, value }),
      id: generateId(),
    }));
  };

  const handleAddService = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    try {
      if (validateForm()) {
        await save();
        setSavedSuccesfully(true);
      }
    } catch (e) {
      console.error(e);
      setSaveError(false);
    } finally {
      setIsSaving(false);
      setIsFormVisible(false);
    }
  };

  const toggleAddServiceFormVisibility = () => {
    setIsFormVisible((prevIsFormVisible) => !prevIsFormVisible);
  };

  const parseFormValue = ({ name, value }: { name: string; value: string }) => {
    if (name === "cost") {
      return Number(value);
    }
    if (name === "code") {
      return Number(value);
    }
    return value;
  };

  const validateForm = (): boolean => {
    const { code, desc, date, cost } = newService;
    const errors = {} as Error;
    let isValid = true;

    if (!code || isNaN(Number(code))) {
      errors.code = "Code must be a number";
      isValid = false;
    }

    if (desc && typeof desc !== "string") {
      errors.desc = "Description must be a string";
      isValid = false;
    }

    if (!date || typeof date !== "string") {
      errors.date = "Date must be a string";
      isValid = false;
    }

    if (!cost || isNaN(Number(cost))) {
      errors.cost = "Cost must be a number";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  return {
    isFormVisible,
    newService,
    isSaving,
    handleAddService,
    handleInputChange,
    toggleAddServiceFormVisibility,
    errors,
    saveError,
    savedSuccesfully,
  };
};
