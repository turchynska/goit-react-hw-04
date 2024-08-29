import './App.css'
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import {SearchBar} from './components/SearchBar/SearchBar';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import ImageGallery from './components/ImageGallery/ImageGallery';
import { useEffect, useState } from 'react';
import { getData } from './dataPhotos/getData';
import  Loader  from './components/Loader/Loader';
import ImageModal from './components/ImageModal/ImageModal';


function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [selectImage, setSelectImage] = useState(null);

  const fetchImages = async (searchQuery, pageNumber = 1) => {
    try{
      setLoading(true);
      setError("");
      const response = await getData(searchQuery, pageNumber);
      console.log(response);
   
    if(pageNumber === 1){
      setImages(response.data.results);
    }else{
setImages(prevImages => [...prevImages, ...response.data.results])
    }
    if(response.data.total_pages > pageNumber){
      setPage(pageNumber +1);
    } else{
      setPage(null)
    }
  }catch(error){
setError ("Something went wrong, please try again later");
console.log(error)
  }finally{
    setLoading(false)
  }
  };
useEffect(() => {
  if(query){
    setPage(1);
    fetchImages(query, 1)
  }
}, [query]);

  const handleSearch = (newQuery) => {
setQuery(newQuery);
  };

  const onLoadMore = () => {
    if( page) {
      fetchImages(query, page)
    }
  };
  const onOpen = (image) => {
    setSelectImage(image)
  }
  const onClose = () => {
    setSelectImage(null);
  };
  return(
    <>
    <div className="container">
      <SearchBar  onSubmit={handleSearch}/>
      {error && <ErrorMessage error={error}/>}
      { loading && <Loader/> }
      {images.length > 0 && <ImageGallery images={images} onOpen={onOpen}/>}
      {images.length > 0 && page && !loading && <LoadMoreBtn onLoadMore={onLoadMore}/>}
    </div>
    <ImageModal
    isOpen={!!selectImage}
    image={selectImage}
    onClose={onClose} />
    </>
  )

}

export default App
