interface CustomerServiceFormProps {
  newService: {
    code: number;
    date: string;
    desc: string;
    cost: number;
  };
  handleAddService: (e?: React.FormEvent) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isSaving: boolean;
}
export const CustomerServiceForm = ({ newService, handleAddService, handleInputChange, isSaving }: CustomerServiceFormProps) => {

  return (
    <>
        <form onSubmit={handleAddService}>
          <label htmlFor="code">Code</label>
          <input
            type="number"
            name="code"
            value={newService.code}
            onChange={handleInputChange}
            disabled={isSaving}
            required
            id="code"
          />
          <label htmlFor="date">Date</label>
          <input
            type="text"
            name="date"
            value={newService.date}
            onChange={handleInputChange}
            disabled={isSaving}
            required
            id="date"
          />
          <label htmlFor="desc">Description</label>
          <input
            type="text"
            name="desc"
            value={newService.desc}
            onChange={handleInputChange}
            disabled={isSaving}
            required
            id="desc"
          />
          <label htmlFor="cost">Cost</label>
          <input
            type="number"
            name="cost"
            value={newService.cost}
            onChange={handleInputChange}
            disabled={isSaving}
            required
            id="cost"
          />
          <button type="submit" disabled={isSaving}>
            {isSaving ? "Saving..." : "Add Service"}
          </button>
        </form>
    </>
  );
};
