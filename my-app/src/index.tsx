import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Login';
import "../node_modules/@partnerhero/phds.utilities.typography/dist/fonts/Inter-Web/inter.css";
import Todo from './Todo';
import Statistics from './Statistics';
import InviteFriends from './Invite';
import Invite from './Invite';



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        
          <Route index element={<Login />} />
          <Route path= "Todo" element={<Todo />} />
          <Route path= "Statistics" element={<Statistics />} />
          <Route path= "Invite" element={<Invite />} />

          
        
      </Routes>
    </BrowserRouter>
  );
}


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
     <App />
  </React.StrictMode>
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

