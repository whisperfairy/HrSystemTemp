/**
 *
 * VHLayoutHOc.js 文件作用
 * @author hurong<353486474@QQ.COM>
 * @date 2017/9/12
 *
 * @内容 作用
 * @内容 作用
 */





'use strict';
import * as React from 'react';
import {PureComponent} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

function mapStatetoProps(state, ownProps) {
    return {

    }
}
function mapDispatchtoProps(dispatch) {
    //return bindActionCreators({
    //    
    //}, dispatch)
    return {}
}
interface orderProps {

}

export function VHLayoutHoc() {
    return function (Comp: React.ComponentClass<any> | React.SFC<any>) {
        return class VHLayoutHocComponent extends PureComponent <orderProps, any> {

            render() {
                return (
                    <div style={{display:"flex",paddingTop:'64px',width:'100%',height:'100vh'}}>
                    <Comp {...this.props}/>
                    </div>
                )
            }
        }

    }
}