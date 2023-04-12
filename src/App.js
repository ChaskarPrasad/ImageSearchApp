import ImageList from './components/ImageList';
import SearchBar from './components/SearchBar';
import './App.css';
import searchImages from './api';
import { useState } from "react";

function App() {
  const [images, setImages] = useState([])
  const handleSubmit = async (term) => {
    const result = await searchImages(term)
    setImages(result)
  }
  return (
    <div>
      <div id="rectangle">
        <h1 class="responsive-text">PictPicks</h1>
      </div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
}
export default App;
