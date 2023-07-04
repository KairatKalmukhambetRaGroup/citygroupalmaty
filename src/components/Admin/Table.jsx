import '@/styles/admin/table.scss';
import { useState } from 'react';

const applications = [
    {name: 'Валерий Сергеевич',phone: '8 777 666 55 44', 'address': 'улица Жандосова 127', osi: true, date: '25.06.2023', time: '15:20'},
    {name: 'Валерий Сергеевич',phone: '8 777 666 55 44', 'address': 'улица Жандосова 127', osi: true, date: '25.06.2023', time: '15:20'},
    {name: 'Валерий Сергеевич',phone: '8 777 666 55 44', 'address': 'улица Жандосова 127', osi: true, date: '25.06.2023', time: '15:20'},
    {name: 'Валерий Сергеевич',phone: '8 777 666 55 44', 'address': 'улица Жандосова 127', osi: true, date: '25.06.2023', time: '15:20'},
    {name: 'Валерий Сергеевич',phone: '8 777 666 55 44', 'address': 'улица Жандосова 127', osi: true, date: '25.06.2023', time: '15:20'},
    {name: 'Валерий Сергеевич',phone: '8 777 666 55 44', 'address': 'улица Жандосова 127', osi: true, date: '25.06.2023', time: '15:20'},
    {name: 'Валерий Сергеевич',phone: '8 777 666 55 44', 'address': 'улица Жандосова 127', osi: true, date: '25.06.2023', time: '15:20'},
    {name: 'Валерий Сергеевич',phone: '8 777 666 55 44', 'address': 'улица Жандосова 127', osi: true, date: '25.06.2023', time: '15:20'},
    {name: 'Валерий Сергеевич',phone: '8 777 666 55 44', 'address': 'улица Жандосова 127', osi: true, date: '25.06.2023', time: '15:20'},
    {name: 'Валерий Сергеевич',phone: '8 777 666 55 44', 'address': 'улица Жандосова 127', osi: true, date: '25.06.2023', time: '15:20'}
]

const Table = () => {
    const [sort, setSort] = useState('new');

    return (
        <div id="table">
            <div className="container">
                <div className="content">
                    <div className="filter">
                        <div className="sort">
                            <div className={`sort-item ${sort === 'all' ? 'active': ''}`} onClick={(e)=>{e.preventDefault(); setSort('all')}}>Все заявки</div>
                            <div className={`sort-item ${sort === 'new' ? 'active': ''}`} onClick={(e)=>{e.preventDefault(); setSort('new')}}>Новые</div>
                        </div>

                        <div className="search-wrapper">
                            <div className="search">
                                <i></i>
                                <input type="text" placeholder='Поиск' />
                            </div>
                            <div className="btn">Найти</div>
                        </div>
                    </div>

                    <table>
                        <thead>
                            <tr>
                                <th>Имя</th>
                                <th>Телефон</th>
                                <th>Адрес</th>
                                <th>ОСИ/ПТ</th>
                                <th>Дата</th>
                                <th>Время</th>
                            </tr>
                        </thead>
                        <tbody>
                            {applications.map((application, key)=>(
                                <tr key={key}>
                                    <td>{application.name}</td>
                                    <td>{application.phone}</td>
                                    <td>{application.address}</td>
                                    <td className='center'>{application.osi ? 'есть' : 'нет'}</td>
                                    <td className='center'>{application.date}</td>
                                    <td className='center'>{application.time}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Table;