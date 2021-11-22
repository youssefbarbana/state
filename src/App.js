import React from "react"
import './App.css';
class App extends React.Component {
  constructor(props) {
    super(props)
  this.state = {
    Person : { fullName:"youssef barbana", bio:"23 years student in GoMyCode", imgSrc:"image.jfif", profession:"Web Developer "},
    show : true,
    
  };
}
  render(){
    
    return (
    <div className="App">
      {
        this.state.show?
      <div>
        <h1>{this.state.Person.fullName}</h1>
        <h2>{this.state.Person.bio}</h2>
        <div><img src={this.state.Person.imgSrc} alt={"photo"}style={{width:500}}></img></div>
        <h1>{this.state.Person.profession}</h1>
        
      </div>
      :null
      }
      <button onClick={()=>this.setState({...this.state,show:!this.state.show})}>Hide/Show</button>
    </div>)
  }

  

  componentWillUnmount() {
    clearInterval(this.myInterval)
  }

}


export default App;