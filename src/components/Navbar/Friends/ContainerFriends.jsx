import Friends from './Friends';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        sideBar: state.sideBar,
    }
}

const ContainerFriends = connect(mapStateToProps)(Friends)

export default ContainerFriends; 