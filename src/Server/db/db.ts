/**
 *
 * db.ts.js 文件作用
 * @author hurong<353486474@QQ.COM>
 * @date 2017/9/18
 *
 * @内容 作用
 * @内容 作用
 */
'use strict';
import * as mysql from 'mysql2/promise'
let connection:any;
const connecting = async function () {
     connection = await mysql.createConnection(
        {   host     : '115.28.136.5',
            port     : '13306',
            user     : 'scrum6s',
            password : 'cnmbeva11',
            database : 'scrum6s'});

}

export { connection,
    connecting
};