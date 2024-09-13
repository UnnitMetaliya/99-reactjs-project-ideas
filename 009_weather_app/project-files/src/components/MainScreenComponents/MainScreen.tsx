import { useState } from 'react'

import './MainScreen.css'

import TopBarInfo from './TopBarInfo/TopBarInfo'

const MainScreen = () => {
    const [temp, setTemp] = useState(0)

    let currentTemperature = 23;

    return (
        <div className='main_screen__container'>
            {/** TopBarInfo */}
            <TopBarInfo temperature={temp} setTemperature={setTemp}/>
            {/** CurrentInfo */}
            <div className='main_screen__current_info'>
                <h1>{temp == 0 ? currentTemperature * (9/5) + 32 : currentTemperature}</h1>
                <p>°C</p>
            </div>
            {/** WeeklyInfo */}
            
        </div>
    )
}

export default MainScreen