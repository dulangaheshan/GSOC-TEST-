import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserDetails from './UserDetsils';

class App extends Component {
  constructor(props) {
    super(props)
    // this.hoverHandler = this.hoverHandler.bind(this);
    super(props)
    this.state = {
      personData:[],
      hover:false,
    }
  }
//https://jsonplaceholder.typicode.com/users

  componentDidMount(){
    this.getReq().then(data=>{
      console.log(data)
     this.setState({personData:data})
     });

     console.log(this.state.personData)
 }

//  hoverHandler(){
//    if(this.state.hover){
//      this.setState({hover:false})
//    }else{
//      this.setState({hover:true})
//    }
//  }

getReq(){
  return fetch('https://jsonplaceholder.typicode.com/users')
  .then((data)=>data.json())
  .then((res)=>res)
}

// showPersonData(address,id){
//   console.log(address,id)
//   return(
//     <div className="info">
//       <p>Street:{address.street}</p>
//       <p>Suite:{address.suite}</p>
//       <p>City:{address.city}</p>
//       <p>Zip:{address.zipcode}</p>
//     </div>
//   )
// }

ShowPersons(){
  return this.state.personData.map(user => {
    return(
      <div className="item-card" key={user.id}>
      
      <UserDetails user={user}></UserDetails>

      {/* <p onMouseOver={this.hoverHandler}
        onMouseOut={this.hoverHandler} className="Text">{user.name} <p className="Text2"> <span className="span">({user.username})</span> </p> </p>
         {this.state.hover && this.showPersonData(user.address,user.id)} */}
      </div>
    )
  })
}

  render() {
    return (
      <div>
      <h2>Users</h2>   
      <div className="App">  
        {this.ShowPersons()}
      </div>
      </div>
    );
  }
}

export default App;
