import {HashRouter , Route ,Switch , Redirect} from 'react-router-dom'
import App from '../App.js'
import Film from '../views/film/film'
import Home from '../views/home/home'
import Center from '../views/center/center'
import Detail from '../views/detail/detail'
import Comingsoon from '../views/film/comingsoon/comingsoon'
import Nowplaying from '../views/film/nowplaying/nowplaying'
import React from 'react'

var router=(
	<HashRouter>
		<App>
		<Switch>
		<Route path='/home' component={Home}></Route>
		{
			<Route path='/film' render={(props)=>
				<Film {...props}>
					<Switch>
					<Route path='/film/comingsoon' component={Comingsoon}></Route>
					<Route path='/film/nowplaying' component={Nowplaying}></Route>
					<Redirect from='/film' to='/film/nowplaying' exact></Redirect>
					</Switch>
				</Film>

			}
			></Route>
		
		}
		<Route path='/center' component={Center}></Route>
		<Route path='/detail/:myid' component={Detail}></Route>
		<Redirect from='/' to='/home' exact></Redirect>
		</Switch>
		</App>

	</HashRouter>

	)
export default router
