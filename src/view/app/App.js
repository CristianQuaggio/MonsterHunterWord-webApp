import react from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom"; 
import MainTemplate from "../../component/MainTemplate/MainTemplate";
import Home from "../Home/Home";
import Info from "../Info/Info";
import MonsterList from "../MonsterList/MonsterList";
import MonsterDetails from "../MonsterDetails/MonsterDetails";
import Logo from "../../assets/images/logo_mh_nav.png"



function App() {

  const nav=[
    {url: "/", text: "Home", exact: true},
    {url: "/monsterlist", text: "Monster List", exact: false},
    {url: "/info", text: "Info", exact: true}
  ] 

  return (
  <BrowserRouter>
    <MainTemplate
    footerCourseName="Tecnologie e applicazione dei sistemi distribuiti"
    footerCourseLink="https://elearning.unimib.it/course/view.php?id=37789"
    navItems={nav}
    logo={Logo}
    >
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/info" element={<Info/>} />
        <Route path="/monsterlist" element={<MonsterList/>} />
        <Route path="/monsterlist/:number" element={<MonsterDetails/>} />
      </Routes>
    
    </MainTemplate>
  </BrowserRouter>
  );
}

export default App;
