/**
 *
 * projectActions 文件作用
 * @author Livermzsh <Livermzsh@hotmail.com>
 * @date 2017/9/19
 *
 * @内容 作用
 * @内容 作用
 */

import {ON_INIT_PROJECT_INFORMATION} from '../constant/ActionTypes'
import {IAction}from './IAction'
import dao from '../dao/projectDao'
import {IProject} from '../../models/Project/IProject'

export function initProjects(){
    return async (dispatch)=>{
        try{
            const res:any = await dao.initProjects();
            dispatch(onInitProjects(res.data.projects));
        }catch(err) {
            console.log(err);
        }
    }
}
function onInitProjects(payload:IProject):IAction<IProject>{
    return {
        type:ON_INIT_PROJECT_INFORMATION,
        payload:payload
    }
}