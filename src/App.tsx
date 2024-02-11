import "./App.css";
import { CustomerList } from "./components/Customer/CustomerList";
import { CustomerProvider } from "./context/Customer/CustomerProvider";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <>
      <ChakraProvider>
        <CustomerProvider>
          <CustomerList />
        </CustomerProvider>
      </ChakraProvider>
    </>
  );
}

export default App;
