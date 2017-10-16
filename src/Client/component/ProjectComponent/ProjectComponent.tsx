/**
 *
 * ProjectComponent 文件作用
 * @author Livermzsh <Livermzsh@hotmail.com>
 * @date 2017/9/18
 *
 * @内容 作用
 * @内容 作用
 */


'use strict'
import React, {PureComponent} from 'react';
import './ProjectComponent.scss';
import {IProject} from '../../../models/Project/IProject'
import {Card,Button} from "antd";

export interface IProjectComponentProps extends IProject{
    skipRouter:(x:number)=>void
}

const ProjectComponent: React.SFC<IProjectComponentProps> = (props) => {
    return (
        <div className="projectComp">
            <Card title={props.name} extra={<Button onClick={()=>{props.skipRouter(props.id)}}>详细信息</Button>} style={{ width: 300 }}>
                <p>项目编号：{props.id}</p>
                <p>负责人  ：{props.leader}</p>
                <p>开始时间：{props.start_time}</p>
                <p>项目状态：{props.status}</p>
            </Card>
        </div>
    );
};
export default ProjectComponent;