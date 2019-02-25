import React from 'react'
import './css/bg.css'
class Three extends React.Component{

	render(){
		var mystyle={
			background:"red",
			fontSize:20
		}
		return <div>
		<p style={mystyle}>123</p>
		<p style={{ background:'green'}}>123</p>
		<p className='bg'>123</p>
		</div>
	}
}
export default Three