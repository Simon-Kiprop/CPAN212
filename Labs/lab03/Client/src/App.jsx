import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [randomImages, setRandomImages] = useState([]);
  const [dogImage, setDogImage] = useState(null);
  const [uploadMessage, setUploadMessage] = useState('');

  useEffect(() => {
    fetch('/api/random-images')
      .then((res) => res.json())
      .then((data) => setRandomImages(data))
      .catch((error) => console.error('Error fetching random images:', error));
  }, []);

  const fetchDogImage = async () => {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();
      setDogImage(data.message);
      setUploadMessage('');
    } catch (error) {
      console.error('Error fetching dog image:', error);
    }
  };

  const uploadDogImage = async () => {
    if (!dogImage) return;

    try {
      const formData = new FormData();
      const response = await fetch(dogImage);
      const blob = await response.blob();
      formData.append('dogImage', blob, 'dog.jpg');

      const uploadResponse = await fetch('/api/upload-dog', {
        method: 'POST',
        body: formData,
      });

      if (uploadResponse.ok) {
        setUploadMessage('Dog image uploaded successfully!');
      } else {
        setUploadMessage('Upload failed.');
      }
    } catch (error) {
      console.error('Error uploading dog image:', error);
      setUploadMessage('Upload failed.');
    }
  };

  return (
    <div className="app-container">
  <h1>Random Images</h1>
  <div className="image-grid">
    {randomImages.map((imageUrl, index) => (
      <img key={index} src={imageUrl} alt={`Random ${index}`} className="random-image" />
    ))}
  </div>
  <button onClick={fetchDogImage} className="button">Get Random Dog</button>
  {dogImage && (
    <div className="dog-container">
      <img src={dogImage} alt="Random Dog" className="dog-image" />
      <button onClick={uploadDogImage} className="button">Upload Dog</button>
      {uploadMessage && <p>{uploadMessage}</p>}
    </div>
  )}
</div>

  );
}

export default App;