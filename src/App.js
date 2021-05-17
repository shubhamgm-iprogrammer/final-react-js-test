import "./App.css";
import BootstrapCard from "./Ui/Card/BootstrapCard";
import UtechForm from "./Components/Form/UtechForm";
import {Switch,Route,Redirect,BrowserRouter as Router} from "react-router-dom"
import React,{useState} from "react";
import EditUtechForm from "./Components/Form/EditUtechForm";

function App() {

  const [show,setShow] = useState(false)

  const handelSave = () => {
    setShow(true)
  }

  return (
    <div className="App">
      {/* <MyVerticallyCenteredModal show={show} onCloseHandler={closeHandler}/> */}
      <Router>
        <Switch>
        <Route path="/" exact>
         <Redirect to="/addStyle"/>
        </Route>
        <Route path="/addStyle" exact>
       <BootstrapCard style={{width:"70%",margin:"10% auto"}}>
         <UtechForm onSaveForm={handelSave}/>
        </BootstrapCard>
        </Route>
        <Route path="/editStyle/:id" exact>
        <BootstrapCard style={{width:"70%",margin:"10% auto"}}>
          <EditUtechForm/>
        </BootstrapCard>
        </Route>
        <Route path="*">
          <p className="text-danger  text-center text-uppercase display-3">Page Not Found</p>
        </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;

