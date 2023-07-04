import '@/styles/application.scss';
import { useState } from 'react';

const initFormData = {
    name: '',
    phone: '',
    address: '',
    osi: false
}

const Application = () => {
    const [formData, setFormData] = useState(initFormData);

    const handleChange = (e) => {
        const {name, value} = e.currentTarget;
        if(name === 'osi')
            setFormData({...formData, [name]: !formData.osi});
        else
            setFormData({...formData, [name]: value});   

    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div id="application">
            <div className="left">
                <div className="heading">
                    <div className="title">
                    Не нашли подходящий тариф?
                    </div>
                    <div className="subtitle">
                    Получите расчет индивидуального тарифа на содержание вашего жилого помещения 
                    </div>
                    <div className="mobilesub">
                    Наши менеджеры свяжутся с вами в ближайшее время 
                    </div>
                </div>
                <div className="text">
                Нажимая на кнопку “Заказать расчет цены” вы подтверждаете, что ознакомились с Политикой конфиденциальности и Пользовательским соглашением и согласны на обработку персональных данных 
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="inputs">
                    <div className="form-group">
                        <i className='name'></i> 
                        <input type="text" placeholder='Имя' name='name' value={formData.name} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <i className='phone'></i> 
                        <input type="text" placeholder='Номер телефона' name='phone' value={formData.phone} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <i className='address'></i> 
                        <input type="text" placeholder='Адрес' name='address' value={formData.address} onChange={handleChange} />
                    </div>
                    <label className={`check-form ${formData.osi ? 'active' : ''}`}>
                        <input type="checkbox" name="osi" checked={formData.osi} onChange={handleChange} />
                        <i></i>
                        ОСИ/ПТ создан
                    </label>
                </div>
                <input type="submit" value="Заказать расчет цены" className='submit'/>
            </form>
        </div>
    );
};

export default Application;