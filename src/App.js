import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { Route } from 'react-router-dom';
import ContainerDialogs from './components/Dialogs/ContainerDialogs';
import ContainerFriends from './components/Navbar/Friends/ContainerFriends';

const App = () => {
  return (
    <div className="app-wrapper">
      <Route path="/profile" render={() => <Header pageName="Профиль" />}></Route>
      <Route path="/dialogs" render={() => <Header pageName="Сообщения" />}></Route>
      <Route path="/news" render={() => <Header pageName="Новости" />}></Route>
      <Route path="/music" render={() => <Header pageName="Музыка" />}></Route>
      <Route path="/friends" render={() => <Header pageName="Друзья" />}></Route>
      <Navbar />
      <main className="main-content">
        <Route path="/profile" render={() => <Profile />} />
        <Route path="/dialogs/" render={() => <ContainerDialogs />} />
        <Route path="/friends" render={() => <ContainerFriends />}></Route>
      </main>
    </div>
  );
}

export default App;

// <Route path="/profile/" component={Profile} /> 
// <Route path="/dialogs/" component={Dialogs} />