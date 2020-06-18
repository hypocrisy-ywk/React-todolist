import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input , Button , List } from 'antd';

import store from './store';

import {
    getInputChangeAction,
    getBtnClickAction,
    getDeleteListAction
} from './store/actionCreators.js'


class Todolist extends Component{
    constructor(props) {
        super(props);
        this.state = store.getState(); //调用store数据
        this.inputValueChange = this.inputValueChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleDeleteList = this.handleDeleteList.bind(this);
        store.subscribe(this.handleStoreChange);//store发生改变时调用
    }

    render(){       
        return (
           <div>
               <div style={{marginTop:20}}>
                    <Input placeholder='todo info'
                           value = {this.state.inputValue}
                           onChange = {this.inputValueChange}
                           style={{width:320,height:35,marginRight:6,marginLeft:10}}/>
                    <Button type="primary"
                            onClick = {this.handleBtnClick}
                            style={{height:35,width:66}}>按钮</Button>
               </div>
               <div style={{marginTop:10}}>
                    <List
                        style={{width:393,marginLeft:10}}
                        bordered
                        dataSource={this.state.list}
                        renderItem={(item,index) => (<List.Item
                                                        key = {index}
                                                        onClick = {() => {this.handleDeleteList(index)}}
                                                    >{item}</List.Item>)}
                    />
               </div>
           </div>
        )
    }

    inputValueChange(e) {
        const action = getInputChangeAction(e.target.value)
        store.dispatch(action)
    }

    handleStoreChange(){
        this.setState(store.getState())
    }

    handleBtnClick(){
        const action = getBtnClickAction()
        store.dispatch(action)
    }

    handleDeleteList(index){
        const action = getDeleteListAction(index) 
        store.dispatch(action)
    }
}
export default Todolist;
