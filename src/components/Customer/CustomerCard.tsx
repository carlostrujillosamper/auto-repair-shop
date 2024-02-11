interface Customer {
  firstName: string;
  lastName: string;
  year: number;
  make: string;
  model: string;
  service: Service[];
}

interface Service {
  code: number;
  desc: string;
  date: string;
  cost: number;
}

interface CustomerCardProps {
  customer: Customer;
}

export const CustomerCard = ({ customer }: CustomerCardProps) => {
  const {
    firstName,
    lastName,
    year,
    make,
    model,
    service: services,
  } = customer;
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
          <li key={service.code}>
            <p>{service.desc}</p>
            <p>{service.date}</p>
            <p>{service.cost}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
