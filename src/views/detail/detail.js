import React from 'react'
import  axios from 'axios'
import store from '../../store'
class Detail extends React.Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	looplist:null
	  };
	}

	render(){
		return <div>
			detail
			<ul>
			{
				this.state.looplist?
				<h3>{this.state.looplist.name}</h3>
				:null
			}
			</ul>

		</div>
	}
	componentDidMount(){
		store.dispatch({
			type:'HideTabbar',
			payload:false
		})

		
		axios({
			url:`https://m.maizuo.com/gateway?filmId=${this.props.match.params.myid}&k=5021248`,
			headers:{
				'X-Client-Info': '{"a":"3000","ch":"1002","v":"1.0.0","e":"1549950864124889059033713"}',
				'X-Host': 'mall.film-ticket.film.info'
			}}).then(result=>{
				console.log(result.data.data.film.name)
				this.setState({
					looplist:result.data.data.film
				})

		})
	}
	componentWillUnmount(){
		store.dispatch({
			type:'ShowTabbar',
			payload:true
		})
	}
}

export default Detail