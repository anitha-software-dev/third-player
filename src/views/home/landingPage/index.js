
import Footer from "components/Footer/Footer";
import React from "react";
// core components

import Banner from "./Banner";
import NFTShuffle from "./NFTShuffle";
import Story from "./Story";
import ThirdPlayer from "./ThirdPlayer";


export default function Index() {
    React.useEffect(() => {
        document.body.classList.toggle("index-page");
        window.scrollTo({ top: 0, behavior: 'smooth' });
        // Specify how to clean up after this effect:
        return function cleanup() {
            document.body.classList.toggle("index-page");
        };

    }, []);
    return (
        <>
            <div className="wrapper" >
                <Banner />
                <Story />
                <NFTShuffle />
                <ThirdPlayer />
                <Footer />
            </div>
        </>
    );
}
