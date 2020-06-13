import React, { Component, Fragment } from 'react';

class Todolist extends Component{
    constructor(props){
        super(props);
        this.state = {
            inputValue:'',
            list: ['study english', 'learning react','学习语文']
        }
    }

    render(){       
        return (
            <Fragment>
                <div> <input onChange = {this.handleinputValue.bind(this)}
                             value = {this.state.inputValue} />
                    <button onClick = {this.handleclick.bind(this)}>提交</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item,index) => 
                        <li onClick = {this.removeitemclick.bind(this,index)}
                            key={index}>{item}</li>)
                    }
                </ul>
            </Fragment>
        )
    }

    handleinputValue(e){
        this.setState({
            inputValue: e.target.value
        })     
    }

    handleclick(){
        this.setState({
            list:[...this.state.list , this.state.inputValue],
            inputValue:''
        })
    }

    removeitemclick(index){
        //immutable
        //state 不允许我们做任何的修改  会对性能优化产生问题  所以不直接this.state.list.splice
        const list = [...this.state.list]
        list.splice(index,1)
        this.setState({
            list: list
        })
    }
}

export default Todolist;
