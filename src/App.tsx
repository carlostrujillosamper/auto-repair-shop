import "./App.css";
import { CustomerList } from "./components/Customer/CustomerList";
import { CustomerProvider } from "./context/Customer/CustomerProvider";

function App() {
  return (
    <>
    <CustomerProvider>
      <CustomerList />
    </CustomerProvider>
    </>
  );
}

export default App;
