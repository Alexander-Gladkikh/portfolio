import React from 'react';
import './App.css';
import Main from "./component/main/Main";
import Skills from "./component/skills/Skills";
import MyProjects from "./component/myWorks/MyProjects";
import Contacts from "./component/contacts/Contacts";
import Footer from "./component/footer/Footer";
import NavigationList from "./component/nav/NavigationList";
import {skillsData} from "./assets/Data/SkillsData/SkillsData";
import {navigationListData} from "./assets/Data/NavigationData/NavigationData";
import {myPortfolioData} from "./assets/Data/MyPortfolioData/MyPortfolioData";
import {contactsData} from "./assets/Data/ContactsData/ContactsData";
import Settings from "./component/settings/Settings";


function App() {
    return (
        <div className="App">
            <Main/>
            <NavigationList navigationListData={navigationListData}/>
            <Skills skillsData={skillsData}/>
            <MyProjects MyProfileData={myPortfolioData}/>
            <Contacts contactsData={contactsData}/>
            <Footer/>
        </div>
    );
}

//t

export default App;
