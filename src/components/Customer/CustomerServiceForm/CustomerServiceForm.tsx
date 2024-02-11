import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";

interface CustomerServiceFormProps {
  newService: {
    code: number;
    date: string;
    desc: string;
    cost: number;
  };
  handleAddService: (e: React.FormEvent) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isSaving: boolean;
}
export const CustomerServiceForm = ({
  newService,
  handleAddService,
  handleInputChange,
  isSaving,
}: CustomerServiceFormProps) => {
  return (
    <>
      <form onSubmit={handleAddService}>
        <FormControl>
          <FormLabel htmlFor="code">Code</FormLabel>
          <Input
            type="number"
            name="code"
            value={newService.code}
            onChange={handleInputChange}
            disabled={isSaving}
            isRequired
            id="code"
          />
          <FormLabel htmlFor="date">Date</FormLabel>
          <Input
            type="date"
            name="date"
            value={newService.date}
            onChange={handleInputChange}
            disabled={isSaving}
            isRequired
            id="date"
          />
          <FormLabel htmlFor="desc">Description</FormLabel>
          <Input
            type="textArea"
            name="desc"
            value={newService.desc}
            onChange={handleInputChange}
            disabled={isSaving}
            id="desc"
          />
          <FormLabel htmlFor="cost">Cost</FormLabel>
          <InputGroup>
            <InputLeftAddon>$</InputLeftAddon>
            <Input
              type="number"
              name="cost"
              value={newService.cost}
              onChange={handleInputChange}
              disabled={isSaving}
              isRequired
              required
              id="cost"
            />
          </InputGroup>
          <Button type="submit" disabled={isSaving}>
            {isSaving ? "Saving..." : "Add Service"}
          </Button>
        </FormControl>
      </form>
    </>
  );
};
