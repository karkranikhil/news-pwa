import React from 'react';
import './style.css';
const NavBar = (props)=>{
  return (
  <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
    <a className="navbar-brand col-xs-4" href="#">News</a>
    <form className="form-inline col-sm-12">
      <div className="form-group has-success has-feedback  col-xs-4 col-sm-8">
        <input type="text" className="form-control w-100 mw-100" onChange={props.filterNews} id="filterNews" placeholder="Filter News"/>
      </div>
    </form>
  </nav>
    )
}

export default NavBar