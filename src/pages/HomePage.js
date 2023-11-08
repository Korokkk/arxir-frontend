import {
  React,
  useState,
} from 'react';

import SidebarRight from '../components/SidebarRight';
import '../styles/home.css';
import Logo from '../assets/logo.jpg';
import SendGray from '../assets/send-gray.jpg';
import SendBlack from '../assets/send-black.jpg';

const HomePage = () => {
  const [inputIsEmpty, setInputIsEmpty] = useState(true);
  const [inputMessage, setInputMessage] = useState('');

  const [sidebarRightIsOpen, setSidebarRightIsOpen] = useState(false);

  const handleSidebarRightButton = () => {
    setSidebarRightIsOpen(!sidebarRightIsOpen);
  }

  const handleInputChange = (str) => {
    setInputMessage(str);
    setInputIsEmpty(str === '');
  }

  const handleInputKeyPress = (event) => {
    if (event.key === 'Enter' && !inputIsEmpty) {
      sendButtonClick();
      setSidebarRightIsOpen(true);
    }
  }

  const sendButtonClick = () => {
    alert('got it!')
  }

  return (
    <div className='page'>
      <div className='container'>
        <div className='navbar-home'>
          <button className='button-navbar-home'>Accessibility</button>
          <button className='button-navbar-home'>Help / About Us</button>
          <button className='button-navbar-home' style={{ fontWeight: 'bold' }}>Login / Register</button>
        </div>

        <div className='content-home'>
          <p>Home</p>
          <img src={Logo} alt='logo' style={{ width: '50%', height: '50%' }}/>
        </div>

        <div className='footer'>
          <div className='input-container'>
            <input
              type='text'
              className='chat-input'
              placeholder='Send a message'
              onChange={(event) => handleInputChange(event.target.value)}
              onKeyPress={(event) => handleInputKeyPress(event)}
            />
            <button className='send-button' style={{
              backgroundImage: `url(${inputIsEmpty ? SendGray : SendBlack})`,
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
              }} 
              onClick={sendButtonClick}
              disabled={inputIsEmpty}
            >
            </button>
          </div>
          <div>I don't know anything.</div>
        </div>
      </div>
      {sidebarRightIsOpen && <SidebarRight />}
    </div>
  )
}

export default HomePage;