import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import LocationDiscussion from './components/locationDiscussion/locationDiscussion';
import SideBar from './components/sidebar';
import LocationPage from './components/LocationPage';
import { AllDiscussion } from './components/locationDiscussion/AllDiscussions';
import Login from './components/login';
import Register from './components/register';
import AddLocation from './components/form/AddLocation';
import AddDiscussion from './components/form/AddDiscussion';

function App() {
  return (<div className=' md:px-20'>
    <Navbar />
    <div className="flex md:flex-row flex-col-reverse">
      <div className="sticky top-20">
        <SideBar />

      </div>
      <Router>

        <Route path="/add" component={AddLocation} />
        <Route path="/AddDiscussion" component={AddDiscussion} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/locations" exact component={LocationPage} />
        <Route path="/" exact component={Homepage} />
        <Route path="/discussions" exact component={AllDiscussion} />
        <Route path="/discussions/:id" exact component={LocationDiscussion} />
      
      </Router>

    </div>
  </div>
  );
}

export default App;
