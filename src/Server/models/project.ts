/**
 *
 * project.js 文件作用
 * @author hurong<353486474@QQ.COM>
 * @date 2017/9/18
 *
 * @内容 作用
 * @内容 作用
 */
'use strict';
import {IGetProjectReturn, IProject} from '../../models/HTTP/IProjects'

const project = function (id: number,
                          pname: String,
                          start_time: Date,
                          responserID: number,
                          groupID: Array<number>): IProject {
    return {
        id,
        pname,
        start_time,
        responserID,
        groupID
    }
}
