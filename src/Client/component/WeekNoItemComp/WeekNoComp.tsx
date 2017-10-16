/**
 *
 * WeekNoComp.js 文件作用
 * @author hurong<353486474@QQ.COM>
 * @date 2017/9/24
 *
 * @内容 作用
 * @内容 作用
 */


'use strict';
import * as React from 'react';
import {PureComponent} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Moment from 'moment'
import {IWeekNoItemProps} from './WeekNoItem'
import DateTimeFormat = Intl.DateTimeFormat;
import './WeekNoComp.scss'
interface orderProps {
    startTime?:DateTimeFormat
    endTime?:Moment.Moment
    type?:'Nature'|'Project'
    SelectedWeekNo?:number
    onWeekNoItemSelected?:(weekNo:number)=>any
}
interface orderState{
    ListShowed:Array<IWeekNoItemProps>
}

function caculateScrollIndexNature(){

    return {
        scrollIndexMin:0,
        scrollIndexMax:10,
    }
}
function caculateSumWeekNoInYear(year){
    const lastDayInYear = Moment('')
}
function caculateScrollIndexProject(startTime,endTime){
    return {
        scrollIndexMin:0,
        scrollIndexMax:10,
    }
}
class WeekNoCompComponent extends PureComponent <orderProps, orderState> {
    weekNoListBox:HTMLDivElement;
    weekNoList:HTMLDivElement;
    defaultWeekNoItemWidth:number;
    defaultWeekNoItemlength:number;
    scrollIndexMin:number;
    scrollIndexMax:number;
    caculateScrollIndexRange(type){

    }

    handleWeekNoListBoxMaxLeft(maxWeekNo:number,itemWidth:number){

    }
    componentDidMount(){
       const {SelectedWeekNo,type} = this.props;

    }
    render() {
        return (
            <div className='WeekNoComp__box' ref={(ref)=>{this.weekNoListBox=ref}}style={{minWidth:"1200px",width:"100%",height:"100%"}}>
                <div className="WeekNoCompBox__prevBtn"></div>
                <div className="weekNoComp__List" ref={(ref)=>{this.weekNoList=ref}}style={{width:"auto",height:"100%"}}>

                </div>
                <div className="WeekNoCompBox__NextBtn"></div>
            </div>
        )
    }
}

export default (WeekNoCompComponent)
