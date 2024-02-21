import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Contact from './components/Contact.jsx'
import Accueil from './components/Accueil.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/acceuil' element={<Accueil />} />
        <Route path='/contact' element={<Contact />} />
        
      </Routes>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
