import React, { useState } from 'react';
import './App.css';

function App() {

  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };


  return (
    <div className="App">

      <header className="App-header">Header (100px)</header>

      <div className="App-body">

        <div className="overlay"></div>

        <div className="image-container">
          <img 
            src="https://res.cloudinary.com/enchanting/q_70,f_auto,c_fill,w_1600,h_650,g_face/travelopia-web/2021/08/USA-Arches-National-Park-UT-e1640034251676.png"
             alt="Background" className="responsive-image" />
          <div className="centered-content">
            <div className="image-title"> Title </div>
            <button className="open-modal-button" onClick={toggleModal}>
              Click here
            </button>
          </div>
        </div>

        {isModalOpen && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={toggleModal}>&times;</span>
              <p>Hello, World!</p>
            </div>
          </div>
        )}

      </div>

      <footer className="App-footer">Footer (100px)</footer>
  </div>
  );
}

export default App;
