import { useState } from 'react';
import './App.css';
import AddFilm from './components/AddFilmForm'
import ChooseFile from './components/ChooseFile';
import Films from './components/Films';
import SearchInput from './components/SearchInput';


function App() {
  const [label, setLabel] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  return (
    <div >
      <div className='header_block'>
        <div className="button_container">
          <AddFilm />
        </div>
        <div className="button_container">
          <SearchInput setLabel={setLabel} setSearchTerm={setSearchTerm} label={label} />
        </div>
        <div className="button_container">
          <ChooseFile />
        </div>
      </div>
      <div>
        <Films searchTerm={searchTerm} label={label} />
      </div>
    </div>
  );
}

export default App;
