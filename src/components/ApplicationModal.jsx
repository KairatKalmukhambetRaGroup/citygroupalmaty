import '@/styles/applicationModal.scss';
import axios from 'axios';
import { useState } from 'react';
import StatusModal from './StatusModal';

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


const ApplicationModal = ({showModal, setShowModal}) => {
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

    const close = () =>{
        setFormData(initFormData);
        setShowModal(false);
        setStatus(null);
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

    const closeModal = (e) => {
        e.preventDefault();
        setShowModal(false);
        setErrors(initErrors)
    }

    if(!showModal)
        return ;

    return status ? (
        <StatusModal status={status} close={close} />
    ) : (
        <div id="applicationModal" >
            <div className="overlay" onClick={closeModal}></div>
            <form onSubmit={handleSubmit}>
                <div className="heading">
                    <div className="close" onClick={closeModal}>Закрыть</div>
                    <div className="title">
                    Получите консультацию от наших специалистов
                    </div>
                    <div className="subtitle">
                    Наши менеджеры свяжутся с вами в ближайшее время 
                    </div>
                </div>
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
                <input type="submit" value="Оставить заявку" className='submit'/>
            </form>
        </div>
    );
};

export default ApplicationModal;