import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AppScorekeeper from '../Scorekeeper/AppScorekeeper.jsx'

import NewPractice from './NewPractice.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppScorekeeper/>
    <App />
    <NewPractice/>
  </React.StrictMode>,
)
