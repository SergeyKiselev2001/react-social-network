import { useEffect } from "react";
import { useState } from "react";



const ProfileStatusWithHooks = props => {

    /// HOOKS
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(()=>{
        setStatus(props.status);
    }, [props.status])


    // if (props.status != status){
    //     setStatus(props.status);
    // }

    const activateEditMode = () => {setEditMode(true)};

    const deactivateEditMode = () => {
        props.updateStatus(status);
        setEditMode(false);
    };


    const inputChange = e => {
        setStatus(e.target.value);
    }
    
    return (
        <div>
            {
                editMode ? 
                    <div>
                        {
                            props.isOwner ? 
                                <input onChange={inputChange} onBlur={deactivateEditMode} value={status} /> :
                                <span>{status}</span>
                        }
                        
                    </div>
              :      
                    <div>
                        {
                            props.isOwner ? 
                                <span onDoubleClick={activateEditMode} >{status}</span> :
                                <span>{status}</span>
                        }
                    </div>
            }
        </div>
      );
}


export default ProfileStatusWithHooks;