import '@/styles/application.scss';
import { useState } from 'react';
import StatusModal from './StatusModal';
import axios from 'axios';

const initFormData = {
    name: '',
    phone: '',
    address: '',
    osi: false
}
const initErrors = {
    name: '',
    phone: '',
    address: '',
}


const Application = () => {
    const [formData, setFormData] = useState(initFormData);
    const [errors, setErrors] = useState(initErrors);
    const [status, setStatus] = useState(null);

    const handleChange = (e) => {
        const {name, value} = e.currentTarget;
        setErrors({...errors, [name]: ''});
        if(name === 'osi')
            setFormData({...formData, [name]: !formData.osi});
        else
            setFormData({...formData, [name]: value});   

    }

    const sendApplication = async (formData) => {
        const {status} = await axios.post('/api/applications', formData, {validateStatus: function (status) { return true }, headers: {"Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"}});
        if(status >= 200 && status < 300)
            setStatus('success');
        else
            setStatus('fail');
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        let errs = {};
        let errCnt = 0;

        if(!formData.name){
            errs.name = 'Заполните обязательное поле';
            errCnt++;
        }
        if(!formData.address){
            errs.address = 'Заполните обязательное поле';
            errCnt++;
        }
        if(!formData.phone){
            errs.phone = 'Заполните обязательное поле';
            errCnt++;
        }

        if(errCnt > 0){
            setErrors(errs);
        }else{
            setStatus('loading');
            await sendApplication(formData);
        }

    }

    const close = () =>{
        setStatus(null);
        setFormData(initFormData);
    }

    return (
        <div id="application">
            <StatusModal status={status} close={close} />
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
                        <input type="text" placeholder='Имя' name='name' value={formData.name} onChange={handleChange} className={errors.name ? 'err' : ''} />
                        {errors.name && (
                            <div className="error">
                                {errors.name}
                            </div>
                        )}
                    </div>
                    <div className="form-group">
                        <i className='phone'></i> 
                        <input type="text" placeholder='Номер телефона' name='phone' value={formData.phone} onChange={handleChange}  className={errors.phone ? 'err' : ''} />
                        {errors.phone && (
                            <div className="error">
                                {errors.phone}
                            </div>
                        )}
                    </div>
                    <div className="form-group">
                        <i className='address'></i> 
                        <input type="text" placeholder='Адрес' name='address' value={formData.address} onChange={handleChange}  className={errors.address ? 'err' : ''} />
                        {errors.address && (
                            <div className="error">
                                {errors.address}
                            </div>
                        )}
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