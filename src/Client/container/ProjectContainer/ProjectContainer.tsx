/**
 *
 * ProjectContainer 文件作用
 * @author Livermzsh <Livermzsh@hotmail.com>
 * @date 2017/9/19
 *
 * @内容 作用
 * @内容 作用
 */


'use strict'
import React, {PureComponent} from 'react';
import './ProjectContainer.scss';
import {IProjects} from "../../../models/Project/IProject";
import {ProjectContainerHoc} from '../../hocs/reduxHoc/ProjectContainerHoc'
import {AutoHeightHoc} from '../../hocs/layoutHoc/AutoHeightHoc'
import ProjectComponent from '../../component/ProjectComponent/ProjectComponent'
interface IProjectContainerProps{
    projects:IProjects
}

function projectCreater(projects:IProjects){
    return projects.map((item,index)=>{
        return <ProjectComponent {...item} key={index} skipRouter={skipRouter}/>
    });
}

//跳转函数
function skipRouter(id:number):void{
    console.log(id);
}

const ProjectContainer: React.SFC<IProjectContainerProps> = (props) => {
    return (
        <div className="projectContainer">
            {projectCreater(props.projects)}
        </div>
    )
};
const projectComp= ProjectContainerHoc()(AutoHeightHoc()(ProjectContainer));
export default projectComp;
