import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Newsletter from '../../components/newsletter/newsletter';
import Footer from '../../components/footer/footer';
import axios from 'axios';
import "./add.css";

export const Add = () => {
  const { t } = useTranslation();
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
      setAvailableCategories([
        t('categories.men.Shoes'),
        t('categories.men.Bottoms'),
        t('categories.men.Tops'),
        t('categories.men.Suits'),
        t('categories.men.Other')
      ]);
      setAvailableSizes(['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL', 'Other']);
    } else {
      setAvailableCategories([
        t('categories.women.shoes'),
        t('categories.women.bottoms'),
        t('categories.women.tops'),
        t('categories.women.dresses'),
        t('categories.women.other')
      ]);
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
    try {
      const response = await axios.post('http://localhost:8080/add', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        console.log('Item uploaded successfully.');
      } else {
        console.error('Item upload failed.');
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
    }
  };

  return (
    <div className='main'>
    <div className='add'>
      <div className='box'>
        <h1>{t('add.sellYourPiece')}</h1>
        <form className='addForm' onSubmit={handleSubmit}>
        <div className='pictureBox'>
          <h2>{t('add.picture')}</h2>
          <label htmlFor="fileInput" className="fileButton">
           {t('add.upload')}
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
            placeholder={t('add.titlePlaceholder')}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            className="inputDescription"
            placeholder={t('add.descriptionPlaceholder')}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            className="inputField"
            placeholder={t('add.pricePlaceholder')}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <select
            className="inputField"
            value={gender}
            onChange={handleGenderChange}
           >
              <option value="">{t('add.selectGender')}</option>
              <option value="men">{t('add.men')}</option>
              <option value="women">{t('add.women')}</option>
            </select>
            <select
              className="inputField"
              value={category}
              onChange={handleCategoryChange}
            >
              <option value="">{t('add.selectCategory')}</option>
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
              <option value="">{t('add.selectSize')}</option>
              {availableSizes.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
            <button type="submit">{t('add.submit')}</button>
          </form>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};