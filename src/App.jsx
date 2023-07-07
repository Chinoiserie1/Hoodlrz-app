import { WalletConnect } from "./assets/components/walletConnect/walletConnect.jsx";
import { Home } from "../src/assets/pages/Home.jsx";
import { Background } from "./assets/components/background/background.jsx";

function App() {
  return (
    <div>
      <Background>
        <WalletConnect>
          <Home />
        </WalletConnect>
      </Background>
    </div>
  );
}

export default App;
