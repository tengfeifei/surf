import React from 'react'
import axios from 'axios'
import ReactSwipe from 'react-swipe';
import {Link , NavLink} from 'react-router-dom'
import obj from './film.module.scss'
class Film extends React.Component{
	constructor(props) {
	  super(props);
	
	  this.state = {  
	  	imglist:[]
	  };
	}
	render(){
		return <div>
		  
		 {	this.state.imglist.length?
		<ReactSwipe
        className="carousel"
        swipeOptions={{ continuous: false , auto:2000 }} 
     	 >
     	 {
       this.state.imglist.map(item=>
        		<img src={item.imgUrl} key={item.bannerId}/>	
        	)
        	
         }
      </ReactSwipe>
      :null
  }
  		  <ul className={obj.ul_film}>
  		  <li className=''><NavLink to='/film/nowplaying' activeClassName={obj.activer} replace className='a_clear'>正在热映</NavLink></li>
          <li className=''><NavLink to='/film/comingsoon' activeClassName={obj.activer} replace className='a_clear'>即将上映</NavLink></li>
    	  </ul>
			{
				this.props.children
			}

		</div>
	}
	componentDidMount(){
		axios({
			url:'https://m.maizuo.com/gateway?type=2&cityId=440300&k=8860224',
			headers:{
				'X-Client-Info': '{"a":"3000","ch":"1002","v":"1.0.0","e":"1549950864124889059033713"}',
				'X-Host': 'mall.cfg.common-banner'
			}}).then(result=>{
				console.log(result.data.data[0].imgUrl)
				this.setState({
					imglist:result.data.data
				})

		})
	}
}

export default Film