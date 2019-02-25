import React from 'react'
 
 

 class Text extends React.Component{
 	render(){
 		return <div>
 			hellow react
 			<One/>
 		</div>
 	}
 }
class One extends React.Component{
 	render(){
 		var myhtml = <a href='javascript:;'>123</a>
 		return <p>中国
 		{myhtml}
 			<span>你好</span>
 		
 		</p>
 	}
 }

 export default Text 