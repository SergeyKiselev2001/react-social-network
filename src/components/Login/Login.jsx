
import Field from "redux-form/lib/Field";
import reduxForm from "redux-form/lib/reduxForm";


let Login = (props) => {

    const allFormData = (obj) => {
        console.log(obj);
    }

    return (
        <div>
            <h1>
                Login
            </h1>
            <ReduxLoginForm onSubmit={allFormData} />
        </div>
    )
}


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
                <Field type="text" name="login" placeholder="login" component={"input"}/>
                <br />
                <Field type="password" name="password" placeholder="password" component={"input"}/>
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


export default Login;