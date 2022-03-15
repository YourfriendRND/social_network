import React from "react";
import { connect } from "react-redux";
import { follow, setUsers, unFollow, changeCurrentPage, setTotalUserCount, setIsFetching } from "../../redux/usersReducer";
import * as axios from "axios"; 
import UsersPage from "./UsersPage";
import { pagination_btn, selected } from "./UsersPage.module.css"; 

class UsersPageWrapper extends React.Component {

    componentDidMount () {
        this.props.setIsFetching(true)
        axios.get(`http://localhost:2000/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(res => {
            this.props.setIsFetching(false)
            this.props.setUsers(res.data.users);
            this.props.setTotalUserCount(res.data.totalCount);
        })
    }

    getPaginationButtons() {
        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize); 
        const paginationButtons = []; 
        for(let i = 1; i <= pagesCount; i++) {
            const PaginationButton = <button 
                                    className={`${pagination_btn} ${this.props.currentPage === i ? selected : ""}`}
                                    onClick={this.onChangeCurrentPage(i)}>
                                        {i}
                                    </button>
            paginationButtons.push(PaginationButton);
        }
        return paginationButtons; 
    }

    onChangeCurrentPage(pageNum) {
        return () => {
            this.props.changeCurrentPage(pageNum);
            this.props.setIsFetching(true);
            axios.get(`http://localhost:2000/users?page=${pageNum}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setIsFetching(false)
                this.props.setUsers(res.data.users);
                this.props.setTotalUserCount(res.data.totalCount);
            })
        }
    }

    render() {
        return <UsersPage users={this.props.usersPage.users}
        follow={this.props.follow} unfollow={this.props.unFollow}
        paginationButtons={this.getPaginationButtons()}
        fetching={this.props.isFetching}
        />
    }
}

const mapStateToProps = (state) => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching, 
    }
};

const ContainerUsersPage = connect(mapStateToProps, {
    setUsers,
    follow,
    unFollow,
    changeCurrentPage,
    setTotalUserCount,
    setIsFetching
})(UsersPageWrapper)

export default ContainerUsersPage; 