import './App.css';
import SearchBookPage from './SearchBookPage';
import { Route, Routes } from 'react-router-dom';
import BookShelf from './BookShelf';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<BookShelf></BookShelf>}></Route>
      <Route
        exact
        path="/search"
        element={<SearchBookPage></SearchBookPage>}
      ></Route>
    </Routes>
  );
}

export default App;
