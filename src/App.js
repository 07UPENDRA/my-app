// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  // let name = "World!";
  return (
    <>
      {/* <nav>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </nav>
      <div className="container">
        <h1>
          Hello {name}
        </h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus explicabo veritatis quos impedit, natus dolorum odit adipisci cumque corporis. Porro, vero iste? Optio accusantium iusto repudiandae vel cupiditate cum dolorem!
        </p>
      </div>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React 
          </a>
        </header>
      </div> */}
      <Navbar title = 'TextUtils' aboutText = 'About' />
      <div className='container my-3'>
        <TextForm heading = 'Enter the text to analyze below'/>
      </div>
    </>
  );
}

export default App;
