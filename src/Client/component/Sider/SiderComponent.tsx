/**
 *
 * SiderComponent 文件作用
 * @author hurong <>
 * @date 2017/9/11
 *
 * @内容 作用
 * @内容 作用
 */


'use strict'
import React, {PureComponent} from 'react';
import './Sider.scss'
import {Icon,Menu}from 'antd'
const SubMenu=Menu.SubMenu;

export interface ISiderComponentProps {
    color ?: string;
    theme ?: 'light' | 'dark';
}

const SiderComponent: React.SFC<ISiderComponentProps> = (props) => {
    const {color='black',theme='dark'}=props;
    return (
        <div className="sidebar" data-color={color} data-image="assets/img/sidebar-5.jpg">
            <div className="sidebar-wrapper">
                <div className="logo">
                    <a href="https://github.com/whisperfairy/" className="simple-text">
                        中电六所
                    </a>
                </div>

                <Menu
                    mode="inline"
                    theme={theme}
                >
                    <SubMenu key="sub-m1" title={<span><Icon type="mail" /><span>项目管理</span></span>}>
                    </SubMenu>
                    <SubMenu key="sub-m2" title={<span><Icon type="mail" /><span>任务管理</span></span>}>
                    </SubMenu>
                </Menu>
            </div>
            <div className="slider-background"></div>
        </div>
    );
};
export {SiderComponent};