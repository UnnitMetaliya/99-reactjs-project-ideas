import './TopBarInfo.css'
import WeatherIcon from '../../../assets/weather_icons/WeatherIcon - 2-58.png'

const TopBarInfo = (props: any) => {
    

    const handleSwitcherClick = (index: number) => {
        props.setTemperature(index)
    }

    return (
        <div className='top_bar_info__container'>
            {/** Weather Icon */}
            <div>
                <img height="100" src={WeatherIcon} className='top_bar_info__weather_icon'/>
            </div>
            {/** Temperature Switch */}
            <div className='top_bar_info__temp_switch'>
                <a href="#" className={'top_bar_info__temp_switch_switcher' +  (props.temperature == 0 ? 'active_switcher' : '')} onClick={() => handleSwitcherClick(0)}>
                    F
                </a>
                <a href="#" className={'top_bar_info__temp_switch_switcher' +  (props.temperature == 0 ? 'active_switcher' : '')} onClick={() => handleSwitcherClick(1)}>
                    C
                </a>
            </div>
        </div>
    )
}

export default TopBarInfo