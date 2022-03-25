import { Heading } from "./styles";

import { useEffect, useState } from "react";
import PurchaseDetails from "./PurchaseDetails";

const url = "https://idme-interview.herokuapp.com/";

function App() {

  const [purchases, setPurchases] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await window.fetch(url);
      const data = await response.json();
      setPurchases(data);
    };
    fetchData();
  }, [setPurchases]);

  return (
    <div className="App">
      <header>
        <Heading className="App-header">Purchases</Heading>
      </header>
      <div>
        {purchases && purchases.length > 0 ? 
          <PurchaseDetails purchases={purchases} />
        :
          <div> No purchase details to display </div>
        } 
        <br/>
        <br/>
        <br/>
        {purchases.map((purchase) => (
          <div>{JSON.stringify(purchase)}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
