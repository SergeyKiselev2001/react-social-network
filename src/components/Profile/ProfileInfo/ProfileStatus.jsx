

import React from "react";

class ProfileStatus extends React.Component {
  
    

    state = {
        editMode: false,
        status : ''
    }

    async componentDidMount(){
        this.state.status = this.props.status;

        await this.props.getStatus(2);
    
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
                            <span onDoubleClick={()=>this.toggleFocus()}>{this.props.status}</span>
                        </div>
                }
              
            </div>
          );
    }
};

export default ProfileStatus;
