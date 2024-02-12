import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  Text,
  Box,
  Alert,
  AlertIcon,
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
      <form onSubmit={handleAddService} aria-live="polite">
        <FormControl role="presentation">
          <FormLabel htmlFor="code">Code</FormLabel>
          <Input
            type="number"
            name="code"
            value={newService.code}
            onChange={handleInputChange}
            disabled={isSaving}
            isRequired
            id="code"
            aria-describedby="code-description"
          />
          <Text id="code-description" color="grey">
            Please enter the code for the service.
          </Text>

          <FormLabel htmlFor="date">Date</FormLabel>
          <Input
            type="date"
            name="date"
            value={newService.date}
            onChange={handleInputChange}
            disabled={isSaving}
            isRequired
            id="date"
            aria-describedby="date-description"
          />
          <Text id="date-description" color="grey">
            Please enter the date for the service.
          </Text>

          <FormLabel htmlFor="desc">Description</FormLabel>
          <Input
            type="textArea"
            name="desc"
            value={newService.desc}
            onChange={handleInputChange}
            disabled={isSaving}
            id="desc"
            aria-describedby="desc-description"
          />
          <Text id="desc-description" color="grey">
            Please enter a description for the service.
          </Text>

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
              aria-describedby="cost-description"
            />
          </InputGroup>
          <Text id="cost-description" color="grey">
            Please enter the cost for the service.
          </Text>
          <Box width="100%" textAlign={"right"} marginTop={2}>
            <Button type="submit" disabled={isSaving} aria-busy={isSaving}>
              {isSaving ? "Saving..." : "Add Service"}
            </Button>
          </Box>
        </FormControl>
      </form>
    </>
  );
};
