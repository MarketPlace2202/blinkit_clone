import { Route, Routes } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Topbar from './component/topbar/Topbar';
import Home from './pages/Home';
import { useState } from 'react';

function App() {
  const [addItemList, setAddItemList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');  // search term state

  return (
    <div>
      <Topbar addItemList={addItemList} setSearchTerm={setSearchTerm} />
      <Routes>
        <Route 
          path='/' 
          element={
            <Home 
              setAddItemList={setAddItemList} 
              addItemList={addItemList} 
              searchTerm={searchTerm}  // pass searchTerm here
            />
          } 
        />
      </Routes>
    </div>
  )
}

export default App
