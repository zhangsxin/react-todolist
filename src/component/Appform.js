import React, {Component} from 'react';
import uuid from 'uuid';

var styles = {
    'title': {
      width: 200,
      display: 'inline-block',
      marginRight: 10,
      verticalAlign: 'top'
    }
  }

class AppForm extends Component {
    handleSubmit (event) {
        event.preventDefault();
        let text = this.refs.text.value;

        if(!text.trim()) {
            alert('输入不能为空')
            return
        }

        let id = uuid();
        this.props.AddToDoItem({id,text,complete:false})
    }

    render () {
        return (
            <form className = 'ui reply form'
                onSubmit = {this.handleSubmit.bind(this)}>
                <div className = 'field' style = {styles.title}>
                    <input type='text' placeholder = 'todo' ref = 'text' />
                </div>
                <button type = 'submit' className = 'ui blue button'>
                    添加
                </button>
            </form>
        )
    }
} 

export default AppForm;