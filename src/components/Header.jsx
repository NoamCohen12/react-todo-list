import './Header.css'

function Header({ mode, setMode }) {
    function handleClick() {
        setMode(mode === 'lightMode' ? 'darkMode' : 'lightMode')
    }

    return (
        <div className="header">
            <div className="headerTitle">
                TodoList
            </div>
            <div className="modeButton">
                <img
                    onClick={handleClick}
                    src={mode === 'lightMode' ? '/Images/moon.png' : '/Images/sun.png'}
                    alt="ImageModeIcon"
                />
            </div>
        </div>
    )
}

export default Header