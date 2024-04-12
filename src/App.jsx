// import { useState } from "react";
import { useEffect, useState } from "react";
import "./normalize.css";
import Search from "./components/search/Search";
import ViewPicker from "./components/viewpicker/ViewPicker";

// https://www.alphavantage.co/query?function=INCOME_STATEMENT&symbol=IBM&apikey=demo

function App() {
  const [data, setData] = useState(null);
  const [symbol, setSymbol] = useState("");
  const [view, setView] = useState("qtrNetIncome");

  let url =
    "https://www.alphavantage.co/query?function=" +
    view +
    "&symbol=" +
    symbol +
    "&apikey=demo";

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(url);
      const newData = await result.json();
      setData(newData);
    };
    fetchData();
  }, [url]);

  const onViewChange = (e) => {
    setView(e.target.value);
  };

  return (
    <form>
      <fieldset>
        <legend>Search</legend>
        <Search searchSymbol={symbol} onSearchInput={setSymbol} />
        <ViewPicker viewChoice={view} onViewChange={onViewChange} />
      </fieldset>
    </form>
  );
}

export default App;
