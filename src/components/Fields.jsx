import React from 'react'
import "../style/fields.css"

import web from '../image/web.jpg';
import mobile from '../image/mobile.jpeg';
import datascience from '../image/data-science.jpg';
import game from '../image/game.png';
import artificial from '../image/artificial.png';


function Fields() {
  return (
    <div className='main'>
      <h1>Introduction to Software Fields</h1>
      <div className="paragraph">
        <p>
          The world of software is a rapidly growing and evolving field.
          With advancing technology, software development has branched into various specialized areas.
          Each of these areas requires different skills and interests. For those new to software development
          understanding these areas is crucial.
        </p>
        <p>
          Learning software development without an engineering or technical background is
          definitely achievable. While English proficiency isn't mandatory, it can greatly enhance your
          learning process, help you find solutions faster, and open up job opportunities internationally,
          not just in Turkey. If you have any specific questions or need guidance on your learning journey, feel free to ask!
        </p>
        <p>
          There are indeed numerous paths you can take in the field of software development. Before choosing a programming language,
          it's essential to identify the area you want to specialize in. Some of the most popular areas include web development,
          mobile development, game development, and data science. Once you set a clear goal, focusing on becoming proficient in that
          chosen area should be your priority. Trying to advance in multiple areas simultaneously can slow down your progress and dilute your focus on software development.
        </p>
      </div>
      <hr />

      <div className='soft-field'>
        <h2 className='title'>Web Design and Development</h2>
        <p>This is dividing like Front-end and Back-end :</p>
        <div className='field-container'>
          <div className='field-image'>
            <img src={web} alt="" />
          </div>
          <div className='field-part'>
            <h3 className='subtitle'>Front-end Development</h3>
            <p>
              Frontend web developers focus on the visual aspects of a website that users see and interact with.
              They design the layout of each page, integrate graphics, and ensure that the code they write produces
              visible outputs effectively. This area is ideal if you enjoy seeing immediate results of your coding efforts.
              At the end of the day, some prominent companies where frontend developers can work include Trendyol, Getir, Hepsiburada, n11, Akbank, and Martı.
            </p>
            <h3 className='subtitle'>Sofftware Language, Tools and library</h3>
            <p>JavaScript/TypeScript <br />
              React ,
              Vue ,
              Angular ,
              HTML, CSS
            </p>
            <br />
            <h3 className='subtitle'>Back-end Development</h3>
            <p>
              Backend developers primarily focus on the server-side of applications, dealing with data handling, processing information securely,
              and transmitting it to the frontend. If you're inclined towards working extensively with code, solving complex problems, and ensuring
              data integrity and security, backend development might be the right fit for you. This role involves handling the logic behind how
              applications work and ensuring they perform efficiently.
            </p>
            <h3 className='subtitle'>Sofftware Language, Tools and library</h3>
            <p>JavaScript/TypeScript(Nodejs) ,Python(Django, Flask) ,Php(Laravel, Symfony) ,MySQL</p>
          </div>
        </div>
      </div>
      <hr />

      <div className='soft-field'>
        <h2 className='title'>Mobile App Development</h2>
        <p>This is dividing like Android and IOS :</p>
        <div className='field-container'>
          <div className='field-image'>
            <img src={mobile} alt="" />
          </div>
          <div className='field-part'>
            <h3 className='subtitle'>Android - IOS Development</h3>
            <p>
              Mobile developers focus on developing applications for Android or iOS devices, which are crucial for rapidly growing sectors
              such as shopping, banking transactions, and the gaming industry. These developers can specialize in one platform or both,
              utilizing cross-platform frameworks that enable applications to work seamlessly across multiple operating systems like iOS and Android.
              This allows for broader reach and compatibility, ensuring that applications function effectively across different devices and platforms.
            </p>
            <h3 className='subtitle'>Sofftware Language, Tools and library</h3>
            <p>Swift ,Xcode ,Java ,Kotlin ,React Native ,Flutter</p>
          </div>
        </div>
      </div>
      <hr />

      <div className='soft-field'>
        <h2 className='title'>Game Development</h2>
        <div className='field-container'>
          <div className='field-image'>
            <img src={game} alt="" />
          </div>
          <div className='field-part'>
            <p>
              Game developers focus on both software development and design aspects of game creation. These developers should have a passion
              for games and a vivid imagination. Learning game engines is essential for game development, as these engines facilitate the
              creation of game physics, inputs, artificial intelligence, scripting of in-game events, and many other features. Game engines
              provide the foundational tools and frameworks necessary to bring game ideas to life, enabling developers to build interactive and immersive gaming experiences.
            </p>
            <h3 className='subtitle'>Sofftware Language, Tools and library</h3>
            <p>C++ ,C# , Unity, Unreal Engine</p>
          </div>
        </div>
      </div>
      <hr />

      <div className='soft-field'>
        <h2 className='title'>Data Science</h2>
        <div className='field-container'>
          <div className='field-image'>
            <img src={datascience} alt="" />
          </div>
          <div className='field-part'>
            <p>
              Data science encompasses various fields such as data analysis, data engineering, data mining, artificial intelligence, and machine learning. If you choose to pursue
              a career in data science, you'll work with different tools to describe data, make insights about the work done, and create predictive models. Python is the most commonly
              used programming language in this field. <br />
              If you choose to become a data analyst, you will analyze data collected from various sources, interpret it, and report your findings. On the other hand,
              if you opt for data engineering, your role will involve processing and organizing diverse and often dispersed data to make it understandable and usable.
            </p>
            <h3 className='subtitle'>Sofftware Language, Tools and library</h3>
            <p>Python ,R ,Java ,SQL ,MATLAB </p>
          </div>
        </div>
      </div>
      <hr />

      <div className='soft-field'>
        <h2 className='title'>Artificial Intelligent Development</h2>
        <div className='field-container'>
          <div className='field-image'>
            <img src={artificial} alt="" />
          </div>
          <div className='field-part'>
            <p>
              Coding is essential for artificial intelligence because it enables the creation, training, and application of algorithms that mimic human intelligence. This software allows
              AI systems to learn from data, make decisions, and perform complex tasks. Artificial intelligence plays a significant role in algorithm design, data processing, and machine learning.
              Each programming language, from Python's simplicity and versatility to Java's platform independence, R's statistical analysis power, and C++'s performance in complex AI algorithms,
              offers unique advantages in the field of artificial intelligence.
            </p>
            <h3 className='subtitle'>Sofftware Language, Tools and library</h3>
            <p>Python ,R ,Java ,C++ ,Scala  </p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Fields