import React from 'react'

class Seven extends React.Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	isShow:false
	  };
	}
	render(){
		return <div>
	111
	<Header>

		
			<button onClick={()=>{
			this.setState({
				isShow:!this.state.isShow
			})
		}}>click</button>
	
		<button>click</button>
		<p>123213</p>
		<button>click</button>
	
	</Header>
	{
		this.state.isShow?
		<Footer></Footer>
		:null
	}
	
		</div>
	}
}
class Header extends React.Component{
	render(){
		return <div>
			<ul>
			<li>{this.props.children[0]}</li>
			<li>{this.props.children[1]}</li>
			<li>{this.props.children[2]}</li>
			</ul>
		</div>
	}
}
class Footer extends React.Component{
	render(){
		return <div>
			footer
		</div>
	}
}
export default Seven