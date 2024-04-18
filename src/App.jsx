import './App.css';
import Tooltip from './components/Tooltip';

function App() {
  return (
    <div className="main-container">
      <h1 className="main-title">Tooltip in ReactJS</h1>
      <p>Voici un exemple du <Tooltip children={<p className='tooltip-children'>Hover me</p>} content={'Tooltip content'} delay={1000} /> dans un texte inutile.</p>
    </div>
  );
}

export default App;
