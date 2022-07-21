import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './weather.scss'
import LoadingSpinner from '../../spinner/Spinner';

const api = {
    key: process.env.REACT_APP_WEATHER_KEY,
    base: "https://api.openweathermap.org/data/2.5/"
}

const locationData = [
    'Seoul',
    'Incheon',
    'Ulsan',
    'Gyeongju',
    'Busan',
    'Jeju'
];

const Weather = () => {
    const [weather , setWeather]= useState({});
    const [preweather, setPreWeather] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    //당일 날씨 받아오기
    const weatherFetch = async(location)=>{
        setIsLoading(true)
        const {data} = await axios.get(`${api.base}weather?q=${location}&units=metric&appid=${api.key}`);
        setWeather(data);
        weatherPreFetch(location)
        
        setTimeout(() => {
            setIsLoading(false)
        }, 500);
    }
    useEffect(()=>{
        weatherFetch(locationData[0]);
    },[])

    //예보5일 날씨 받아오기
    const weatherPreFetch = async(location) => {
        const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${api.key}`)
        const res = data.list.filter(it => new RegExp("06:00:00","i").test(it.dt_txt))
        let prediction = []
        res.forEach((item)=>{
            prediction.push(...item.weather)
        })
        setPreWeather(prediction)
    }
    //오늘 날짜 반환
    const dateBuilder = (d) => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${day} ${date} ${month} ${year}`
    }

    // 당일 날씨에 따라 배경이미지 변경
    const background =(w) => {
        switch(w){
            case "Clear":
                const clear = require('../../../assets/images/weather/clear.jpg');
                return clear;
            case "Clouds":
                const clounds = require('../../../assets/images/weather/cloud.jpg');
                return clounds;
            case "Rain": 
                const rain = require('../../../assets/images/weather/rain.jpg');
                return rain;
            case "Snow":
                const snow = require('../../../assets/images/weather/snow.jpg');
                return snow;
            default:
                return 'Not data'
        }
        
    }
    return (
            <div className='weather col-4 col-md-12 cardstyle scrollreveal03 '>
            {   
            Object.keys(weather).length !== 0 && isLoading === false ? (
                <div  className='weather__container' style={{backgroundImage:`url(${background(weather.weather[0].main)})`}}>
                    <h2>오늘은 뭐 입지 ♪</h2>
                    <div className='weather__container__areas'>
                        {
                            locationData.map((item, index) => (
                                <div 
                                key={index} 
                                onClick={()=> {weatherFetch(item); weatherPreFetch(item);}}>{item}</div>
                            ))
                        }
                    </div>
                    <div className='weather__container__area'>{weather.name}. {weather.sys.country}</div>
                    <div className='weather__container__date'>{dateBuilder(new Date())}</div>
                    <div className='weather__container__state'>
                        <div className='weather__container__state__temp'>
                        {
                            Object.keys(weather).length === 0 ? '' : weather.main.temp
                        } °c
                        </div>
                        <div className='weather__container__state__cloud'>{weather.weather[0].main}</div>
                    </div>
                    <div className='weather__container__pre'>
                    {
                        Object.keys(preweather).length === 0 ? '' : (
                            preweather.map((item, index)=> (
                                <div key={index} className='weather__container__pre__day'>
                                    <span>{new Date(new Date().setDate(new Date().getDate()+(index+1))).getDate()}</span>
                                    <span key={index}>{item.main}</span>
                                    <img src={`http://openweathermap.org/img/wn/${item.icon}.png`} alt=''/>
                                </div>
                            ))
                        )
                    }
                    </div>
                    <div className='weather__container__search'></div>
                </div>)
                : (<LoadingSpinner/>)
            }
            </div>
    )
}

export default Weather