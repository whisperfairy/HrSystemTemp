/**
 *
 * projectReducer 文件作用
 * @author Livermzsh <Livermzsh@hotmail.com>
 * @date 2017/9/18
 *
 * @内容 作用
 * @内容 作用
 */


import immutable from 'immutable';
import {ON_INIT_PROJECT_INFORMATION} from '../constant/ActionTypes'
import {IProject} from "../../models/HTTP/IProjects";

const INITIAL_STATE = immutable.Map(
    {
        projects:[
            {
                id:0,
                name:'项目0',
                leader:'胡戎0',
                start_time:'2017-01-01',
                status:'投标',
                members:[
                    {
                        id:0,
                        name:'胡戎0'
                    },
                    {
                        id:1,
                        name:'胡戎1'
                    },
                    {
                        id:2,
                        name:'胡戎2'
                    },
                ]
            },
            {
                id:1,
                name:'项目1',
                leader:'胡戎1',
                start_time:'2017-01-01',
                status:'在研',
                members:[
                    {
                        id:0,
                        name:'胡戎0'
                    },
                    {
                        id:1,
                        name:'胡戎1'
                    },
                    {
                        id:2,
                        name:'胡戎2'
                    },
                ]
            },
            {
                id:2,
                name:'项目2',
                leader:'胡戎2',
                start_time:'2017-01-01',
                status:'完成',
                members:[
                    {
                        id:0,
                        name:'胡戎0'
                    },
                    {
                        id:1,
                        name:'胡戎1'
                    },
                    {
                        id:2,
                        name:'胡戎2'
                    },
                ]
            },
            {
                id:3,
                name:'项目3',
                leader:'胡戎3',
                start_time:'2017-01-01',
                status:'投标',
                members:[
                    {
                        id:0,
                        name:'胡戎0'
                    },
                    {
                        id:1,
                        name:'胡戎1'
                    },
                    {
                        id:2,
                        name:'胡戎2'
                    },
                ]
            },
            {
                id:4,
                name:'项目4',
                leader:'胡戎4',
                start_time:'2017-01-01',
                status:'在研',
                members:[
                    {
                        id:0,
                        name:'胡戎0'
                    },
                    {
                        id:1,
                        name:'胡戎1'
                    },
                    {
                        id:2,
                        name:'胡戎2'
                    },
                ]
            }
        ]
    }
);
function handleInitProject(state:any,payload:Array<IProject>):any{
    return state.update('projects',(val)=>{
        return payload
    });
}
export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case ON_INIT_PROJECT_INFORMATION:
            handleInitProject(state,action.payload);
        default:
            return state;
    }
}