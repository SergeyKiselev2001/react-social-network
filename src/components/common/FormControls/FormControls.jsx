
import classes from './FormControls.module.css';

export const Textarea = ({input, meta, ...props}) => {

    const hasError = meta.error && meta.touched;

    return (
        <div>
            <textarea className={ hasError ? classes.error_textaera : classes.textarea} {...input} {...props} />
            {
                hasError && <span className={classes.error_span}>{meta.error}</span>
            }
        </div>
    )
}