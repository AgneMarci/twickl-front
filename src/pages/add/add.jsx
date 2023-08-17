import React, { useState } from 'react';
import Newsletter from '../../components/newsletter/newsletter';
import Footer from '../../components/footer/footer';
import "./add.css";

export const Add = () => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [gender, setGender] = useState('');
  const [category, setCategory] = useState('');
  const [availableCategories, setAvailableCategories] = useState([]);
  const [size, setSize] = useState('');
  const [availableSizes, setAvailableSizes] = useState([]);

  const handleGenderChange = (e) => {
    const selectedGender = e.target.value;
    setGender(selectedGender);

    if (selectedGender === 'men') {
      setAvailableCategories(['Shoes', 'Bottoms', 'Tops', 'Suits', 'Other']);
      setAvailableSizes(['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL', 'Other']);
    } else {
      setAvailableCategories(['shoes', 'bottoms', 'tops', 'dresses', 'other']);
      setAvailableSizes(['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL', 'Other']);
    } 
  };

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);
  
    if (selectedCategory === 'shoes') {
      setAvailableSizes(Array.from({ length: 17 }, (_, i) => (i + 34).toString()));
    } else {
      setAvailableSizes(['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL', 'Other']);
    }
  };
  
  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const formData = new FormData();
  formData.append('file', file);
  formData.append('title', title);
  formData.append('description', description);
  formData.append('price', price);
  formData.append('gender', gender);
  formData.append('category', category);
  formData.append('size', size);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)
    
    try {
      const response = await fetch('your-api-endpoint', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Item uploaded successfully.');
      } else {
        console.error('Item upload failed.');
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
    }
  }

  return (
    <div className='main'>
    <div className='add'>
      <div className='box'>
        <h1>SELL YOUR PIECE</h1>
        <form className='addForm' onSubmit={handleSubmit}>
        <div className='pictureBox'>
          <h2>PICTURE</h2>
          <label htmlFor="fileInput" className="fileButton">
           UPLOAD
          </label>
          <input
            type="file"
            id="fileInput"
            className='fileUpload'
            onChange={handleChange}
          />
          {file && (
          <p className="fileDisplay">{file.name}</p>
          )}
        </div>
          <input
            className="inputField"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            className="inputDescription"
            placeholder="Describe your item"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            className="inputField"
            placeholder="Price €"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <select
            className="inputField"
            value={gender}
            onChange={handleGenderChange}
           >
              <option value="">Select gender</option>
              <option value="men">Men</option>
              <option value="women">Women</option>
            </select>
            <select
              className="inputField"
              value={category}
              onChange={handleCategoryChange}
            >
              <option value="">Select category</option>
              {availableCategories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
             </select>
            <select
              className="inputField"
              value={size}
              onChange={(e) => setSize(e.target.value)}
            >
              <option value="">Select size</option>
              {availableSizes.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
            <button type="submit">SUBMIT</button>
          </form>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};
