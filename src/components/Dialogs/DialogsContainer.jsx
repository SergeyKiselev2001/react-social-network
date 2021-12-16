
import Dialogs from './Dialogs';
import { addCommentAC } from '../../redux/dialogsReduser';
import { connect } from 'react-redux';
import withAuthRedirect from '../HOCs/AuthHOC';
import { compose } from 'redux';

const mapStateToProps = (state) => {
  return {
    state : state.messagesPage,
    newMessageBody : state.messagesPage.newMessageBody

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addMessage : (currentMsg) => { dispatch(addCommentAC(currentMsg));},
  }
}

export default compose(
  withAuthRedirect,
  connect(mapStateToProps,mapDispatchToProps)
)(Dialogs);;
