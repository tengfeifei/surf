import React from 'react'

class Nine extends React.Component{
	constructor(props) {
		  super(props);
		
		  this.state = {
		  	which:'home'
		  };
		}
	render(){
		return <div>
		
		{
			this.whichComponent(this.state.which)
		}
			<ul>
				<li onClick={()=>{
					this.setState({
						which:'list'
					})
				}}>list</li>
				<li  onClick={()=>{
					this.setState({
						which:'home'
					})
				}}>home</li>
				<li  onClick={()=>{
					this.setState({
						which:'center'
					})
				}}>center</li>
			</ul>
		</div>
	}
	whichComponent(type){
		switch(type){
			case 'home':
			return <Home></Home>
			case 'list':
			return <List></List>
			case 'center':
			return <Center></Center>
		}
	}
}

class List extends React.Component{
	render(){
		return <div>
			list
		</div>
	}
}

class Home extends React.Component{
	render(){
		return <div>
			home
		</div>
	}
}

class Center extends React.Component{
	render(){
		return <div>
			center
		</div>
	}
}

export default Nine