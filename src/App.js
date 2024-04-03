import './App.css';
import Header from './components/Header/header.jsx';
import Card from './components/Card/card.jsx';
import Footer from './components/Footer/footer.jsx';

const App = () => {
  const data = [
    {
      "id": "15540",
      "english": "pear",
      "transcription": "[peə]",
      "russian": "груша",
      "tags": "fruit",
      "tags_json": "[\"fruit\"]"
    },
    {
      "id": "15544",
      "english": "table",
      "transcription": "[teɪbl]",
      "russian": "стол",
      "tags": "furniture",
      "tags_json": "[\"furniture\"]"
    },
    {
      "id": "15546",
      "english": "laptop",
      "transcription": "[læptɒp]",
      "russian": "ноутбук",
      "tags": "general",
      "tags_json": "[\"general\"]"
    },
    {
      "id": "15547",
      "english": "tea",
      "transcription": "[tiː]",
      "russian": "чай",
      "tags": "food",
      "tags_json": "[\"food\"]"
    },
    {
      "id": "15549",
      "english": "example",
      "transcription": "[example]",
      "russian": "пример",
      "tags": "general",
      "tags_json": "[\"general\"]"
    }
  ];
}
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
