import { useState } from "react";
import { Service } from "../types";

export const useCustomerServiceForm = (initialServices: Service[]) => {
  const [services, setNewServices] = useState(initialServices);
  const [isSaving, setIsSaving] = useState(false);
  const [newService, setNewService] = useState({
    code: 0,
    date: "",
    cost: 0,
    desc: "",
    id: "",
  });
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewService((prevService) => ({
      ...prevService,
      [name]: value,
    }));
  };

  const handleAddService = () => {
    setIsSaving(true);
    setNewServices((prevServices) => [
      ...prevServices,
      {
        ...newService,
        id: Math.random().toString(),
      },
    ]);
    setIsSaving(false);
  };

  const toggleAddServiceFormVisibility = () => {
    setIsFormVisible((prevIsFormVisible) => !prevIsFormVisible);
  };

  return {
    services,
    isFormVisible,
    newService,
    isSaving,
    handleAddService,
    handleInputChange,
    toggleAddServiceFormVisibility,
  };
};
