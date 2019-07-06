import React, {Component, Fragment} from 'react';
import './App.css';
import {connect} from 'react-redux';
import { fetchList, setSelectedPair, getSelectedPairInfo } from './actions/index.js';
import {bindActionCreators} from 'redux';
import PairSelection from './components/PairSelection';
import DataComponents from './components/DataComponents';
import Table from './components/Table';
import { throwStatement } from '@babel/types';
import {Line} from 'react-chartjs-2';

class App extends Component {

  componentWillMount() {
    this.props.fetchList();

    console.log(this.props.list);
  }

  render() {
    let data;
    const options = {responsive: true};
    if (this.props.selectedPairInfo.length && this.props.selectedPair) {
      const labels = this.props.selectedPairInfo.map(item => item.time.toLocaleTimeString("us-EN"));
      const priceData = this.props.selectedPairInfo.map(item => item.price);
      data = {
        labels: labels.reverse(),
        datasets: 
        [
          {
            label: this.props.selectedPair,
            fill: false,
            lineTension: 0.1,
            backgroundColor: '#5741d9',
            borderColor: '#5741d9',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: '#5741d9',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: '#5741d9',
            pointHoverBorderColor: '#5741d9',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            showLine:true, 
            data: priceData.reverse()
          }
        ]
      }
    }
    console.log(this.props.selectedPair, this.props.selectedPairInfo)
    if (!this.props.list.length) {
      return(<div>LOADING...</div>)
    }
    
    return (
      <div className="App">
        <header>
          <h1>
            Dev Challenge: Asset Tracker
          </h1>
        </header>
  
        <PairSelection
          list={this.props.list[0]}
          setSelectedPair={this.props.setSelectedPair}
          getSelectedPairInfo={this.props.getSelectedPairInfo}
        />

        {
          !this.props.selectedPair.length ||
          !this.props.selectedPairInfo.length ? (
            <div className="initial-message" >
              Choose a pair from the menu above to get started
            </div>
          ) :
            <div className="data-components-container">
              <div className="graph">
                <Line
                  options={options}
                  data={data ? data : null}
                />
              </div>
      
              <Table
                selectedPair={this.props.selectedPair}
                selectedPairInfo={this.props.selectedPairInfo}
                getSelectedPairInfo={this.props.getSelectedPairInfo}
              />
            </div>
            
        }
       
      </div>
    );
  }
}


function mapPropsToState(state) {
  return {
     list: state.list,
     selectedPair: state.selectedPair[0].selectedPair,
     selectedPairInfo: state.selectedPair[0].selectedPairInfo
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchList, setSelectedPair, getSelectedPairInfo}, dispatch)
}

export default connect(mapPropsToState, mapDispatchToProps)(App);