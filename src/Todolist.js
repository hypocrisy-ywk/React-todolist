import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input , Button , List } from 'antd';

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

class Todolist extends Component{
    render(){       
        return (
           <div>
               <div style={{marginTop:20}}>
                    <Input placeholder='todo info' style={{width:320,height:35,marginRight:6,marginLeft:10}}/>
                    <Button type="primary" style={{height:35,width:66}}>按钮</Button>
               </div>
               <div style={{marginTop:10}}>
                    <List
                        style={{width:393,marginLeft:10}}
                        bordered
                        dataSource={data}
                        renderItem={item => (<List.Item>{item}</List.Item>)}
                    />
               </div>
           </div>
        )
    }
}
export default Todolist;