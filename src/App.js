import './App.css';
import Header from './components/Header/header.jsx';
import Card from './components/Card/card.jsx';
import Footer from './components/Footer/footer.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
      <Header />

      <Card />
      <Footer />
    </div>
  );
}

export default App;
