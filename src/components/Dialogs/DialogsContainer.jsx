
import Dialogs from './Dialogs';
import { changeCommentAC } from '../../redux/dialogsReduser';
import { addCommentAC } from '../../redux/dialogsReduser';
import { connect } from 'react-redux';
import withAuthRedirect from '../HOCs/AuthHOC';
import { compose } from 'redux';

const mapStateToProps = (state) => {
  return {
    state : state.messagesPage,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addMessage : () => { dispatch(addCommentAC());},
    inputChanging: (txt) => { dispatch(changeCommentAC(txt)); }
  }
}

export default compose(
  withAuthRedirect,
  connect(mapStateToProps,mapDispatchToProps)
)(Dialogs);;
