import React from 'react';
import './App.css';
import Header from "./component/header/Header";
import Main from "./component/main/Main";
import Skills from "./component/skills/Skills";
import MyWorks from "./component/myWorks/MyWorks";
import Freelance from "./component/freelance/freelance";
import Contacts from "./component/contacts/Contacts";
import Footer from "./component/footer/Footer";
import NavigationList from "./component/nav/NavigationList";


function App() {
    return (
        <div className="App">
            <Main/>
            <NavigationList/>
            <Skills/>
           <MyWorks/>
            <Freelance/>
            <Contacts />
            <Footer />
        </div>
    );
}

//t

export default App;
