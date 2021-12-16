
import classes from './FormControls.module.css';


const FormControl = ({input, meta, ...props}) => {

    const hasError = meta.error && meta.touched;

    return (
        <div className={ hasError ? classes.error_textaera : classes.textarea}>
            <div>
                { props.children}
            </div>
            {
                hasError && <span className={classes.error_span}>{meta.error}</span>
            }
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}> <textarea {...input} {...restProps} /></FormControl>

}

export const Input = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}> <input {...input} {...restProps} /></FormControl>

}


// export const Textarea = ({input, meta, ...props}) => {

//     return (
//            <FormControl {...props}>
//                <textarea />
//            </FormControl> 
//     )
// }

// export const Input = ({input, meta, ...props}) => {

//     debugger;
//     return (
//            <FormControl {...props}>
//                <input />
//            </FormControl> 
//     )
// }
