import React from 'react'
import axios from 'axios'
import obj from './nowplaying.module.scss'
class Nowplaying extends React.Component{
constructor(props){
		  super(props);
		
		  this.state = {
		  	datalist:null
		  }};

	render(){
		
		
		return <div>
			Nowplaying
			<ul className={obj.bg}>
			{
				this.state.datalist?
				this.state.datalist.map((item) => 
					{
					return	<li key={item.filmId} onClick={this.halderClick.bind(this,item.filmId)}>
				 	<h3>{item.name}</h3>
					<img src={item.poster}/>
					</li>
				}
				)
				:null
			}
			</ul>
		</div>
	}
	halderClick(id){
		this.props.history.push(`/detail/${id}`)
	}
	componentDidMount(){
		axios({
			url:'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=444862',
			headers:{
				'X-Client-Info': '{"a":"3000","ch":"1002","v":"1.0.0","e":"1549950864124889059033713"}',
				'X-Host': 'mall.film-ticket.film.list'
			}}).then(result=>{
				console.log(result.data)
				this.setState({
					datalist:result.data.data.films
				})
		})
	}
}

export default Nowplaying