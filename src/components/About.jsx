import '@/styles/about.scss';
import Slideshow from './Slideshow';

const About = () => {
    return (
        <div id="about">
            <div className="container">
                <div className="content">
                    <div className="top">
                        <i className="logo">
                            
                        </i>
                        <div className="text">
                            <div className="title">
                            УК CITY GROUP ALMATY
                            </div>
                            <div className="description">
                            Ваш надежный партнер в сфере управления многоквартирными жилыми комплексами и другой недвижимостью. Наша компания представляет современный подход к управлению, внедряя передовые технологии и предоставляя полноценный сервис для удовлетворения потребностей наших клиентов.
                            <br/>
                            История нашей компании насчитывает уже семь лет, с момента ее основания в 2016 году. За это время мы накопили богатый опыт и стали признанными экспертами в области управления многоквартирными жилыми комплексами и другими объектами недвижимости
                            </div>
                        </div>
                    </div>
                    <div className="mid">
                        <div className="title">
                        “ГЛАВНОЕ - ЛЮДИ”
                        </div>
                        <div className="description">
                        Наш слоган отражает нашу философию работы, которая включает высокие стандарты исполнения обязательств перед жителями и сотрудниками. Мы стремимся предоставлять высокий уровень сервиса для жителей, обеспечивать достойную оплату труда и развивать потенциал наших сотрудников. Мы верим, что создание сообщества людей, основанного на доверии и уважении, является важным аспектом нашей работы
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="title">
                        Мы предлагаем полноценный сервис 
                        </div>
                        <Slideshow />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;