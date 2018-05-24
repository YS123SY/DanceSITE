import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../styles/Navbar.css"; 
 
class NavBar extends React.Component { 
  constructor(props){ 
    super(props) 
    this.state={ 
      focus:false 
    } 
  } 
  onFocus=()=>{ 
    this.setState({ 
      focus:!this.state.focus 
    }) 
  } 
 
  render() { 
    const {focus}=this.state 
    return ( 
      <div className="navbar-main"> 
        <div className="logo-container"> 
          <div 
            className="logo" 
            style={{ 
              backgroundImage: `url("data:image/png;base64,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")` 
            }} 
          /> 
 
          <div className="slogan-container">    
          <p className="slogan">R Y Up 2</p> 
          <p className="slogan"> Dance 2night ?</p>
          </div> 
        </div> 
     
        <div className="btn-navbar"> 
          <select className="select-btn" name="partner"> 
            <option value="value1">Choisir YP</option> 
            <option value="value3">danseuses</option> 
            <option value="value4">group</option> 
          </select> 
 
          <select className="select-btn select-btn-age" name="Age"> 
            <option value="value1"> Age </option> 
            <option value="value2">10></option> 
            <option value="value3">20></option> 
            <option value="value4">30></option> 
            <option value="value5">40></option> 
            <option value="value6">50></option> 
          </select> 
          <input className="plc-btn" placeholder="Ville" /> 
        </div> 
        
 
        <div className="conn-insc-btn"> 
          <Link to="/connection"> 
            <button className= {` conn-btn ${focus ? 'conn-btn-active' :'' }`} onFocus={this.onFocus}>Connection</button> 
          </Link> 
          <Link to="/connection"> 
          <button className={` conn-btn ${focus ? 'conn-btn-active' :'' }`} onFocus={this.onFocus}>Inscription</button> 
          </Link> 
        </div> 
      </div> 
    ); 
  }
}

export default NavBar