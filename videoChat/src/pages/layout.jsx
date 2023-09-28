import React from 'react'
import './layout.scss'
const Layout = ({children}) => {
    return (
        <div className='app'>
        <div className="content">
            {children}
        </div>
        </div>
    )
}

export default Layout