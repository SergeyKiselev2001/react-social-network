
import ActiveDialog from './ActiveDialog/ActiveDialog';
import DialogItem from './DialogItem/DialogItem';
import classes from './Dialogs.module.css';

const Dialogs = () => {
    return (
        <div className={classes.Dialogs}>
            <div className={classes.DialogList}>
                <DialogItem  />
                <DialogItem  />
                <DialogItem  />
                <DialogItem  />
            </div>
            
            <div className={classes.ActiveDialog}>
                <ActiveDialog />
            </div>
        </div>
    );
}

export default Dialogs;