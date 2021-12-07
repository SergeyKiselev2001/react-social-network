

import React from "react";

class ProfileStatus extends React.Component {
  
    state = {
        editMode: false,
    }

    toggleEditMode = (bool) => {
        
        this.setState({
            editMode: bool
        })
    }

    render(){
        return (
            <div>
                {
                    this.state.editMode ? 
                        <div>
                            <input autoFocus={true} onDoubleClick={()=>this.toggleEditMode(false)} value={this.props.status} />
                        </div>
                  :      
                        <div>
                            <span onDoubleClick={()=>this.toggleEditMode(true)}>{this.props.status}</span>
                        </div>
                }
              
            </div>
          );
    }
};

export default ProfileStatus;
