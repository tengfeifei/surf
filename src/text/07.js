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
			<Header mybutton={()=>{
				console.log("111")
				this.setState({
					isShow:!this.state.isShow
				})
			}}></Header>
			{this.state.isShow?<Footer></Footer>:null}
			
		</div>
	}
}
class Header extends React.Component{
	render(){
		return <div>
			header
			<button onClick={()=>{
				this.props.mybutton()
			}}>Show</button>
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