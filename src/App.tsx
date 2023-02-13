import React from 'react';
import './App.css';
import Main from "./component/main/Main";
import Skills from "./component/skills/Skills";
import MyPortfolio from "./component/myWorks/MyPortfolio";
import Freelance from "./component/freelance/freelance";
import Contacts from "./component/contacts/Contacts";
import Footer from "./component/footer/Footer";
import NavigationList from "./component/nav/NavigationList";
import {skillsData} from "./assets/Data/SkillsData/SkillsData";
import {navigationListData} from "./assets/Data/NavigationData/NavigationData";
import {MyPortfolioData} from "./assets/Data/MyPortfolioData/MyPortfolioData";


function App() {
    return (
        <div className="App">
            <Main/>
            <NavigationList navigationListData={navigationListData}/>
            <Skills skillsData={skillsData}/>
            <MyPortfolio MyProfileData={MyPortfolioData}/>
            <Freelance/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

//t

export default App;
