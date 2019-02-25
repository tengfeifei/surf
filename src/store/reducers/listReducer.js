export var listReducer =(prevState=[],action)=>{
	let {type,payload}=action;

	switch(type){
		case 'addlist':
		return {...prevState,payload};
		case 'removelist':
		return prevState;
		default:
			return prevState

	}

}