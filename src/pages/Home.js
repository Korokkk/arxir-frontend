import {
  React,
  useState,
} from 'react';

import SidebarLeft from '../components/sidebar-left';
import '../styles/home.css';
import Logo from '../assets/logo.jpg';
import SendGray from '../assets/send-gray.jpg';
import SendBlack from '../assets/send-black.jpg';


const Home = () => {
  const [inputIsEmpty, setInputIsEmpty] = useState(true);
  const [inputMessage, setInputMessage] = useState('');

  const [sidebarLeftIsOpen, setSidebarLeftIsOpen] = useState(false);

  const handleSidebarLeftButton = () => {
    setSidebarLeftIsOpen(!sidebarLeftIsOpen);
  }

  const handleInputChange = (str) => {
    setInputMessage(str);
    setInputIsEmpty(str === '');
  }

  const handleInputKeyPress = (event) => {
    if (event.key === 'Enter' && !inputIsEmpty) {
      sendButtonClick();
    }
  }

  const sendButtonClick = () => {
    if (!inputIsEmpty) {
      alert(inputMessage);
    }
  }
  return (
    <>
      {sidebarLeftIsOpen && <SidebarLeft />}
      <div className='container'>
        <div className='header'>
          <button className='sidebar-left-button' 
            onClick={handleSidebarLeftButton}
          >
          </button>
          <div className='header-left'>
            <button className='button-header'>Accessibility</button>
            <button className='button-header'>Help / About Us</button>
            <button className='button-header' style={{ fontWeight: 'bold' }}>Login / Register</button>
          </div>
        </div>

        <div className='content'>
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
    </>
  )
}

export default Home;