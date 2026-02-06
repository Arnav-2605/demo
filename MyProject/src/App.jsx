import { useState } from "react";
import "./App.css";
import Header_re from './components/Header_re.jsx'
import Footer from "./components/Footer.jsx";
import Registration from "./components/Registration.jsx";

function App() {
  const [count, setCount] = useState(0);

  const y = [2024, 2025, 2026]
  const c = {name: "KIET", location: "Ghaziabad", estyear : "2000"}
  
  return (
    <div>
      <Header_re title = "My First React App"/>
      <Header_re title = "Let's complete React"/>
      <h1>Hello KIETians</h1>
      <Registration/>
      <h2>Thanks for joining</h2>
      <Footer company = {c} year = {y}/>
      
    </div>
  )
}

export default App;
