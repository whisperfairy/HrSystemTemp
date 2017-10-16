/**
 *
 * LoginContainer 文件作用
 * @author hurong <353486474@qq.com>
 * @date 2017/10/14
 *
 * @内容 作用
 * @内容 作用
 */


'use strict'
import React, {PureComponent} from 'react';
import './LoginComp.scss'
import bgmd from '../../asset/imgs/isometric-desk.png';

export interface ILoginContainerProps {
}

const LoginComp: React.SFC<ILoginContainerProps> = (props) => {
    return (<div className="Login__Container">
         <div className="Login__ColorBG--orange"></div>
         <div className="Login__LowerColorBG--Gray"></div>
        <div className="LoginFormContainer">

        </div>
         <figure className="illustrations">
             <img src={bgmd} className="hidden-md-down hidden-xl-up" data-rjs="next/illustrations/isometric-desk-md@2x.png" alt="Isometric desk md"></img>
             <img src={bgmd} className="hidden-lg-down wow fadeIn animated" data-rjs="next/illustrations/isometric-desk@2x.png" alt="Isometric desk" style={{visibility: 'visible'}}></img>
         </figure>
    </div>);
};
export default (LoginComp);