import React from 'react';

function PairSelection(props) {

  const handlePairClick = (selectedPair) => {
    props.setSelectedPair(selectedPair);
    props.getSelectedPairInfo(selectedPair);
  }

  const pairList = Object.keys(props.list).map((item, index) => {
    return (
      <option 
      key={index}
      value={item}
      >
        {item}
      </option>
    )
  })

  return (
    <div className="pair-selection">
      <select
        onChange={(e) => handlePairClick(e.target.value)}
        defaultValue="Choose a pair"
      >
        <option placeholder="Choose a pair" value="Choose a pair" disabled>Choose a pair</option>
        {pairList}
      </select>
    </div>
  );
}

export default PairSelection;
