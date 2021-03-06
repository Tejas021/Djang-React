
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  // Redirect,
} from "react-router-dom";



import Login from './components/Login'
import StudentUI from './components/Student/StudentUI'
import TeacherUI from './components/Teacher/TeacherUI'




function App() {
  return (
    <div className="App">

<Router>

<Switch>

<Route exact path='/' component={Login}></Route>
<Route path='/login' component={Login}></Route>
<Route path='/student' component={StudentUI}></Route>
<Route path='/teacher' component={TeacherUI}></Route>

</Switch>


</Router>






     {/* <Navbar/>
     <Login/> 
      <StudentUI/>
     <TeacherUI/> */}
    </div>
  );
}

export default App;
