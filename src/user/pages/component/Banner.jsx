
import React from 'react'
import { Button } from '../../../atoms/Atoms'

const Banner = () => {
    return (
        <div>
            <div className="banner-data text-center">
                <div className="banner-img">
                    <img src="https://htmldemo.net/reid/reid/assets/img/slider/content.png" alt="banner image" />
                </div>
                <p>the wooboom spring collection is back at half price</p>
                <Button style="btn"/>
            </div>
        </div>
    )
}

export default Banner
