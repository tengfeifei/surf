import React from 'react'

class Five extends React.Component{
constructor(props) {
  super(props);

  this.state = {
  	datalist:[]
  
  };
}

	render(){
		return <div>
			to do list
			<input type='text' ref='mytext'></input>
			<button onClick={this.toClick.bind(this)}>添加</button>
			<ul>
				{
					this.state.datalist.map((item,index)=>{
					return	<li key={index}>
							{item}
							<button onClick={()=>{
								var newlist=[...this.state.datalist]
								newlist.splice(index,1)
								this.setState({
									datalist:newlist

								})
							}}>删除</button>
						</li>

				})
			}
			</ul>
			</div>

	}
	toClick(){
		console.log(this.refs.mytext.value)
		this.setState({
			datalist:[...this.state.datalist,this.refs.mytext.value]
		})
	}
}
export default Five