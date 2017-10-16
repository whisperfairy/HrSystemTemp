/**
 *
 * app.js 文件作用
 * @author Livermzsh<Livermzsh@hotmail.com>
 * @date 2017/8/17
 *
 * @内容 作用
 * @内容 作用
 */
import * as React from 'react';
import LoginComp from '../LoginContainer/LoginComp'
import './app.scss';
import HomeContainer from '../HomeContainer/HomeContainer'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
const App=()=>{
    return (
        <BrowserRouter>

            <Route path="/" exact={true} render={()=><LoginComp/>}
            >
            <Route path={"/index"} render={()=>{
                return (<LoginComp>

                </LoginComp>)
            }}/>
            </Route>

        </BrowserRouter>
    )

};

export default App;