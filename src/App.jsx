import React from 'react'
import PhotoLib from "./components/PhotoLib.jsx";
import Nav from "./components/nav/Nav.jsx";
import Locations from "./components/Locations.jsx";
import Slogan from "./components/Slogan.jsx";
import Reviews from "./components/Reviews.jsx";
import FourSeasons from "./components/FourSeasons.jsx";
import SocialMedias from "./components/SocialMedias.jsx";

const App = () => {
    return (
        <main>
            <Nav />
            <PhotoLib />
            <Locations />
            <Slogan />
            <Reviews />
            <FourSeasons />
            <SocialMedias />
        </main>
    )
}
export default App
