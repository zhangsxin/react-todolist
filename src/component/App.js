import React, { Component } from 'react';
import AppForm from './Appform';
import AppList from './AppList';
import AppFooter from './AppFooter';
// import './App.css';
// import '../css/semantic.css';


class App extends Component {

  state = {
    choosevalue : 1,
    data: this.props.data
  }

  ChooseValue(id) {
    this.setState({choosevalue: id})
  }

  OnAddToDoItem (newItem) {
    let newdata = this.state.data.concat(newItem);
    this.setState({data: newdata})
  }

  AllChangeComplete (id) {
    let newdata = this.state.data.map((item,index) => {
      if(item.id == id){
          item.complete = !item.complete;
      }
      return item;
    })
    this.setState({data: newdata})
  }

  AllOnDeleteItem (id) {
    let newdata = this.state.data.map(function (item) {
      if(item.id == id){
        item.deleteFlag = true
      }
      return item
    })
    this.setState({data: newdata})
  }

  render() {
    // const {data} = this.state;
    return (
      <div className="ui comments">
        <h1>ToDoList</h1>
        <div className='ui divider'></div>
        <AppForm AddToDoItem = {this.OnAddToDoItem.bind(this)}/>
        <AppList  
          data = { this.state.data } 
          choosevalue = {this.state.choosevalue}
          ChangeCompleteTop = {this.AllChangeComplete.bind(this)}
          DeleteItemTop = {this.AllOnDeleteItem.bind(this)}
          />
        <AppFooter SubmitChooseValue = {this.ChooseValue.bind(this)}/>
      </div>
    );
  }
}

export default App;
