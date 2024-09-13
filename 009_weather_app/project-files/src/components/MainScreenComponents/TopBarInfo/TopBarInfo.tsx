import './TopBarInfo.css'
import { useState } from 'react'
import WeatherIcon from '../../../assets/weather_icons/WeatherIcon - 2-58.png'

const TopBarInfo = () => {
    const [active_switcher, setActiveSwitcher] = useState(0)

    const handleSwitcherClick = (index: number) => {
        setActiveSwitcher(index)
        console.log(active_switcher)
    }

    return (
        <div className='top_bar_info__container'>
            {/** Weather Icon */}
            <div>
                <img height="100" src={WeatherIcon} className='top_bar_info__weather_icon'/>
            </div>
            {/** Temperature Switch */}
            <div className='top_bar_info__temp_switch'>
                <a href="#" className={'top_bar_info__temp_switch_switcher' +  (active_switcher == 0 ? 'active_switcher' : '')} onClick={() => handleSwitcherClick(0)}>
                    F
                </a>
                <a href="#" className={'top_bar_info__temp_switch_switcher' +  (active_switcher == 0 ? 'active_switcher' : '')} onClick={() => handleSwitcherClick(1)}>
                    C
                </a>
            </div>
        </div>
    )
}

export default TopBarInfo