import Home from "./components/pages/home/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Platform from "./components/pages/platform/Platform";
import AboutUs from "./components/pages/aboutUs/AboutUs";
import Registration from "./components/pages/registration/Registration";
import RegisterNewCustomer from "./components/pages/registration/RegisterNewCustomer";
import SelectTraining from "./components/SelectTraining";
import SalesTraining from "./components/SalesTraining";
import CommunicationsTraining from "./components/CommunicationsTraining";
import LeadershipTraining from "./components/LeadershipTraining";
import RegistrationStu from "./components/RegistrationStu";
import OverView from "./components/OverView";
import TrainingsansichtStudent from "./components/TrainingsansichtStudent";
import AnsichtStudent from "./components/AnsichtStudent";

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/platform">
          <Platform></Platform>
        </Route>
        <Route exact path="/about-us">
          <AboutUs></AboutUs>
        </Route>
        <Route exact path="/registration">
          <Registration></Registration>
        </Route>
        <Route exact path="/new-registration">
          <RegisterNewCustomer></RegisterNewCustomer>
        </Route>
        {/* <Route exact path="/home">
          <Home></Home>
        </Route> */}
        <Route exact path="/select-training">
          <SelectTraining></SelectTraining>
        </Route>
        <Route exact path="/sales-training">
          <SalesTraining></SalesTraining>
        </Route>
        <Route exact path="/communications-training">
          <CommunicationsTraining></CommunicationsTraining>
        </Route>
        <Route exact path="/leadership-training">
          <LeadershipTraining></LeadershipTraining>
        </Route>
        <Route exact path="/registration-stu">
          <RegistrationStu></RegistrationStu>
        </Route>
        <Route exact path="/overView">
          <OverView></OverView>
        </Route>
        <Route exact path="/trainingsansicht-student">
          <TrainingsansichtStudent></TrainingsansichtStudent>
        </Route>
        <Route exact path="/ansicht-student">
          <AnsichtStudent></AnsichtStudent>
        </Route>
      </Router>
    </div>
  );
}

export default App;
