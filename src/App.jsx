import { Routes, Route } from "react-router-dom";
import Splashscreen from "./Components/Splashscreen";
import Onboardingscreen1 from "./Components/Onboardingscreen1";
import Onboardingscreen2 from "./Components/Onboardingscreen2";
import Onboardingscreen3 from "./Components/Onboardingscreen3";
import Signup from "./Components/Signup";

function App() {
  return(
    <>
      <Routes>
          <Route path="/" element={<Splashscreen/>}/>
          <Route path="/onboarding1" element={<Onboardingscreen1/>}/>
          <Route path="/onboarding2" element={<Onboardingscreen2/>}/>
          <Route path="/onboarding3" element={<Onboardingscreen3/>}/>
          <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </>
  )
}

export default App