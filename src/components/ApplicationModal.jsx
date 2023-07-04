import '@/styles/applicationModal.scss';
import { useState } from 'react';

const initFormData = {
    name: '',
    phone: '',
    address: '',
    osi: false
}

const ApplicationModal = ({showModal, setShowModal}) => {
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

    const closeModal = (e) => {
        e.preventDefault();
        setShowModal(false);
    }

    return showModal && (
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
                <input type="submit" value="Оставить заявку" className='submit'/>
            </form>
        </div>
    );
};

export default ApplicationModal;