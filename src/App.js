
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import Header from './components/navbar/Header';
import { Admin } from './components/Admin/Admin';
import Station from './components/Station-admin/Station';
import MyStationDashboard from './components/Main-Dashboard/Station/MyStationDashboard';
import AddAssociates from './components/Main-Dashboard/Station/MyStation/FormPages/AddAssociates';
// import TextStyle from './components/Main-Dashboard/Station/MyStation/FormPages/TextStyle'
import AddEditStation from './components/Main-Dashboard/Station/RecentSessions/AddEditStations'
import { Container,Row , Col } from 'react-bootstrap';

function App() {
  return (
 <div>


    {/* <TextStyle/> */}
   <Header/>


   
    <Router>git 
      <Routes>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/station" element={<Station/>}/>
        <Route path="/MyStationDashboard" element={<MyStationDashboard/>}/>

        
      </Routes>
    </Router>
    <Container className='mt-4'>
    <Row>
      <Col md={8}>
      <AddEditStation/>

      </Col>
    </Row>
   </Container>
 </div>
  );
}

export default App;
