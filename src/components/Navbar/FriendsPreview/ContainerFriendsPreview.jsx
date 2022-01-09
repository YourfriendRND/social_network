import FriendsPreview from './FriendsPreview';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        sideBar: state.friendPage,
    }
}

const ContainerFriendsPreview = connect(mapStateToProps)(FriendsPreview)

export default ContainerFriendsPreview;