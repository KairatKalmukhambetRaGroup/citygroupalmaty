import '@/styles/admin/table.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';

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
    const [search, setSearch] = useState('');
    const [applications, setApplications] = useState(null);

    const [selected, setSelected] = useState([]);

    const getApplications = async (search) => {
        setApplications(null);
        const {data} = await axios.get(`/api/applications?status=${sort === 'new' ? 'new' : ''}&search=${search}`, {validateStatus: function (status) { return true }, headers: {"Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"}});
        setApplications(data);
        setSelected([]);
    }
    const readApplications = async (search) => {
        setApplications(null);
        const {data} = await axios.patch(`/api/applications?status=${sort === 'new' ? 'new' : ''}&search=${search}`, selected, {validateStatus: function (status) { return true }, headers: {"Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"}});
        setApplications(data);
        setSelected([]);
    }

    useEffect(()=>{
        if(!applications)
            getApplications(search);
    }, [applications])

    useEffect(()=>{
        if(applications){
            setSearch('');
            getApplications('');
        }
    }, [sort]);

    const handleSearchInput = (e) => {
        e.preventDefault();
        setSearch(e.currentTarget.value);
    }
    const handleSearch = (e) => {
        e.preventDefault();
        getApplications(search);
    }

    const selectApplication = (id) => {
        if(selected.includes(id)){
            setSelected(selected.filter(el => el != id));
        }else{
            setSelected([...selected, id]);
        }
    }

    const selectAll = (e) => {
        e.preventDefault();
        let tmp = [];
        if (applications && applications.length > 0) {
            applications.forEach(element => {
                tmp.push(element._id);
            });
        }
        setSelected(tmp);
    }
    const clearSelected = (e) => {
        e.preventDefault();
        setSelected([]);
    }

    const readSelected = (e) => {
        e.preventDefault();
        if(selected && selected.length > 0)
            readApplications(search);
    }

    const getDate = (string) => {
        return new Date(string).toLocaleDateString('kz-ru');
    }
    const getTime = (string) => {
        return new Date(string).toLocaleTimeString('kz-ru', { hour: "2-digit", minute: "2-digit" });
    }

    return (
        <div id="table">
            <div className="container">
                <div className="content">
                    <div className="filter">
                        <div className="sort">
                            <div className={`sort-item ${sort === 'all' ? 'active': ''}`} onClick={(e)=>{e.preventDefault(); setSort('all')}}>Все заявки</div>
                            <div className={`sort-item ${sort === 'new' ? 'active': ''}`} onClick={(e)=>{e.preventDefault(); setSort('new')}}>Новые</div>
                        </div>

                        <form className="search-wrapper" onSubmit={handleSearch}>
                            <div className="search">
                                <i></i>
                                <input type="text" placeholder='Поиск' onChange={handleSearchInput} value={search} />
                            </div>
                            <input className="btn" type='submit' value="Найти" />
                        </form>
                    </div>

                    <div className="select-nav">
                        <div className="btn" onClick={selectAll}>Выделить все</div>
                        <div>Выделено: {selected.length}</div>
                        <div className="btn" onClick={readSelected}>Отметить как прочитанное</div>
                        <div className="btn" onClick={clearSelected}>Снять все выделения</div>
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
                            {applications && applications.length > 0 && applications.map((application, key)=>(
                                <tr key={key} className={selected.includes(application._id) ? 'selected' : ''} 
                                onClick={(e)=>{e.preventDefault(); selectApplication(application._id)}} >
                                    <td>{application.name}</td>
                                    <td>{application.phone}</td>
                                    <td>{application.address}</td>
                                    <td className='center'>{application.osi ? 'есть' : 'нет'}</td>
                                    <td className='center'>{getDate(application.createdAt)}</td>
                                    <td className='center'>{getTime(application.createdAt)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {applications ? 
                        applications.length === 0 && (
                            <div className="none">
                                Нет данных
                            </div>
                        ) : 
                        (
                            <div className="loading">
                                <i></i>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Table;