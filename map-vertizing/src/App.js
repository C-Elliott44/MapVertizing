import React from 'react';
import './App.css';
import SimpleMap from './components/map'
import Slider from './components/slider'
import DataStore from "./store";

class App extends React.Component {

  constructor(props){
    super(props);
    this.d = new DataStore();
    this.state = { dataInfo: {}, value: 0, neededData:[]};
    this.onSliderChange = this.onSliderChange.bind(this);
  }

  componentDidMount(){
    let data = fetch('https://e2nkh9bvqg.execute-api.us-east-2.amazonaws.com/prod/visitorSampler?count=10')
      .then( (response) => {
        // self.data = response.json();
        return response.json();
      })
      .then(myJson => {
        // self.data = myJson;
        this.setState({dataInfo: myJson});
        this.handleState();
      });
  }
  
  handleState() {
  const location = []
  for(var i = 0, l = this.state.dataInfo.length; i < l; i++ ){
    console.log(this.state.dataInfo[i])
    location.push(
          {
            "lat": this.state.dataInfo[i]["metrics"]["lat"],
            "long": this.state.dataInfo[i]["metrics"]["long"],
            "last visit": this.state.dataInfo[i]["dates"]["Last visit"]
          }
        )
  }
  this.setState({dataInfo: location});
  console.log(this.state.dataInfo);
}

onSliderChange = (value) => {
  var gotData = this.state.dataInfo.filter(item => item["last visit"]<=value)
  console.log(gotData);
  this.setState({neededData: gotData})
  console.log(value);
  console.log("hiiii", this.state.neededData);
}

  render() {
    return(
    <div className="App">
      <SimpleMap 
        gotData={this.state.neededData}
      />
      <Slider 
        onSliderChange={this.onSliderChange}
        data={this.state.dataInfo}
      />
    </div>
    )}
}


export default App;

