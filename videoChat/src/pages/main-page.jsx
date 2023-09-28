import React from 'react'
import { Button, Input } from "antd"
import './main-page.scss'

const MainPage = () => {
    return (
        <div className='main-page'>
            <h1>Video Conference</h1>
            <div className="section-holder">
                <div className="session">
                    <h2>Your info</h2>
            <Input className='mb-4' size="large" placeholder='Name'/>
                    <Button className='bg-blue-500  w-28' size='large' type="primary">Copy ID</Button>
                </div>
                <div className="call">
                    <h2>Make a call</h2>
            <Input className='mb-4' size="large" placeholder='Sesion ref'/>
                    <Button className='bg-blue-500 w-28' size='large' type="primary">Call</Button>
                </div>
            </div>
        </div>
    )
}

export default MainPage