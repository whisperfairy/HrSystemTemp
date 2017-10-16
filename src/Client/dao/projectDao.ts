/**
 *
 * projectDao 文件作用
 * @author Livermzsh <Livermzsh@hotmail.com>
 * @date 2017/9/19
 *
 * @内容 作用
 * @内容 作用
 */

import  axios,{AxiosPromise} from 'axios'
import config from '../constant/config'

class projectDao {
    initProjectDaoUrl: string;

    constructor() {
        this.initProjectDaoUrl = 'HTTP://'+config.serverIP+'';
    }

    initProjects(url?:string):AxiosPromise{
        return axios({
            url: url || this.initProjectDaoUrl,
            method: 'GET',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/json;charset=UTF-8'
            },
        })
    }
}

const dao = new projectDao();
export default dao;