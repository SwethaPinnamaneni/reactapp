import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Routing/Home";
import UserLogin from "./Routing/UserLogin";
import UserSignUp from "./Routing/UserSignUp";
import Menu from "./Routing/Menu";
import ServiceIntegrationForGet from "./ServiceIntergration/ServiceIntegrationForGet";
import ClassComponents from "./Presentations/ClassComponents";
import ClassComponent from "./ContextAPI/ClassComponent";
import Provider from "./ContextAPI/Provider";
import { Fragments } from "./Fragments";
import { UseStates } from "./Presentations/UseStates";
import { EventDemo } from "./Presentations/EventDemo";
import { UseEffect } from "./Presentations/UseEffect";
import { ConditionalRendering } from "./Presentations/ConditionalRendering";
import { Recharge } from "./Components/Recharge";
import { Reducers } from "./Presentations/Reducers";
import { StopWatch } from "./Presentations/StopWatch";
import { UseMem } from "./Presentations/UseMem";
import { Counters } from "./Presentations/Counters";
import { Counters1 } from "./Presentations/Counters1";
import { Counters2 } from "./Presentations/Counters2";
import { Styles } from "./Components/Styles";
import { Forms } from "./Presentations/Forms";
import { So } from "./Presentations/So";
// import { Bootstraps } from "./Presentations/bootstraps";

export function App() {
  return (
    <div className="App">
      {/* <ServiceIntegrationForGet/> */}
      {/* <ClassComponents name="Swetha" age={23} />
      <UseStates/> */}
      {/* <EventDemo/> */}
      {/* <UseEffect/> */}
      {/* <ConditionalRendering/> */}
      {/* <Recharge/> */}
      {/* <Reducers/> */}
      {/* <StopWatch/> */}
      {/* <UseMem/> */}
      {/* <Counters />
      <Counters1 />
      <Counters2 /> */}

      {/* <Routes>
        <Route path="/" element={<Menu />}></Route>
        <Route path="./Routing/Home" element={<Home />}></Route>
        <Route path="./Routing/UserLogin" element={<UserLogin />}></Route>
        <Route path="./Routing/UserSignUp" element={<UserSignUp />}></Route>
      </Routes> */}
      {/* <Styles/> */}
      {/* <Fragments /> */}
      {/* <Forms/> */}
      <So/>
    </div>
  );
}
