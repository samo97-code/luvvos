import React, {useEffect, useMemo, useCallback, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

// Redux
import {useDispatch, useSelector} from "react-redux";
import {fetchService} from "./store/actions/service/ServiceAction";
import {fetchSliderBanner} from "./store/actions/slider-banner/SliderBannerAction";
import {fetchServiceSlider} from "./store/actions/service-slider/ServiceSliderAction";

// Components
import Header from "./components/Header/Header"
import SliderBanner from "./components/Main/Slider/Slider";
import HomePageLoading from "./components/HomePageLoading/HomePageLoading";
// import Services from "./components/Main/Services/Services";
import AboutArea from "./components/Main/AboutArea/AboutArea";
import ServiceSlider from "./components/Main/ServiceSlider/ServiceSlider";
import PartnerSlider from "./components/Main/PartnerSlider/PartnerSlider";
import WhyChooseUs from "./components/Main/WhyChooseUs/WhyChooseUs";
import Pricing from "./components/Main/Pricing/Pricing";
import OurMission from "./components/Main/OurMission/OurMission";
import Team from "./components/Main/Team/Team";
import PlaceArea from "./components/Main/PlaceArea/PlaceArea";
import News from "./components/Main/News/News";
import Footer from "./components/Footer/Footer";
import MasonaryTab from "./components/Main/MasonaryTab/MasonaryTab";


const App = () => {
    const dispatch = useDispatch()
    const services = useSelector(state => state.service.services)
    const sliderBanners = useSelector(state => state.sliderBanners.sliderBanners)
    // const serviceSliders = useSelector(state => state.serviceSliders.serviceSliders)

    useEffect(()=>{
        dispatch(fetchService())
        dispatch(fetchSliderBanner())
        // dispatch(fetchServiceSlider())

        // var value = 500
        // var sum = 0
        // console.log('Start = 500 dram')
        // console.log('Avg score = 1.5')
        // console.log('Total games 9')
        // console.log('Each game set only 500 dram')
        // for (let i=1;i<=10;i++){
        //     if(i == 1){
        //         sum += (value * 1.5)
        //     }else{
        //         sum = sum - value + (value * 1.5)
        //     }
        //     console.log(`Game ${i} = `,sum+' dram')
        // }
        // console.log('Win 7 games, sum = ', sum+' dram')
        // console.log('Lose 3 games(1500), sum = ', sum - 1000 +'dram')
        // sum = sum - 1000
        // console.log('Remove start value(500), Clear win sum = ', sum - 500)
        // sum = sum - 500
        //
        // console.log("End of month(30or), sum = "+sum * 30+' dram')


    },[])


    return (
        <>
            {
                !services.length && !sliderBanners.length
                    ? <HomePageLoading/>
                    : <div className="App">
                        <Header/>
                        <SliderBanner/>
                        {/*<Services />*/}
                        <AboutArea />
                        <MasonaryTab />
                        <ServiceSlider />
                        <PartnerSlider />
                        <WhyChooseUs />
                        <Pricing />
                        <OurMission />
                        <Team />
                        <PlaceArea />
                        <News />
                        <Footer />
                     </div>
            }
        </>
    );
};

export default App;

