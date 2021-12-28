import { useEffect } from "react";
import { useState } from "react";



const ProfileStatusWithHooks = props => {

    /// HOOKS
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(()=>{
     
        console.log("NOW");
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
                        <input onChange={inputChange} onBlur={deactivateEditMode} value={status} />
                        
                    </div>
              :      
                    <div>
                        <span onDoubleClick={activateEditMode} >{status}</span>
                    </div>
            }
        </div>
      );
}


export default ProfileStatusWithHooks;