import { connect } from 'react-redux';
import { sidebarFriendsSL, sidebarLinksSL } from '../../redux/sidebarReduser';
import Navbar from './Navbar';


const mapStateToProps = (state) => {
    return {
        friends: sidebarFriendsSL(state),
        links: sidebarLinksSL(state)
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default NavbarContainer;
