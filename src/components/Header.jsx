import './Header.css'
import { useState } from 'react'
import sun from '../../public/images/sun.png'
import moon from '../../public/images/moon.png'

function Header() {
    const [mode, setMode] = useState('lightMode')

    function handleClick() {
        setMode(mode === 'lightMode' ? 'darkMode' : 'lightMode')
    }

    return (
        <div className="header">
            <div className="headerTitle">
                Todo List {mode}
            </div>
            <div className="modeButton">
                <button onClick={handleClick}>
                    <img src={mode === 'lightMode' ? sun : moon}
                        alt="ImageModeIcon" />
                </button>
            </div>
        </div>
    )
}

export default Header