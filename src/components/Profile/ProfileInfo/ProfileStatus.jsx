

import React from "react";

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status : this.props.status
    }


    componentDidUpdate(previousProps, previousState){

        // без условия будет рекурсия
        if (this.props.status != previousProps.status){
            debugger;
            this.setState({
                status: this.props.status
            })
        }
    }
    
    changeInput(event){
        this.setState({
            status : event.target.value
        })
    }

    toggleFocus = () => {
        
        this.setState({
            editMode: true
        })
    }

    toggleUnfocus = () => {


        this.props.updateStatus(this.state.status);
        this.setState({
            editMode: false
        })
    }

    render(){
        return (
            <div>
                {
                    this.state.editMode ? 
                        <div>
                            <input autoFocus={true} onChange={(event)=>this.changeInput(event)} onBlur={()=>this.toggleUnfocus()} value={this.state.status} />
                        </div>
                  :      
                        <div>
                            <span onDoubleClick={()=>this.toggleFocus()}>{this.state.status}</span>
                        </div>
                }
              
            </div>
          );
    }
};

export default ProfileStatus;
