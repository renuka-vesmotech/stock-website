import React from "react";

const EachStock = (props) => {
  let eachStock = props.props;

  return (
    <div className="stock-card">
      <img style={{ width: "100px", height: "100px" }} src={eachStock.image} />
      <h1 style={{ fontSize: "16px" }}>{eachStock.name}</h1>
      <div className="stock-footer">
        <p>${eachStock.price}</p>
        <p style={{ fontSize: "10px" }}>
          Symbol:
          <span style={{ fontWeight: 700, fontSize: "15px" }}>
            {eachStock.symbol}
          </span>
        </p>
      </div>
    </div>
  );
};

export default EachStock;
