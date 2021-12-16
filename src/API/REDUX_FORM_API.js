import { change, untouch } from "redux-form"



export const ReduxFormAPI = {
    resetForm(props){
        const fields = ['textareaData']
        for (var i = 0; i < fields.length; i++) {
            props.dispatch(change('dialogForm',fields[i],null))
            props.dispatch(untouch('dialogForm',fields[i]))
        }
    }
}

