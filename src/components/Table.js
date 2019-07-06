import React from 'react';

function Table(props) {

  setTimeout(() => {
    console.log(props.selectedPair)
    props.getSelectedPairInfo(props.selectedPair);
  }, 10000)

  const rows = props.selectedPairInfo.map((item, index) => {
    return (
      <div className="row" key={index}>
        <span>{props.selectedPair}</span>
        <span>{item.price}</span>
        <span>{item.time.toLocaleDateString("en-US")} {item.time.toLocaleTimeString("en-US")}</span>
      </div>
    )
  })

  
  return (
    <div className="table">
       <div className="row label">
        <span>Selected Pair</span>
        <span>Price</span>
        <span>Time</span>
      </div>
      {rows}
    </div>
  );
}

export default Table;
