/**
 *
 * ProjectContainerHoc 文件作用
 * @author Livermzsh <Livermzsh@hotmail.com>
 * @date 2017/9/19
 *
 * @内容 作用
 * @内容 作用
 */


'use strict';
import * as React from 'react';
import {PureComponent} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators} from 'redux';
import {initProjects} from '../../actions/projectActions'

function mapStatetoProps(state) {
    const projects=state.projectReducer.get("projects");
    return {
        projects:projects
    }
}

function mapDispatchtoProps(dispatch) {
    return bindActionCreators({
        initProjects
    }, dispatch)
}


export function ProjectContainerHoc() {
    return function (Comp: React.ComponentClass<any> | React.SFC<any>) {
        class ProjectContainerHocComponent extends PureComponent <any, any> {
            componentDidMount(){
                this.props.initProjects();
            }
            render() {
                return (
                    <Comp {...this.props}/>
                )
            }
        }

        return connect(mapStatetoProps, mapDispatchtoProps)(ProjectContainerHocComponent)
    }
}
