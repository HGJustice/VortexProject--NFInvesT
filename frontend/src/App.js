import "./App.css";
import { useAccount } from "@particle-network/connect-react-ui";
import ConnectButton from "./Components/CustomConnectButton";

function App() {
  const account = useAccount();

  return (
    <div className="App">
      <ConnectButton />
    </div>
  );
}

export default App;
