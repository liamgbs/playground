import React, { useState } from 'react'
import './Site.scss';

import themeAPI from './DefinitelyAnEndpoint'

const Site: React.FC = () => {

    const changeTheme = async (mode: number, company: string) => {
        if (mode === 0) {
            const theme = await themeAPI(company);

            Object.keys(theme).forEach(k => {
                // @ts-ignore
                document.documentElement.style.setProperty(`--${k}`, theme[k])
            })

        } else {
            document.getElementsByClassName('site')[0]!.classList.add(company)
        }

    }

    return (
        <div className="site">
            <Header />

            <Sidebar />
            <Main changeTheme={changeTheme} />

            <Footer />
        </div>
    )
}

const Header: React.FC = () => {
    return (
        <header className="header">

            <div className="logo">
                &nbsp;
            </div>

            <h1 className="title">
                Company Inc.
            </h1>

        </header>
    )
}

const Sidebar: React.FC = () => {
    return (
        <nav className="sidebar">
            <div className="sidebar-item">Stuff</div>
            <div className="sidebar-item">Other Stuff</div>
            <div className="sidebar-item">Niche Stuff</div>
            <div className="sidebar-item">Restricted Stuff</div>
            <div className="sidebar-item">Things</div>
            <div className="sidebar-item">Things, but with stuff</div>
            <div className="sidebar-item">Stuff again just in case</div>
            <div className="sidebar-item">Pictures of stuff</div>
            <div className="sidebar-item">Videos of stuff</div>
            <div className="sidebar-item">Ya mums stuff</div>
        </nav>
    )
}

const Main: React.FC<{ changeTheme(mode: number, company: string): void }> = ({ changeTheme }) => {
    const [company, setCompany] = useState<string>("plt")
    return (
        <main className="main">
            <div>
                <input
                    value={company}
                    onChange={e => setCompany(e.target.value)} />
                <button
                    onClick={() => changeTheme(0, company)}>
                    Change Theme (endpoint)
                </button>
                <button
                    onClick={() => changeTheme(1, company)}>
                    Change Theme (stylesheets)
                </button>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et neque eu felis lacinia ullamcorper. Curabitur rutrum ullamcorper risus, sed mattis augue auctor vel. Etiam et fringilla lorem. Aenean pulvinar rutrum dolor. Quisque scelerisque urna nec mauris ornare semper. Nam et fermentum ligula. Sed vestibulum, ex eu egestas mollis, dui mi varius turpis, sed fermentum tortor ex vel tortor. Nullam sed odio id leo cursus commodo a in urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Vivamus quis libero libero. Ut mollis consectetur eros eu hendrerit. Phasellus posuere cursus nunc blandit elementum. Vestibulum dapibus nec nibh nec consectetur. Aenean lacinia cursus ipsum suscipit dapibus.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et neque eu felis lacinia ullamcorper. Curabitur rutrum ullamcorper risus, sed mattis augue auctor vel. Etiam et fringilla lorem. Aenean pulvinar rutrum dolor. Quisque scelerisque urna nec mauris ornare semper. Nam et fermentum ligula. Sed vestibulum, ex eu egestas mollis, dui mi varius turpis, sed fermentum tortor ex vel tortor. Nullam sed odio id leo cursus commodo a in urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Vivamus quis libero libero. Ut mollis consectetur eros eu hendrerit. Phasellus posuere cursus nunc blandit elementum. Vestibulum dapibus nec nibh nec consectetur. Aenean lacinia cursus ipsum suscipit dapibus.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et neque eu felis lacinia ullamcorper. Curabitur rutrum ullamcorper risus, sed mattis augue auctor vel. Etiam et fringilla lorem. Aenean pulvinar rutrum dolor. Quisque scelerisque urna nec mauris ornare semper. Nam et fermentum ligula. Sed vestibulum, ex eu egestas mollis, dui mi varius turpis, sed fermentum tortor ex vel tortor. Nullam sed odio id leo cursus commodo a in urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Vivamus quis libero libero. Ut mollis consectetur eros eu hendrerit. Phasellus posuere cursus nunc blandit elementum. Vestibulum dapibus nec nibh nec consectetur. Aenean lacinia cursus ipsum suscipit dapibus.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et neque eu felis lacinia ullamcorper. Curabitur rutrum ullamcorper risus, sed mattis augue auctor vel. Etiam et fringilla lorem. Aenean pulvinar rutrum dolor. Quisque scelerisque urna nec mauris ornare semper. Nam et fermentum ligula. Sed vestibulum, ex eu egestas mollis, dui mi varius turpis, sed fermentum tortor ex vel tortor. Nullam sed odio id leo cursus commodo a in urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Vivamus quis libero libero. Ut mollis consectetur eros eu hendrerit. Phasellus posuere cursus nunc blandit elementum. Vestibulum dapibus nec nibh nec consectetur. Aenean lacinia cursus ipsum suscipit dapibus.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et neque eu felis lacinia ullamcorper. Curabitur rutrum ullamcorper risus, sed mattis augue auctor vel. Etiam et fringilla lorem. Aenean pulvinar rutrum dolor. Quisque scelerisque urna nec mauris ornare semper. Nam et fermentum ligula. Sed vestibulum, ex eu egestas mollis, dui mi varius turpis, sed fermentum tortor ex vel tortor. Nullam sed odio id leo cursus commodo a in urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Vivamus quis libero libero. Ut mollis consectetur eros eu hendrerit. Phasellus posuere cursus nunc blandit elementum. Vestibulum dapibus nec nibh nec consectetur. Aenean lacinia cursus ipsum suscipit dapibus.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et neque eu felis lacinia ullamcorper. Curabitur rutrum ullamcorper risus, sed mattis augue auctor vel. Etiam et fringilla lorem. Aenean pulvinar rutrum dolor. Quisque scelerisque urna nec mauris ornare semper. Nam et fermentum ligula. Sed vestibulum, ex eu egestas mollis, dui mi varius turpis, sed fermentum tortor ex vel tortor. Nullam sed odio id leo cursus commodo a in urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Vivamus quis libero libero. Ut mollis consectetur eros eu hendrerit. Phasellus posuere cursus nunc blandit elementum. Vestibulum dapibus nec nibh nec consectetur. Aenean lacinia cursus ipsum suscipit dapibus.</p>
            </div>
            
            <div className="motd" />
        </main>
    )
}

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            footer
        </footer>
    )
}

export default Site
