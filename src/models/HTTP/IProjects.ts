/**
 *
 * IProjects.js 文件作用
 * @author hurong<353486474@QQ.COM>
 * @date 2017/9/18
 *
 * @内容 作用
 * @内容 作用
 */
'use strict';
export interface IProject{
    id:number,//项目ID
    pname:string,
    start_time:string,
    responserID:number,
    groupID:Array<number>
}
export interface IGetProjectReturn{
    Projects:Array<IProject>
}
