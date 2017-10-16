/**
 *
 * RouterHoc.js 文件作用
 * @author hurong<353486474@QQ.COM>
 * @date 2017/9/12
 *
 * @内容 作用
 * @内容 作用
 */





'use strict';
import * as React from 'react';
import {PureComponent} from 'react';
import {Route} from 'react-router-dom'
interface orderProps {

}

export function RouterHoc(path) {
    return function (Comp: React.ComponentClass<any> | React.SFC<any>) {
        return class RouterHocComponent extends PureComponent <orderProps, any> {
            render() {
                return (
                    <Route path={path} component={Comp}/>
                )
            }
        }
    }
}