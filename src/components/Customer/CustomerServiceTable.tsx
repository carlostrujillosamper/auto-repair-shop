import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { Service } from "./types";
import { formatDollarAmount } from "../../utils/formatDollarAmount";
import { formatToReadableDate } from "../../utils/formatToReadableDate";

export const CustomerServiceTable = ({ services }: { services: Service[] }) => {
  return (
    <TableContainer>
      <Table variant="simple" colorScheme="teal">
        <Thead bgColor={"#F4F8FA"}>
          <Tr>
            <Th >Code</Th>
            <Th>Description</Th>
            <Th>Date</Th>
            <Th >Cost</Th>
          </Tr>
        </Thead>
        <Tbody>
          {services.map((service) => {
            return (
              <Tr key={service.id}>
                <Td >{service.code}</Td>
                <Td>{service.desc}</Td>
                <Td>{formatToReadableDate(service.date)}</Td>
                <Td >{formatDollarAmount(service.cost)}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
