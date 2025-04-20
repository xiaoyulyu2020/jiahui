import React from 'react'
import Title from "./components/title/Title.jsx";
import Nav from "./components/nav/Nav.jsx";
import Locations from "./components/Locations.jsx";
import History from "./components/history/History.jsx";
import Reviews from "./components/Reviews/Reviews.jsx";
import FourSeasons from "./components/FourSeasons.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
    return (
        <main>
            <Nav />
            <Title />
            <History />
            <Reviews />
            <Footer />
        </main>
    )
}
export default App
