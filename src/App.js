import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
function App() {
  return (
    <div className="App">
      <h1>Book a session</h1>
      <h3>Fill the form below to book a virtual appointment with your doctor</h3>
{<Form/>}
    </div>
  );
}

export default App;
