import React, { Component } from 'react'

class UserDetails extends Component {
    constructor(props) {
        super(props)
        this.hoverHandler = this.hoverHandler.bind(this);
        super(props)
        this.state = {
          hover:false,
        }
      }

      hoverHandler(){
        if(this.state.hover){
          this.setState({hover:false})
        }else{
          this.setState({hover:true})
        }
      }

      showPersonData(address,id){
        console.log(address,id)
        return(
          <div className="info">
            <p>Street:{address.street}</p>
            <p>Suite:{address.suite}</p>
            <p>City:{address.city}</p>
            <p>Zip:{address.zipcode}</p>
          </div>
        )
      }

    render(props) {
        console.log(this.props) 
        return ( 
        <div> 
            <p  onMouseOver={this.hoverHandler}
                onMouseOut={this.hoverHandler} 
                className="Text">{this.props.user.name} 
                <p 
                className="Text2"> 
                <span className="span">({this.props.user.username})</span> 
                </p> 
                </p>
             {this.state.hover && this.showPersonData(this.props.user.address)}
             
             </div> );
    }
}
 
export default UserDetails;
