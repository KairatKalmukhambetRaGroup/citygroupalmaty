import '@/styles/tariffs.scss';
import Application from './Application';

const Tariffs = ({openModal}) => {
    return (
        <div id="tariffs">
            <div className="container">
                <div className="content">
                    <div className="title">
                        ТАРИФЫ
                    </div>
                    <div className="cards">
                        <div className="card">
                            <div className="body">
                                <div className="heading">
                                    <div className="title">
                                    Базовый Тариф
                                    </div>
                                    {/* <div className="description">
                                    Описание тарифа. Тариф предназначен для жителей, тариф предназначен для жителей
                                    </div> */}
                                </div>
                                <div className="price">
                                индивидуальная цена
                                </div>
                                <ul className='items'>
                                    <li>Уборка подъездов</li>
                                    <li>Обслуживание детских площадок</li>
                                    <li>Техобслуживание квартир</li>
                                    <li>Уборка территории</li>
                                    <li>Дезинфекция</li>
                                    <li>Ремонт</li>
                                </ul>
                            </div>
                            <div className="btn" onClick={openModal}>
                                Подробнее
                            </div>
                        </div>
                        {/* <div className="card">
                            <div className="body">
                                <div className="heading">
                                    <div className="title">
                                    Название тарифа №2
                                    </div>
                                    <div className="description">
                                    Описание тарифа. Тариф предназначен для жителей, тариф предназначен для жителей
                                    </div>
                                </div>
                                <div className="price">
                                от 45 000 тенге
                                </div>
                                <ul className='items'>
                                    <li>service</li>
                                    <li>service</li>
                                    <li>service</li>
                                    <li>service</li>
                                    <li>service</li>
                                </ul>
                            </div>
                            <div className="btn" onClick={openModal}>
                                Подробнее
                            </div>
                        </div> */}
                    </div>

                    <Application />
                </div>
            </div>
        </div>
    );
};

export default Tariffs;