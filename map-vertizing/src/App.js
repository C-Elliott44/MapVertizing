import React from 'react';
import './App.css';
import SimpleMap from './components/map'
import Slider from './components/slider'
import DataStore from "./store";


function Application() {
  return (
    <div className="App">
      <SimpleMap />
      <Slider />
    </div>
  );
}
class App extends React.Component {

  constructor(props){
    super(props);
    this.d = new DataStore();
    this.state = { dataInfo: {}}
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

  render() {
    return <div></div>
  }
}


export default App;

