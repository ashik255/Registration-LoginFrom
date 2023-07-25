import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";
import AdminRegistrationForm from "./pages/AdminRegistrationForm/AdminRegistrationForm";
import TrainerRegistrationForm from "./pages/Trainer/TrainerRegistrationForm";
import TraineeRegistrationForm from "./pages/Trainee/TraineeRegistrationForm";
import LoginForm from "./pages/Login/LoginForm";
import { Route, Routes } from "react-router-dom";
import Header from "./compoments/Header";
import CreateBatch from "./pages/Batch/CreateBatch";
function App() {
  return (
    <>
    <Header></Header>
    <Routes>
      
      <Route path="/login" element={<LoginForm/>}></Route>
      
<Route path="/admin" element={<AdminRegistrationForm/>}></Route>  
<Route path="/trainer" element={<TrainerRegistrationForm/>}></Route>
<Route path="/trainee" element={<TraineeRegistrationForm/>}></Route>
<Route path="/createbatch" element={<CreateBatch/>}></Route>
    </Routes>
      {/* <div className="App"></div> */}
      {/* <AdminRegistrationForm></AdminRegistrationForm>
      <TrainerRegistrationForm/>
      <TraineeRegistrationForm/>
      <LoginForm></LoginForm> */}
    </>
  );
}

export default App;
