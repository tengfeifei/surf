import React, { Component } from 'react';
// import logo from './logo.svg';
import {Link , NavLink} from 'react-router-dom'
import store from '../store'

class Tabbar extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      isShow:store.getState().tabbarReducer
    };
  }
  componentDidMount(){
    store.subscribe(()=>{
      console.log(store.getState())
      this.setState({
        isShow:store.getState().tabbarReducer
      })
     
    })
  }
  render() {
    return (
      <div>
        {this.state.isShow?
         <ul className='ul_clear'>
              <li className='li_clear'><NavLink to='/home' activeClassName='active' replace className='a_clear'>home </NavLink></li>
              <li className='li_clear'><NavLink to='/film' activeClassName='active' replace className='a_clear'>film </NavLink></li>
              <li className='li_clear'><NavLink to='/center' activeClassName='active' replace className='a_clear'>center </NavLink></li>
        </ul>
        :null

        }
       
 
      </div>
    );
  }
}

export default Tabbar;
