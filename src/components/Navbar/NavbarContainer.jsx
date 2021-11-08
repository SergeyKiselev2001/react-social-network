import { connect } from 'react-redux';
import Navbar from './Navbar';


const mapStateToProps = (state) => {
    return {
        friends: state.sidebarPage.friends,
        links: state.sidebarPage.links
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default NavbarContainer;
