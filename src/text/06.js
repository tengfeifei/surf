import React from 'react'
import proTypes from 'prop-types'


class Header extends React.Component{
	render(){
		return <div>
		<button>返回</button>
		<span>{this.props.myname}</span>
		{
			this.props.myshow?
			<button>主页</button>
			:null
		}
		
		</div>
	}
}
Header.proTypes={
	myname:proTypes.string,
	myshow:proTypes.bool
}

class Six extends React.Component{
constructor(props) {
  super(props);

  this.state = {
  	datalist:[],
  	value:''
  
  };
}

	render(){
		return <div>
			to do list
			<input type='text' value={this.state.value} onChange={(ev)=>{
				this.setState({
					value:ev.target.value
				})
			}}></input>
			<button onClick={this.toClick.bind(this)}>增加</button>
				<ul>
				{
					this.state.datalist.map((item,index)=>{
					return	<li key={index}>
							{item}
							
						</li>

				})
			}
			</ul>
			<Header myname='index' myshow='false'/>
			<Header myname='main' myshow={true}/>
			<Header myname='dodo' myshow={true}/>
			</div>

	}
	toClick(){
		this.setState({
			datalist:[...this.state.datalist,this.state.value]
		})
	}
}
export default Six
{/*<button onClick={()=>{
								var newlist=[...this.state.datalist]
								newlist.splice(index,1)
								this.setState({
									datalist:newlist

								})
							}}>删除</button>*/}
						