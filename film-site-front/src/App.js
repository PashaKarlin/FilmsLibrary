import './App.css';
import AddFilm from './components/AddFilmForm'
import ChooseFile from './components/ChooseFile';
import Films from './components/Films';


function App() {
  return (
    <div >
      <div className='header_block'>
        <div className="button_container">
          <AddFilm />
        </div>
        <div className="button_container">
          <button type="button" className="btn btn-dark btn-lg">Search</button>
        </div>
        <div className="button_container">
          <ChooseFile/>
        </div>
      </div>
      <div>
        <Films/>
      </div>
    </div>
  );
}

export default App;
