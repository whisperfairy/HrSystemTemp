/**
 *
 * AutoHeightHoc.js 文件作用
 * @author hurong<353486474@QQ.COM>
 * @date 2017/9/12
 *
 * @内容 作用
 * @内容 作用
 */





'use strict';
import * as React from 'react';
import {PureComponent} from 'react';
interface orderProps {

}

export function AutoHeightHoc() {
    return function (Comp: React.ComponentClass<any> | React.SFC<any>) {
       return class AutoHeightHocComponent extends PureComponent <orderProps, any> {
            render() {
                return (
                    <div style={{display:"flex",width:'100%',height:'auto',paddingTop:'64px'}}>
                      <Comp {...this.props}/>
                    </div>
                )
            }
        }
    }
}