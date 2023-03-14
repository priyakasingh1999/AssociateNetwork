
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import Header from './components/navbar/Header';
import { Admin } from './components/Admin/Admin';
import Station from './components/Station-admin/Station';
import MyStationDashboard from './components/Main-Dashboard/Station/MyStationDashboard';
import Profile from './components/AssociatesProfile/Profile';
import Login from './components/Authorization/Login';




function App() {
  return (
 <div>

    {/* <TextStyle/> */}
   <Header/>   
    <Router>
      <Routes>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/station" element={<Station/>}/>
        <Route path="/MyStationDashboard" element={<MyStationDashboard/>}/>
        <Route path="/Profile" element={<Profile/>}/>
        <Route path="/login" element={<Login/>}/>


        
      </Routes>
    </Router>
 </div>
  );
}

export default App;
