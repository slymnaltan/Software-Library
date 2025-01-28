import React from 'react'
import { Link } from 'react-router-dom'
import "../style/home.css"
import {languages} from '../data/languages';

import jsImage from '../image/js.png';
import pythonImage from '../image/python.png';
import flutterImage from '../image/flutter.jpg';
import javaImage from '../image/java.png';
import yellowlogo from '../image/yellowlogo.jpeg';
import brownlogo from '../image/brownlogo.jpeg';
import purplelogo from '../image/purplelogo.jpeg';

const language = [
  {id:1, name: 'JavaScript', logo: jsImage },
  {id:2, name: 'Python', logo: pythonImage },
  {id:7, name: 'Java', logo: flutterImage },
  {id:9, name: 'C#', logo: javaImage },
];

const practiceSites = [
  { name: 'HackerRank', link: 'https://www.hackerrank.com' },
  { name: 'LeetCode', link: 'https://leetcode.com' },
  { name: 'Codewars', link: 'https://www.codewars.com' },
  { name: 'CodeChef', link: 'https://www.codechef.com' },

];

function Home() {
  return (
    <div className="main">
      <div className='first-part'>
      <img src={yellowlogo} alt="" />
        <div className='home-second'> 
          <h2 style={{color:'purple'}}>Welcome to our softare development learning platform. </h2>
          <p>Studying software development can open many doors in your career. Get inspired and start learning today!</p>
        </div>
      </div>

      <div className="second-part">
        <h2>Fields in Software Development</h2>
        <p className='fields'>
          For those who are new to software development or have just started but haven't yet decided on a specific area to focus on, <br /> here are some insights to help you make a decision. <br /> <br />

          Having no background in engineering or technical fields is definitely not a barrier to becoming a software developer. <br /> You need to be ambitious and persistent. <br /> <br />

          Let's take a look at the main fields in software development: <br /> <br />

          * Web Development <br />
          * Mobile Application Development <br />
          * Game Development <br />
          * Embedded Systems and Hardware <br />
          * Cloud Computing and Cloud Infrastructure <br />
          * Data Science and Big Data <br />
          * Artificial Intelligence and Machine Learning <br />
          * Cybersecurity <br />
        </p>
        <button className='navlink' onClick={() => window.location.href = '/fields'}>Fields Section</button>
      </div>

      <div className='third-part'>
        <h2>Popular Languages</h2>
        <div className="card-container">
          {language.map((lang, index) => (
            <div className="card" key={index}>
              <img src={lang.logo} />
              <Link to={`/languagedetail/${lang.id}`}>Detail</Link>
            </div>
          ))}
        </div>
        <button className='navlink' onClick={() => window.location.href = '/languages'}>Languages Section</button>
      </div>

      <div className='fourth-part'>
        <h2>Practice Sites</h2>
        <div className="card-container">
          {practiceSites.map((site, index) => (
            <div className="card" key={index}>
              <h3>{site.name}</h3>
              <Link to={site.link}>Visit</Link>
            </div>
          ))}
        </div>
        <button className='navlink' onClick={() => window.location.href = '/practice'}>Practice Section</button>
      </div>

    </div>
  )
}

export default Home