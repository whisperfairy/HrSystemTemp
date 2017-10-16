/**
 *
 * WeekPlanListContainer.js 文件作用
 * @author hurong<353486474@QQ.COM>
 * @date 2017/9/23
 *
 * @内容 作用
 * @内容 作用
 */





'use strict';
import * as React from 'react';
import {PureComponent} from 'react';
import './WeekPlanListContainer.scss'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import WeekNoComp from '../../component/WeekNoItemComp/WeekNoComp'
import {VHLayoutHoc} from '../../hocs/layoutHoc/VHLayoutHoc'
function mapStatetoProps(state, ownProps) {
    return {}
}

function mapDispatchtoProps(dispatch) {
    //return bindActionCreators({
    //    
    //}, dispatch)
    return {}
}

interface orderProps {

}
@VHLayoutHoc()
class WeekPlanListContainerComponent extends PureComponent <orderProps, any> {

    render() {
        return (
            <div className='WeekPlanContainer'>
                <div className="WeekNoPlanBox">
                    <WeekNoComp type={'Nature'}></WeekNoComp>
                </div>
                <div className="weekPlanTable"></div>
            </div>
        )
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(WeekPlanListContainerComponent)
