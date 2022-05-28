import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Login from './pages/Login';

function App() {
  return (
    <>
      {/* <Header/>
      <div class="container-fluid">
        <div class="row">
          <Nav/>
          <Main/>
        </div>
      </div> */}
      <Login/>
    </>
  );
}

export default App;
