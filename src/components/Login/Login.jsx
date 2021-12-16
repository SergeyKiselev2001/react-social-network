
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import Field from "redux-form/lib/Field";
import reduxForm from "redux-form/lib/reduxForm";
import { loginValidator, required } from "../../utils/validators/VALIDATORS";
import { Input } from "../common/FormControls/FormControls";
import {tryToLoginTC} from './../../redux/authReduser'

let Login = (props) => {

    const allFormData = (obj) => {
     
        props.tryToLoginTC(obj.login, obj.password, obj.rememberMe);
    }

    if (props.authStatus === 'You are succsesfully authorised!'){
        return <Redirect to="/profile" />;
    }

    return (
        <div>
            <h1>
                Login
            </h1>
            <ReduxLoginForm onSubmit={allFormData} />
            <h2>{props.authStatus}</h2>
        </div>
    )
}


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
                <Field type="text" validate={[required]} name="login" placeholder="login" component={Input}/>
                <br />
                <Field type="password" validate={[required]} name="password" placeholder="password" component={Input}/>
                <br />
                <Field type="checkbox" name="rememberMe" component={"input"}/> remember me
                <br />
                <input type="submit" placeholder="LOGIN"/>
            </form>
    )
}

let ReduxLoginForm = reduxForm({ // <----- THIS IS THE IMPORTANT PART!
    form: 'login',                           // a unique name for this form
    fields: ['login', 'password', 'rememberMe'] // all the fields in your form
  })(LoginForm);


const mapStateToProps = (state) => {
    return {
        authStatus : state.auth.authStatus
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        tryToLoginTC : (login, password, rememberMe) => dispatch(tryToLoginTC(login, password, rememberMe))
    }
}

const LoginContainer =  connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginContainer;
