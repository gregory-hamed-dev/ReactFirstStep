import React from 'react'


export default function Header() {
    return (
        <nav className="navbar navbar-dark bg-primary mb-3 py-2">
        <div className="container">
            <a href="/" className="navbar-brand">AppContacts</a>
            <ul className="navbar-nav">
                <li className="nav-item m1-auto">
                    <a href="/" className="nav-link">Accueil</a>
                </li>
            </ul>
        </div>
    </nav>
    )
}



