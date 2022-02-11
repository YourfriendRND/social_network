import { addPostActionCreator } from '../../../redux/profileReducer';
import { updatePostTextActionCreator } from '../../../redux/profileReducer';
import MyPost from './MyPosts';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        }, 
        updatePostText: (text) => {
            dispatch(updatePostTextActionCreator(text));
        }
    }
}

const ContainerMyPosts = connect(mapStateToProps, mapDispatchToProps)(MyPost)

export default ContainerMyPosts; 