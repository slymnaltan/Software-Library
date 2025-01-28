import React, { useState } from 'react'
import "../style/language.css"
import { Link } from 'react-router-dom';
import {languages} from '../data/languages';

import jsImage from '../image/js.png';
import pythonImage from '../image/python.png';
import htmlImage from '../image/html.png';
import reactImage from '../image/react.png';
import swiftImage from '../image/swift.png';
import kotlinImage from '../image/kotlin.png';
import flutterImage from '../image/flutter.jpg';
import csharpImage from '../image/csharp.png';
import javaImage from '../image/java.png';
import cppImage from '../image/cpp.jpg';
import phpImage from '../image/php.png';
import yanfoto from '../image/yan foto.jpg';
// Dil bilgilerini içeren nesne listesi

const categories = ['General', 'Web', 'Mobile', 'Data Science'];

function Languages() {
  const [selectedCategory, setSelectedCategory] = useState('General');

  const filteredLanguages = selectedCategory === 'General'
    ? languages
    : languages.filter(lang => lang.category === selectedCategory);

  return (
    <div className='main'>
      <div className='head-language'>
        <div>
          <h1>Software Language</h1>
          <p> Here is you can find to many software language information and course</p>
        </div>
        <img src={yanfoto} />
      </div>
      <div className="main-language">
        <div className="menu-container">
          <div className="menu">
            <ul>
              {categories.map((category) => (
                <li key={category} onClick={() => setSelectedCategory(category)}>
                  {category}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="cards-container">
          {filteredLanguages.map(language => (
            <div className="card" key={language.id}>
              <img src={language.image} alt={language.name} />
              <h3>{language.name}</h3>
              <Link to={`/languagedetail/${language.id}`}>Detail</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Languages