import '@/styles/main.scss';

const Main = ({openModal}) => {
    
    return (
        <div id="main">
            <i id="bg"></i>
            <div className="container">
                <div className="content">
                    <div className="text">
                        <div className="title">
                            Присоединяйтесь к нам 
                        </div>
                        <div className="description">
                            и узнайте, как мы можем сделать ваше проживание комфортным и безопасным, сохраняя ценность вашей недвижимости и вкладываясь в развитие общества
                        </div>
                    </div>
                    <div className="btn" onClick={openModal}>
                        Оставить заявку
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;