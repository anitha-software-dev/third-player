import React, { useState } from "react";
import Profile1 from "../../../assets/img/Landing-Page/nft1.png"
import Profile2 from "../../../assets/img/Landing-Page/nft2.png"
import Profile3 from "../../../assets/img/Landing-Page/nft3.png"
import blurbg1 from "../../../assets/img/Landing-Page/nft3.png"
import blurbg2 from "../../../assets/img/Landing-Page/nft1.png"
import blurbg3 from "../../../assets/img/Landing-Page/nft2.png"

const CardShuffle = () => {

    const [check, setCheck] = useState(3)
    return (
        <div className="shuffle-sec ">
            <div className='special-slider'>
                <div className="shuffle-container">
                    <input type="radio" name="slider" id="item-1" checked={`${check === 1 && true}`} />
                    <input type="radio" name="slider" id="item-2" checked={`${check === 2 && true}`} />
                    <input type="radio" name="slider" id="item-3" checked={`${check === 3 && true}`} />
                    <div className="cards">
                        <label className="card" for="item-1" id="song-1" onClick={() => setCheck(1)} >
                            <img src={check === 1 ? Profile1 : blurbg2} alt="mushroom" data-aos="zoom-out-up" className="border-nft" />
                        </label>
                        <label className="card" for="item-2" id="song-2" onClick={() => setCheck(2)}>
                            <img src={check === 2 ? Profile2 : blurbg3} alt="mushroom" data-aos="zoom-out-up" className="border-nft" />
                        </label>
                        <label className="card" for="item-3" id="song-3" onClick={() => setCheck(3)}>
                            <img src={check === 3 ? Profile3 : blurbg1} alt="mushroom" data-aos="zoom-out-up" className="border-nft" />
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default CardShuffle