import React from 'react';
import { useNavigate } from 'react-router-dom';


function TopBar({ isDark, toggleDarkMode, navigateToHome = '/' }) {


  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path, {
      state: { isdark: isDark }
    });
  };


  // Inline styles for the AQI logo
  const logoContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    marginRight: '1rem',
  };

  const logoStyle = {
    fontSize: '3.5rem',
    fontWeight: 'bold',
    margin: 0,
    lineHeight: 1,
  };

  const logoBlueStyle = { color: '#63B3ED' };
  const logoGreenStyle = { color: '#68D391' };
  const logoYellowStyle = { color: '#F6E05E' };

  const taglineStyle = {
    color: '#1e79b3',
    fontSize: '1rem',
    margin: 0,
    lineHeight: 1.2,
  };

  return (
    <div className="nav-controls">
      {/* AQI Logo Block */}
      <div style={logoContainerStyle} onClick={() => handleNavigation('/')}>
        <div style={logoStyle}>
          <span style={logoBlueStyle}>A</span>
          <span style={logoGreenStyle}>Q</span>
          <span style={logoYellowStyle}>I</span>
        </div>
        <div style={{ marginLeft: '0.5rem' }}>
          <p style={taglineStyle}>
            <b>Air Quality Intelligence</b> <br /> Platform
          </p>
        </div>
      </div>

      <div className="nav-buttons">
        <button
          className="nav-button home-btn"
          onClick={() => { }}>
          <svg xmlns="http://www.w3.org/2000/svg" className="nav-icon" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
          Home
        </button>
        <button
          className="nav-button realtime-btn"
          onClick={() => handleNavigation('/')}>
          <svg xmlns="http://www.w3.org/2000/svg" className="nav-icon" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.5-11a.5.5 0 00-1 0v4a.5.5 0 00.146.354l2.5 2.5a.5.5 0 10.708-.708L10.5 10.293V7z" clipRule="evenodd" />
          </svg>
          Real-time Analysis
        </button>
        <button className="nav-button historical-btn" onClick={() => { }}>
          <svg xmlns="http://www.w3.org/2000/svg" className="nav-icon" viewBox="0 0 20 20" fill="currentColor">
            <path d="M3 3a1 1 0 011-1h1a1 1 0 011 1v13a1 1 0 11-2 0V4H4a1 1 0 01-1-1zm5 4a1 1 0 011-1h1a1 1 0 011 1v9a1 1 0 11-2 0V7H9a1 1 0 01-1-1zm5-3a1 1 0 011-1h1a1 1 0 011 1v12a1 1 0 11-2 0V4h-1a1 1 0 01-1-1z" />
          </svg>
          Historical Analysis
        </button>
        <button
          className="nav-button prediction-btn"
          onClick={() => { }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="nav-icon" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
            <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
          </svg>
          Prediction Model
        </button>
        <button
          className="nav-button chatbot-btn"
          onClick={() => handleNavigation('/aqi-chatbot')}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="nav-icon"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
              clipRule="evenodd"
            />
          </svg>
          AQI Chatbot
        </button>
      </div>
      <div>
        <button onClick={toggleDarkMode} className="dark-mode-button">
          {isDark ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="mode-icon" viewBox="0 0 20 20" fill="currentColor">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="mode-icon" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
            </svg>
          )}
          {isDark ? 'Dark Mode' : 'Light Mode'}
        </button>
      </div>

      {/* CSS for the navigation controls */}
      <style jsx>{`
        .nav-controls {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
          flex-wrap: wrap;
          gap: 1rem;
          padding: 0.75rem;
          border-radius: 0.5rem;
          background-color: #f7fafc;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        }
        
        .dark-mode .nav-controls {
          background-color: #2d3748;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }
        
        .nav-buttons {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
        }
        
        .nav-button {
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #3182ce;
          color: white;
          border: none;
          border-radius: 0.5rem;
          padding: 0.625rem 1rem;
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          letter-spacing: 0.025em;
        }
        
        .nav-icon, .mode-icon {
          width: 1rem;
          height: 1rem;
          margin-right: 0.375rem;
        }
        
        .nav-button:hover {
          background-color: #2c5282;
          transform: translateY(-2px);
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
        }
        
        .nav-button:active {
          transform: translateY(0);
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
        }
        
        /* Button-specific colors */
        .home-btn {
          background-color: #4299e1;
          background-image: linear-gradient(135deg, #4299e1, #3182ce);
        }
        
        .realtime-btn {
          background-color: #38b2ac;
          background-image: linear-gradient(135deg, #38b2ac, #319795);
        }
        
        .historical-btn {
          background-color: #805ad5;
          background-image: linear-gradient(135deg, #805ad5, #6b46c1);
        }
        
        .prediction-btn {
          background-color: #ed8936;
          background-image: linear-gradient(135deg, #ed8936, #dd6b20);
        }
        
        .chatbot-btn {
          background-color: #48bb78;
          background-image: linear-gradient(135deg, #48bb78, #38a169);
        }
        
        .home-btn:hover {
          background-image: linear-gradient(135deg, #3182ce, #2c5282);
        }
        
        .realtime-btn:hover {
          background-image: linear-gradient(135deg, #319795, #2c7a7b);
        }
        
        .historical-btn:hover {
          background-image: linear-gradient(135deg, #6b46c1, #553c9a);
        }
        
        .prediction-btn:hover {
          background-image: linear-gradient(135deg, #dd6b20, #c05621);
        }
        
        .chatbot-btn:hover {
          background-image: linear-gradient(135deg, #38a169, #2f855a);
        }
        
        .dark-mode-button {
          display: flex;
          align-items: center;
          background-color: #4a5568;
          color: white;
          border: none;
          border-radius: 0.5rem;
          padding: 0.625rem 1rem;
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        
        .dark-mode-button:hover {
          background-color: #2d3748;
          transform: translateY(-2px);
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
        }
        
        .dark-mode-button:active {
          transform: translateY(0);
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
        }
        
        /* Dark mode styles */
        .dark-mode .nav-button {
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }
        
        .dark-mode .home-btn {
          background-image: linear-gradient(135deg, #2b6cb0, #2c5282);
        }
        
        .dark-mode .realtime-btn {
          background-image: linear-gradient(135deg, #2c7a7b, #285e61);
        }
        
        .dark-mode .historical-btn {
          background-image: linear-gradient(135deg, #553c9a, #44337a);
        }
        
        .dark-mode .prediction-btn {
          background-image: linear-gradient(135deg, #c05621, #9c4221);
        }
        
        .dark-mode .chatbot-btn {
          background-image: linear-gradient(135deg, #2f855a, #276749);
        }
        
        .dark-mode .home-btn:hover {
          background-image: linear-gradient(135deg, #2c5282, #1a365d);
        }
        
        .dark-mode .realtime-btn:hover {
          background-image: linear-gradient(135deg, #285e61, #234e52);
        }
        
        .dark-mode .historical-btn:hover {
          background-image: linear-gradient(135deg, #44337a, #322659);
        }
        
        .dark-mode .prediction-btn:hover {
          background-image: linear-gradient(135deg, #9c4221, #7b341e);
        }
        
        .dark-mode .chatbot-btn:hover {
          background-image: linear-gradient(135deg, #276749, #1e4e3b);
        }
        
        .dark-mode .dark-mode-button {
          background-color: #1a202c;
          color: #fff;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }
        
        .dark-mode .dark-mode-button:hover {
          background-color: #171923;
        }
        
        @media (max-width: 768px) {
          .nav-controls {
            flex-direction: column;
            align-items: stretch;
          }
          
          .nav-buttons {
            justify-content: center;
          }
          
          .dark-mode-button {
            margin-top: 0.5rem;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
}

export default TopBar;
