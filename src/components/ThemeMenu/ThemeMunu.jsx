import React, {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux'
import ThemeAction from '../../redux/actions/ThemeAction'
import './thememenu.scss'

//mode-settings
const mode_settings = [
    {
        id: 'sun',
        name: 'Light',
        background: 'light-background',
        class: 'theme-mode-light'
    },
    {
        id: 'moon',
        name: 'Dark',
        background: 'dark-background',
        class: 'theme-mode-dark'
    }
]
//mode-main-color
const color_settings = [
    {
        id: 'green',
        name: 'green',
        background: 'green-color',
        class: 'theme-color-green'
    },
    {
        id: 'pink',
        name: 'pink',
        background: 'pink-color',
        class: 'theme-color-pink'
    },
    {
        id: 'yellow',
        name: 'yellow',
        background: 'yellow-color',
        class: 'theme-color-yellow'
    },
    {
        id: 'apricot',
        name: 'apricot',
        background: 'apricot-color',
        class: 'theme-color-apricot'
    },
]


const ThemeMenu = () => {

    const [currMode, setcurrMode] = useState('Dark') //배경색
    const [currColor, setcurrColor] = useState('yellow-color')//메인색
    const dispatch = useDispatch();

    const setMode = mode => {
        setcurrMode(mode.name)
        localStorage.setItem('themeMode', mode.class)
        dispatch(ThemeAction.setMode(mode.class))
    }

    const setColor = color => {
        setcurrColor(color.background)
        localStorage.setItem('colorMode', color.class)
        dispatch(ThemeAction.setColor(color.class))
    }

    
    useEffect(() => {
        const themeClass = mode_settings.find(e => e.class === localStorage.getItem('themeMode', 'theme-mode-light'))
        const colorClass = color_settings.find(e => e.class === localStorage.getItem('colorMode', 'theme-mode-light'))

        if (themeClass !== undefined) setcurrMode(themeClass.id)
        if (colorClass !== undefined) setcurrColor(colorClass.background)

    }, []);

    return (
        <div className='theme-menu'>
            <div className='theme-menu__state'>
                <span>
                    {
                        currMode === 'Dark' ? (<i className='bx bx-moon'></i>) 
                        : (<i className='bx bx-sun'></i>)
                    }
                </span>
                <div className = {`mode-list__color ${currColor}`}></div>
            </div>
            <div className='theme-menu__select'>
                <ul className='mode-list'>
                    {
                        mode_settings.map((item, index) => (
                            <li key={index} onClick={() => setMode(item)}>
                                <div className={`mode-list__mode ${item.background}`}>
                                    <i className={`bx bx-${item.id}`}></i>
                                </div>
                                <span>{item.name}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className='theme-menu__select'>
                <ul className='mode-list'>
                    {
                        color_settings.map((item, index) => (
                            <li className={`mode-list__color ${item.background} `} key={index} onClick={() => setColor(item)}>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default ThemeMenu
