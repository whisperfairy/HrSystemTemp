/**
 *
 * WeekNoItem 文件作用
 * @author hurong <>
 * @date 2017/9/24
 *
 * @内容 作用
 * @内容 作用
 */


'use strict'
import React, {PureComponent} from 'react';

import * as Moment from 'moment'
import './WeekNoItem.scss'
export interface IWeekNoItemProps {
    startTime?:Moment.Moment
    endTime?:Moment.Moment
    type?:'Nature'|'Project'
    NatureWeekNo?:number
    ProjectWeekNo?:number
}

const WeekNoItem: React.SFC<IWeekNoItemProps> = (props) => {
    const {startTime,endTime,type,NatureWeekNo,ProjectWeekNo} = props;
    return <div>

    </div>;
};
export {WeekNoItem};