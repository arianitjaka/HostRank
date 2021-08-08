import React, { lazy } from 'react'
import { Route, Switch } from 'react-router-dom'
import Pricing from '../Pages/Pricing'
const Home = lazy(() => import('../Pages/Home'))
const Login = lazy(() => import('../Pages/Login'))
const Signup = lazy(() => import('../Pages/Signup'))
const Analysis = lazy(() => import('../Pages/Analysis'))


const Default = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/analysis" component={Analysis} />
            <Route exact path="/pricing" component={Pricing} />
        </Switch>

    )
}

export default Default;