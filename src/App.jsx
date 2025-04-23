import React from 'react'
import Title from "./components/title/Title.jsx";
import Nav from "./components/nav/Nav.jsx";
import History from "./components/history/History.jsx";
// import reviews from "./components/reviews/reviews.jsx";
import Footer from "./components/footer/Footer.jsx";
import Videos from "./components/videos/Videos.jsx";

const App = () => {
    return (
        <main>
            <Nav />
            <Title />
            <History />
            <Videos />
            {/*<reviews />*/}
            <Footer />
        </main>
    )
}
export default App
