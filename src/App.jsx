import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './styles.css'
import './game-styles.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Sleeper Build</title>
  <link
    href="https://fonts.googleapis.com/css2?family=Rozha+One&display=swap"
    rel="stylesheet"
  />
  <link rel="stylesheet" href="css/styles.css" />
  {/* Added id="top" here */}
  {/* Background music audio element */}
  <audio id="background-music" loop="">
    <source src="assets/music/act ii_ date @ 8.mp3" type="audio/mp3" />
    Your browser does not support the audio element.
  </audio>
  {/* Header */}
  <header>
    <h1>Sleeper Build</h1>
    <div className="buttons">
      <button className="button" id="sound">
        🔊
      </button>
      {/* Tooltip for the sound button */}
      <div className="tooltip">Click to play music</div>
      <button className="button" id="language">
        🌐
      </button>
      <button className="button" id="more">
        ⋯
      </button>
    </div>
  </header>
  {/* Dropdown Menu */}
  <div id="dropdown-menu" className="dropdown-menu">
    <ul>
      <li>
        <a href="#">Settings</a>
      </li>
      <li>
        <a href="#">Feature 1</a>
      </li>
      <li>
        <a href="index.html">this is Home page</a>
      </li>
      <li>
        <a href="#" id="adjust-volume">
          Adjust Volume
        </a>{" "}
        {/* Correct placement for the "Adjust Volume" link */}
        <div id="volume-slider-container" className="volume-slider-container">
          <input
            type="range"
            id="volume-slider"
            min={0}
            max={1}
            step="0.01"
            defaultValue={1}
            className="volume-slider"
          />
        </div>
      </li>
    </ul>
  </div>
  {/* Clouds Section */}
  <div id="clouds" className="clouds" />
  <div className="clouds left">
    <img src="photo/cloudleft.png" alt="Cloud Left" />
  </div>
  <div className="clouds right">
    <img src="photo/cloudright.png" alt="Cloud Right" />
  </div>
  {/* New Clouds Section */}
  <div className="clouds new-left">
    <img src="photo/cloudleft.png" alt="New Cloud Left" />
  </div>
  <div className="clouds new-right">
    <img src="photo/cloudright.png" alt="New Cloud Right" />
  </div>
  {/* Main Content Container */}
  <main className="content-container">
    {/* Big Picture Section */}
    <section className="big-picture">
      <img
        id="main-image"
        src="photo/main_r.png"
        alt="Main Image"
        style={{ opacity: 1 }}
      />
      <p className="what-do-you-know">What do you want to know?</p>
      <input
        type="search"
        className="search-bar"
        placeholder="Blender, Arts, Animation..."
      />
    </section>
    {/* Skill Images Section */}
    <section className="skills">
      <div className="skill">
        <a href="blender.html">
          <img
            className="blender-img"
            src="photo/nblender.PNG"
            alt="Blender"
            style={{ opacity: 1 }}
          />
        </a>
      </div>
      <div className="skill">
        <a href="https://zhuangzongji.github.io/web-main/index.html">
          <img
            className="music-img"
            src="photo/nmusic1.png"
            alt="Music"
            style={{ opacity: 1 }}
          />
        </a>
      </div>
    </section>
    {/* Third Big Image Section */}
    <section className="third-big-picture">
      <a href="digital-art.html">
        <img
          className="art-img"
          src="photo/nart.PNG"
          alt="Digital Art"
          style={{ opacity: 1 }}
        />
      </a>
    </section>
    {/* Home Icon Section */}
    <section className="home-section">
      <a href="#top" className="home-icon-container">
        <img src="photo/up1.png" alt="Home" className="home-icon-img" />
        <p className="home-text">Home</p>
      </a>
    </section>
  </main>
  {/* Footer */}
  <footer>
    {/* In your base layout (e.g., footer or main template) */}
    <div className="footer-class">
      <a href="nnn.html" className="sleeper-build-link">
        Sleeper Build
      </a>{" "}
      {/* Link to nnn.html */}
    </div>
    <div className="footer-class">
      <h2>Sleeper Build</h2>
      <ul>
        <li>
          <a href="#top">Home</a>
        </li>
        <li>
          <a href="https://www.instagram.com/antony___the/">About</a>
        </li>
        <li>
          <a href="https://shopee.tw/shop/886111937">Buy stuff</a>
        </li>
        <li>
          <a href="gameweb/dist/index.html">Play Game</a>
        </li>
      </ul>
    </div>
    <div className="footer-class">
      <h2>Contact</h2>
      <ul>
        <li>
          <a href="https://theuselessweb.com/">Email</a>
        </li>
        <li>
          <a href="https://theuselessweb.com/">LinkedIn</a>
        </li>
        <li>
          <a href="https://www.instagram.com/antony___the/">Instagram</a>
        </li>
        <li>
          <a href="https://theuselessweb.com/">Twitter</a>
        </li>
      </ul>
    </div>
    <div className="footer-class right-align">
      {/* Patreon Link with Icon */}
      <a href="https://www.patreon.com/c/Antonyiguess">
        Join our Patreon{" "}
        <img
          src="photo/patreon.png"
          alt="Patreon Icon"
          className="footer-icon"
        />
      </a>
      <br />
      {/* Discord Link with Icon */}
      <a href="https://discord.gg/AU7UNYvE">
        Join our Discord{" "}
        <img
          src="photo/discord.png"
          alt="Discord Icon"
          className="footer-icon"
        />
      </a>
    </div>
  </footer>
  {/* Fixed Scroll to Top Button */}
  <a href="#top" id="scroll-to-top">
    <img src="photo/arrowup1.png" alt="Scroll to Top" />
  </a>
</>

    </>
  )
}

export default App
