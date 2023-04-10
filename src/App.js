import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ImageList from './components/ImageList';
import { AddImage } from './components/AddImage';
import { EditImage } from './components/EditImage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ImageList />} />
        <Route path="add" element={<AddImage />} />
        <Route path="edit/:id" element={<EditImage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
