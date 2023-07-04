import '@/styles/footer.scss';

const Footer = () => {
    return (
        <footer id='contacts'>
            <div className="container">
                <div className="content">
                    <div className="title">
                    КОНТАКТЫ
                    </div>
                    <div className="meta">
                        <div className="footer">
                            <div className="contacts">
                                Мы на связи!
                                <div className="icons">
                                    <a href="http://" target="_blank" rel="noopener noreferrer" className='whatsapp'><i></i></a>
                                    <a href="http://" target="_blank" rel="noopener noreferrer" className='telegram'><i></i></a>
                                    <a href="http://" target="_blank" rel="noopener noreferrer" className='instagram'><i></i></a>
                                </div>
                            </div>
                            <div className="copyright">
                            ТОО УК “City Group Almaty”
                            </div>
                        </div>
                        <a href="https://waveteam.dev" target='_blank' className='wave'>Разработка сайта - Wave</a>
                    </div>
                </div>
            </div>
            <i id='contactImage'></i>
        </footer>
    );
};

export default Footer;