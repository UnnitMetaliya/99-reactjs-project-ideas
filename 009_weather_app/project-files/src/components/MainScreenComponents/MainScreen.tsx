import { useState } from 'react'

import './MainScreen.css'

// Icons
import WindDirectionIcon from '../../assets/info_icons/info_icon_winddir.png';
import HumidityIcon from '../../assets/info_icons/info_icon_humidity.png';
import RainIcon from '../../assets/info_icons/info_icon_rain.png'

// Components
import TopBarInfo from './TopBarInfo/TopBarInfo'

// Weather Data
import fetchWeatherData from '../../api/weatherData';

const MainScreen = () => {
    // configures the degrees to be used in the main screen (celsius or fahrenheit)
    const [temp, setTemp] = useState(0)

    let cityInfo = fetchWeatherData('Rauma');
    console.log(cityInfo);

    // change for the api info
    let currentDate = new Date();
    let currentTemperature = 20;

    
    // console.log(fetchWeatherData(61.12724, 21.51127));

    return (
        <div className='main_screen__container'>
            {/** TopBarInfo */}
            <TopBarInfo temperature={temp} setTemperature={setTemp}/>
            {/** CurrentInfo */}
            <div className='main_screen__current_info'>
                <div className='main_screen__current_info_temperature_box'>
                    <h1>{temp == 0 ? currentTemperature * (9/5) + 32 : currentTemperature}</h1>
                    <p>{temp == 0 ? '°F' : '°C'}</p>
                </div>
                
                {/** Day month year */}
                <h1 style={{fontSize: 36}} className='main_screen__current_info_current'>{currentDate.getDate()}
                    {(() => {
                        switch (currentDate.getDate()) {
                            case 1:
                                return "st ";
                            case 2:
                                return "nd ";
                            case 3:
                                return "rd ";
                            default:
                                return "th ";
                        }
                    })()}
                    {currentDate.toLocaleString('default', { month: 'long' })}
                    {" " + currentDate.getFullYear().toString()}
                </h1>
                {/** Weekday | time */}
                <h1 className='main_screen__current_info_current' style={{fontSize: 24}}>
                    {currentDate.toLocaleDateString('default', { weekday: 'long' })} | {currentDate.getHours()}:{(currentDate.getMinutes() < 10 ? '0' : '') + currentDate.getMinutes()}
                </h1>

                {/** Windspeed | humidity | rain */}
                <div className='main_screen__current_info_additional_info'>
                    <p className='main_screen__current_info_additional_info_config'>
                        <img src={WindDirectionIcon} alt="" /> Wind: 15mph  <> </>|<> </>  
                        <img src={HumidityIcon} alt="" /> Humidity: 60%  <> </>|<> </>
                        <img src={RainIcon} alt="" /> Rain: 0mm</p>
                </div>
            </div>
            {/** WeeklyInfo */}
            
        </div>
    )
}

export default MainScreen