import './App.css';
import BookList from './components/BookList/BookList';
import {Routes, Route} from "react-router-dom";
import BookDetailsPage from './components/BookDetails/BookDetailsPage';
import Home from './Home';

function App() {
  return (
    <div className="App">
     
      
      <Routes>
        <Route path="/" element={<Home/>}/>
      <Route path = "/" element = {<BookList />} />
      <Route path = "/book" element = {<BookList />} />

      <Route path = "/book/:id" element = {<BookDetailsPage />} />
      </Routes>
      
    </div>
  );
}

export default App;
