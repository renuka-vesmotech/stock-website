import { stocksData } from "./stocksData";
import { useEffect, useState } from "react";
import EachStock from "./EachStock.jsx";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const [allStocks, setAllStocks] = useState([]);
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

  const fetchStocks = async () => {
    const res = await axios.get(`http://localhost:8000/stocks`);
    setAllStocks(res?.data);
  };
  useEffect(() => {
    fetchStocks();
  }, []);

  // ternary operator -> condtion ? statement1 :statement2
  // condtion ->allStocks?.length >0  ? code :"No Data Found"
  return (
    <div style={{ marginTop: "10px" }}>
      <div style={{ textAlign: "center" }}>
        {" "}
        <input onChange={handleSearch} placeholder="Search Stocks" />
        <button
          onClick={() => {
            navigate("/create-stock");
          }}
        >
          Add Stock
        </button>
      </div>

      {allStocks?.length > 0 ? (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            justifyContent: "center",
          }}
        >
          {allStocks?.map((eachStock, index) => {
            // to pass the data from parent component to child component throught
            return <EachStock key={index} props={eachStock} />;
          })}
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <p>No data found</p>
        </div>
      )}
    </div>
  );
};

export default Home;
