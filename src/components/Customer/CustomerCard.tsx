import { CustomerServiceForm } from "./CustomerServiceForm/CustomerServiceForm";
import { useCustomerServiceForm } from "./CustomerServiceForm/useCustomerServiceForm";
import { CustomerCardProps } from "./types";

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
  } = useCustomerServiceForm( customer.id);

  return (
    <div className="customer-card">
      <h3>
        {firstName} {lastName}
      </h3>
      <p>
        {year} {make} {model}
      </p>
      <ul>
        {services.map((service) => (
          <li key={service.id}>
            <p>{service.desc}</p>
            <p>{service.code}</p>
            <p>{service.date}</p>
            <p>{service.cost}</p>
          </li>
        ))}
      </ul>
      {!isFormVisible ? (
        <button type="button" onClick={toggleAddServiceFormVisibility}>
          New Service
        </button>
      ) : (
        <button type="button" onClick={toggleAddServiceFormVisibility}>
          Cancel New Service
        </button>
      )}

      {isFormVisible && (
        <CustomerServiceForm
          newService={newService}
          handleAddService={handleAddService}
          handleInputChange={handleInputChange}
          isSaving={isSaving}
        />
      )}
    </div>
  );
};
