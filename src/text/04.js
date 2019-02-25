import React from 'react'

class Four extends React.Component{

	constructor(props) {
	  super(props);
	  this.myele=null;
	
	  this.state = {
	  	name:'tf',
	  	age:18,
	  	count:1,
	  	bg:{background:'red'},
	  	bg1:{background:'green'},
	  	isShow:true
	  };
	}


	render(){
		return <div>
		{this.state.name}---{this.state.age}---{this.state.count}----
			<p style={this.state.isShow?this.state.bg:this.state.bg1}>hello word</p>
			<button  onClick={()=>{
				this.setState((ddd)=>{
					console.log(ddd)
					return {
						isShow:!ddd.isShow
					}
				})
				
			}}>变色</button>
			<input type='text' ref='mytext'></input>
			

			<button onClick={()=>{
				console.log(this.refs.mytext.value)
			}}>点我</button>
			
			 <input type='password' ref={(el)=>{this.myele=el}}></input>
			 <button onClick={this.myClick.bind(this)}>来点我啊</button>
			  <button onClick={this.myClick2.bind(this)}>熬熬啊</button>
			</div>
	}




	myClick2(){
		this.setState((prevstate)=>{
			return {
				count:prevstate.count+1

			}
		})
		this.setState((prevstate)=>{
			return {
				count:prevstate.count+1
				
			}
		})

	}
	myClick(){
		this.setState({
			

			name:'feifei'
					},()=>{
			console.log("ok")
			console.log(this.state.name)
		})
		console.log(this.state.name)

	}
}
export default Four