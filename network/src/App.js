import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import { Route } from 'react-router-dom';
import ContainerDialogs from './components/Dialogs/ContainerDialogs';
import FriendsPage from './components/FriendsPage/FriendsPage';
import ContainerUsersPage from './components/UsersPage/ContainerUsersPage';
import ContainerProfile from "./components/Profile/ContainerProfile"; 
import AuthPage from './components/AuthPage/AuthPage';

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <AuthPage />
    </div>
  ) 
  // return (
  //   <div className="app-wrapper">
  //     <Route path="/profile" render={() => <Header pageName="Профиль" />}></Route>
  //     <Route path="/dialogs" render={() => <Header pageName="Сообщения" />}></Route>
  //     <Route path="/news" render={() => <Header pageName="Новости" />}></Route>
  //     <Route path="/music" render={() => <Header pageName="Музыка" />}></Route>
  //     <Route path="/friends" render={() => <Header pageName="Друзья" />}></Route>
  //     <Route path="/users" render={() => <Header pageName="Люди" />}></Route>
  //     <Navbar />
  //     <main className="main-content">
  //       <Route path="/profile/:userId?" render={() => <ContainerProfile />} />
  //       <Route path="/dialogs/" render={() => <ContainerDialogs />} />
  //       <Route path="/friends" render={() => <FriendsPage />}></Route>
  //       <Route path="/users" render={() => <ContainerUsersPage />}></Route>
  //     </main>
  //   </div>
  // );
}

export default App;

// <Route path="/profile/" component={Profile} /> 
// <Route path="/dialogs/" component={Dialogs} />