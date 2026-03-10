import { stocksData } from "./stocksData";
import { useState } from "react";
import EachStock from "./EachStock.jsx";
const Home = () => {
  const [stocks, setStocks] = useState(stocksData);
  const handleSearch = (event) => {
    let query = event.target.value;
    if (query !== "") {
      console.log(query);

      let filteredStocks = stocks.filter((eachStock, index) => {
        return eachStock.name.includes(query);
      });
      setStocks(filteredStocks);
    } else {
      setStocks(stocksData);
    }
  };
  return (
    <div style={{ marginTop: "10px" }}>
      <div style={{ textAlign: "center" }}>
        {" "}
        <input onChange={handleSearch} placeholder="Search Stocks" />
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {stocks.map((eachStock, index) => {
          // to pass the data from parent component to child component throught
          return <EachStock key={index} props={eachStock} />;
        })}
      </div>
    </div>
  );
};

export default Home;
