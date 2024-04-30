import './App.css';
import CreateBusiness from './Components/CreateBusiness';
import CreateToken from './Components/CreateToken';
import ApproveToken from './Components/ApproveToken';
import DepositToken from './Components/DepositToken';
import Buytoken from './Components/BuyToken';
import CreateListing from './Components/CreateListing';
import { useAccount } from '@particle-network/connect-react-ui';
import ConnectButton from './Components/CustomConnectButton';

function App() {
  const account = useAccount();

  return (
    <div className="App">
      <ConnectButton />
      {account && <DepositToken />}
    </div>
  );
}

export default App;
