import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from'react-router-dom';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import AddEmployeeComponent from './components/AddEmployeeComponent';
import UpdateEmployee from './components/UpdateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';



function App() {
  return (
      <div>
        <Router>
            <HeaderComponent/>
              <div className="container">
                <Switch>
                  <Route path = "/" exact component = {ListEmployeeComponent}></Route>
                  <Route path = "/employees" component = {ListEmployeeComponent}></Route>
                  <Route path = "/addemployees" component = {AddEmployeeComponent}></Route>
                  <Route path = "/updateemployees/:id" component = {UpdateEmployeeComponent}></Route>
                </Switch>
              </div>
            <FooterComponent/>
        </Router>
      </div>
    
  );
}

export default App;
