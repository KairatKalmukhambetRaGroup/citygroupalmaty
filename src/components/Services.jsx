import '@/styles/services.scss';
import Image from 'next/image';

import Service1 from '@/assets/images/service1.jpg';
import Service2 from '@/assets/images/service2.jpg';
import Service3 from '@/assets/images/service3.jpg';
import Service4 from '@/assets/images/service4.jpg';
import Service5 from '@/assets/images/service5.jpg';
import Service6 from '@/assets/images/service6.jpg';

const imgLoaded = (e) => {
    if(e.currentTarget){
        e.currentTarget.classList.add('loaded');
    }
}

const Services = () => {
    return (
        <div id="services">
            <div className="container">
                <div className="title">
                    УСЛУГИ
                </div>
            </div>
            <div className="content">

                <div className="wrapper green">
                    <div className="card">
                        <div className="card-image card1">
                            <Image src={Service1} alt='service' onLoadingComplete={imgLoaded} onLoad={imgLoaded} />
                            <div className="overlay"></div>
                        </div>
                        <div className="title">
                        УБОРКА ПОДЪЕЗДОВ
                        </div>
                        <div className="text">
                        Гарантируем чистоту и порядок у ваших дверей, всегда
                        </div>
                    </div>
                    <div className="text">
                        Гарантируем чистоту и порядок у ваших дверей, всегда
                    </div>
                </div>
                <div className="wrapper">
                    <div className="card">
                        <div className="card-image card2">
                            <Image src={Service2} alt='service' onLoadingComplete={imgLoaded} onLoad={imgLoaded} />
                            <div className="overlay"></div>
                        </div>
                        <div className="title">
                        ОБСЛУЖИВАНИЕ<br/>ДЕТСКИХ ПЛОЩАДОК
                        </div>
                        <div className="text">
                        Все лучшее - детям!
                        </div>
                    </div>
                    <div className="text">
                        Все лучшее - детям!
                        </div>
                    </div>
                <div className="wrapper">

                    <div className="card">
                        <div className="card-image card3">
                            <Image src={Service3} alt='service' onLoadingComplete={imgLoaded} onLoad={imgLoaded} />
                            <div className="overlay"></div>
                        </div>
                        <div className="title">
                        ТЕХОБСЛУЖИВАНИЕ<br/>КВАРТИР
                        </div>
                        <div className="text">
                        Бесплатный вызов мастера 24/7
                        </div>
                    </div>
                    <div className="text">
                        Бесплатный вызов мастера 24/7
                        </div>
                    </div>
                <div className="wrapper green">

                    <div className="card">
                        <div className="card-image card4">
                            <Image src={Service4} alt='service' onLoadingComplete={imgLoaded} onLoad={imgLoaded} />
                            <div className="overlay"></div>
                        </div>
                        <div className="title">
                        УБОРКА ТЕРРИТОРИИ
                        </div>
                        <div className="text">
                        Красивые и ухоженные сады и газоны
                        </div>
                    </div>
                    <div className="text">
                        Красивые и ухоженные сады и газоны
                        </div>
                </div>
                <div className="wrapper green">

                    <div className="card">
                        <div className="card-image card5">
                            <Image src={Service5} alt='service' onLoadingComplete={imgLoaded} onLoad={imgLoaded} />
                            <div className="overlay"></div>
                        </div>
                        <div className="title">
                        ДЕЗИНФЕКЦИЯ
                        </div>
                        <div className="text">
                        Регулярные работы по устранению вредителей
                        </div>
                    </div>
                    <div className="text">
                        Регулярные работы по устранению вредителей
                        </div>
                    </div>
                <div className="wrapper">

                    <div className="card">
                        <div className="card-image card6">
                            <Image src={Service6} alt='service' onLoadingComplete={imgLoaded} onLoad={imgLoaded} />
                            <div className="overlay"></div>
                        </div>
                        <div className="title">
                        РЕМОНТ
                        </div>
                        <div className="text">
                        Ремонтные работы любой сложности
                        </div>
                    </div>
                    <div className="text">
                        Ремонтные работы любой сложности
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Services;