import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import "../style/practice.css"
import yanfoto from '../image/yan-foto.jpg';

const practiceSite = [
  { name: 'HackerRank', link: 'https://www.hackerrank.com', category: 'General Practice' },
  { name: 'LeetCode', link: 'https://leetcode.com', category: 'Algorithms and Data Structures' },
  { name: 'Codewars', link: 'https://www.codewars.com', category: 'General Practice' },
  { name: 'CodeChef', link: 'https://www.codechef.com', category: 'Coding Competitions' },
  { name: 'TopCoder', link: 'https://www.topcoder.com', category: 'Coding Competitions' },
  { name: 'Coderbyte', link: 'https://coderbyte.com', category: 'General Practice' },
  { name: 'Exercism', link: 'https://exercism.io', category: 'General Practice' },
  { name: 'Project Euler', link: 'https://projecteuler.net', category: 'Algorithms and Data Structures' },
  { name: 'Codeforces', link: 'https://codeforces.com', category: 'Coding Competitions' },
  { name: 'Spoj', link: 'https://www.spoj.com', category: 'Algorithms and Data Structures' },
  { name: 'GeeksforGeeks', link: 'https://www.geeksforgeeks.org', category: 'General Practice' },
  { name: 'InterviewBit', link: 'https://www.interviewbit.com', category: 'Interview Preparation' },
  { name: 'AtCoder', link: 'https://atcoder.jp', category: 'Coding Competitions' },
  { name: 'HackerEarth', link: 'https://www.hackerearth.com', category: 'Coding Competitions' },
  { name: 'Pramp', link: 'https://www.pramp.com', category: 'Interview Preparation' }
];

const categories = ['All', 'General Practice', 'Algorithms and Data Structures', 'Coding Competitions', 'Interview Preparation'];

function Practice() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredSites = selectedCategory === 'All'
    ? practiceSite
    : practiceSite.filter(site => site.category === selectedCategory);

  return (
    <div className='main'>
      <div className="head-practise">
        <div className="text-container">
          <h1>Practice</h1>
          <p>Practice is really important to develop your coding skills.<br />
            Don't forget to practice!
          </p>
        </div>
        <img src={yanfoto} />
      </div>

      <div className="category-container">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(category)}
            className={selectedCategory === category ? 'active' : ''}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="card-container">
        {filteredSites.map((site, index) => (
          <div className="card" key={index}>
            <h3>{site.name}</h3>
            <Link to={site.link}>Visit</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Practice;
