import '@/styles/admin/header.scss';
import { useState } from 'react';

const AdminHeader = () => {
    const logout = (e) => {
        e.preventDefault();
    }
    return (
        <header>
            <div className="container">
                <div className="content">
                    <a href='/' className="logo">
                        City Group Almaty 
                    </a>
                    <div className="navbar">
                        <div className="user">
                            admin@citygroup.kz
                        </div>
                        <div className="btn" onClick={logout}>
                            Выход
                        </div>
                    </div>
                    <i className="menu" onClick={(e)=>{e.preventDefault(); setShowMenu(true)}} ></i>
                </div>
            </div>
        </header>
    );
};

export default AdminHeader;