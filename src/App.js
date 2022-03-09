import './App.css';

import { useEffect, useState } from 'react';

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
      <header className="App-header">
        <h1>Purchases</h1>
        <div>
          {purchases.map((purchase) => (
            <div>{JSON.stringify(purchase)}</div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
