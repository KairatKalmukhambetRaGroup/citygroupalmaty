import '@/styles/menu.scss';

const Menu = ({setShowMenu, showMenu}) => {
    const close = (e) => {
        setShowMenu(false);
    }
    return (
        <div id="menu" className={showMenu ? '' : 'hide'}>
            <div className="close" onClick={close}>Закрыть</div>
            <i className="logo"></i>
            <div className="nav">
                <a href="#about" onClick={close}>О компании</a>
                <a href="#services" onClick={close}>Услуги</a>
                <a href="#tariffs" onClick={close}>Тарифы</a>
                <a href="#contacts" onClick={close}>Контакты</a>
            </div>
        </div>
    );
};

export default Menu