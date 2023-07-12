import '@/styles/header.scss';
import Menu from './Menu';
import { useState } from 'react';

const Header = ({openModal}) => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <>
            <header>
                <div className="container">
                    <div className="content">
                        <a href='#main' className="logo">
                            City Group Almaty 
                        </a>
                        <div className="navbar">
                            <div className="nav">
                                <a href="#about">О компании</a>
                                <a href="#services">Услуги</a>
                                <a href="#tariffs">Тарифы</a>
                                <a href="#contacts">Контакты</a>
                            </div>
                            <div className="btn" onClick={openModal}>
                                Оставить заявку
                            </div>
                        </div>
                        <i className="menu" onClick={(e)=>{e.preventDefault(); setShowMenu(true)}} ></i>
                    </div>
                </div>
            </header>
                    <Menu setShowMenu={setShowMenu} showMenu={showMenu} />
        </>
    );
};

export default Header;