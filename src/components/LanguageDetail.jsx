import React, { useState } from 'react';
import '../style/languagedetail.css';
import { useParams } from 'react-router-dom';
import { languages } from '../data/languages';

const LanguageDetail = () => {
  const { id } = useParams();
  const language = languages.find(lang => lang.id === parseInt(id));

  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredCourses = language.courses.filter(course => {
    if (selectedCategory === 'all') return true;
    return course.type === selectedCategory;
  });


  return (
    <div className='main'> 
      <h1>{language.name} </h1>
      <h3>{language.description} </h3>
      <div className='course-menu'>
        <button onClick={() => handleCategoryChange('all')}>All</button>
        <button onClick={() => handleCategoryChange('paid')}>Paid</button>
        <button onClick={() => handleCategoryChange('free')}>Free</button>
      </div>
      <div className='course-card'>
        {filteredCourses.map(course => (
          <div key={course.id}>
            <a href={course.url} target="_blank" rel="noopener noreferrer">
              {course.name}
            </a>
          </div>
        ))}
      </div>

    </div>
  );
};

export default LanguageDetail;
