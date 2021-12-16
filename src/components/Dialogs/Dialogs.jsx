import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import React from 'react';
import Field from "redux-form/lib/Field";
import reduxForm from "redux-form/lib/reduxForm";

const Dialogs = (props) => {
  
  let dialogElements = props.state.dialogsData.map( el => <DialogItem preview={el.name} id={el.id}/> );
  let messageElements = props.state.messagesData.map( el => <Message message={el.msg} id={el.id}/>)

  const storeFormData = (obj) => {
    props.addMessage(obj.textareaData);
  }

  return (
    <div className={classes.Dialogs}>
      <div className={classes.DialogList}>
        {dialogElements}
      </div>

      <div className={classes.ActiveDialog}>
        {messageElements}
        <DialogFormContainer onSubmit={storeFormData} newMessageBody={props.newMessageBody}/>
        
      </div>
    </div>
  );
};

let DialogForm = (props) => {

  return (
    <form onSubmit={props.handleSubmit}>
      <Field 
        type="text" 
        value={props.newMessageBody} 
        placeholder="Введите сообщение..." 
        component="textarea" 
        name="textareaData"
      />

      <br />
      <input type="submit" placeholder="LOGIN"/>
    </form>
  )
}


let DialogFormContainer = reduxForm({
  form: 'dialogForm',
  fields: ['textareaData']
})(DialogForm);

export default Dialogs;
