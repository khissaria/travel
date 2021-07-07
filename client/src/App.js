import Navbar from './components/Navbar'
import Form from './components/form/Form'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import DiscussionPage from './components/Discussion/discussionPage';
import ReadMore from './components/readmore';
import Footer from './components/footer'


function App() {
  return (<>
    <Navbar />

    <Router>

      <Route path="/add" component={Form} />
      <Route path="/" exact component={Homepage} />
      <Route path="/discuss/:id" exact component={DiscussionPage} />
      <Route path="/readmore/:id" exact component={ReadMore} />
    </Router>
    <Footer/>
  </>
  );
}

export default App;
