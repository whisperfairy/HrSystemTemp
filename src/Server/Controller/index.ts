/**
 * Created by hurong on 2017/9/4.
 */
/**
 * Created by whisper on 2016/11/16.
 */

import * as Router from 'koa-router';
import * as mysql from 'mysql2'
import {project} from './ProjectController'
export function initController(app){
    const router = new Router();
    project(router)
    app.use(router.routes());
    app.use(router.allowedMethods);
}