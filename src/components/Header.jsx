import '@/styles/header.scss';

const Header = ({openModal}) => {
    return (
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
                </div>
            </div>
        </header>
    );
};

export default Header;