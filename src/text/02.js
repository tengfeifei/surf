import React from 'react'

class Two extends React.Component{
	render(){
		var obj = {
			name:'tf',
			age:18
		}
		return	<div>
				<p>{obj.name}</p>
				<p>{obj.age}</p>
				{
				//10<20?111:222
				}

		</div>
	}

}
export default Two