import React, { Component } from 'react'
import './myStyles.css'

function HomePage()
{
    const options = ['Sign In','Create','Watch']

    const navList = options.map((option) => <li key={option} >{option}</li>)

    return (
            <div>
                <nav>
                    <ul className='nav-links'>{navList}</ul>
                </nav>
            </div>
    );
}
export default HomePage
