/**
 *
 * IProject 文件作用
 * @author Livermzsh <Livermzsh@hotmail.com>
 * @date 2017/9/18
 *
 * @内容 作用
 * @内容 作用
 */

export interface person{
    id:number
    name:string
}

export interface IProject{
    id:number //项目id
    name:string //项目名称
    leader:string //项目负责人
    start_time:string //项目开始时间
    status:string  //投标、在研、完成
    members:Array<person>  //项目组成员
}

export type IProjects=Array<IProject>