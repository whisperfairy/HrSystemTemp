/**
 *
 * ProjectController.js 文件作用
 * @author 胡戎<353486474@QQ.COM>
 * @date ${DATE}
 *
 */

'use strict';

import Router from 'koa-router';
import {connection} from '../db/db'
import {FindAllProject,FindGroupByProjectID} from '../db/SQLString/SQLString'
import {isNull} from "util";
interface TypeProject {
        id:number
        pname: string
        start_time: string
        responserID: number
        status: 0|1
        username: string
        workNo: string
}
const getGroupByProjectID = async (Projects)=>{
    return Promise.all((Projects.map((item:TypeProject)=>{
        return connection.execute(FindGroupByProjectID,[item.id]);
    })))

}
 let getProjects = async  (ctx:Router.IRouterContext,next)=>{
    try{
    const [Projects]= await connection.execute(FindAllProject);
    ctx.type='application/json'
    ctx.status=200;
    //todo mapAsync
    const groups:any= await getGroupByProjectID(Projects)
    const GetProjectsReturn= Projects.map((item,index)=>{
        let [[{Groups:GroupStr}]]:[[{
            Groups:string|null
        }]] = groups[index] ;
        if (typeof GroupStr === 'string')
        {
        let Groups=GroupStr.split(',')
        let groupArray:Array<any>=[];
        for (let i =0;i<Groups.length;i+=2){
            groupArray.push({
                groupID:Groups[i],
                groupName:Groups[i+1]
            })
        }

        return {
            ...item,
            group:groupArray
        }
        }else if(isNull(GroupStr)){
            return {
                ...item,
                group:null
            }
        }
    })
    ctx.body={
        projects:GetProjectsReturn
    }
    }catch(e){
        ctx.status=500;
        ctx.body=e
    }
    await next();
};
export const project=function (router)
{
    router.get('/api/project',getProjects);
}



