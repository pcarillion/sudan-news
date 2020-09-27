import React from 'react'

const DarkMode = ({callback, dm}) => {
    return (
        <div 
            onClick={dm.dark_mode === true? 
                () => callback(false):
                () => callback(true)}
            className={dm.dark_mode === true? 'dark-mode-btn active' : 'dark-mode-btn non-active'}
        >
            {dm.dark_mode ? <p>
                Light mode
            </p>:
            <p>
                Dark mode
            </p>}
        </div>
    )
}

export default DarkMode
