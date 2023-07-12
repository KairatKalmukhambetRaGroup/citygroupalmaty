import '@/styles/admin/login.scss';
import axios from 'axios';
import { useState } from 'react';

import { useUserContext } from '@/app/admin/page';

const initFormData = {email: '', password: '', };

const Login = () => {
    const {login} = useUserContext();
    const [formData, setFormData] = useState(initFormData);
    const [error, setError] = useState('');

    const [showModal, setShowModal] = useState(false);

    const loginApi = async () => {
        try {
            const {data, status} = await axios.put(`/api/users`, formData, {validateStatus: function (status) { return true }, headers: {"Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"}});
            console.log(status)
            if(status === 200)
                login(data);
            else if(status === 404)
                setError('Неправильно введен логин или пароль');
            else
                setError('Что-то пошло не так, попробуйте еще раз');
        } catch (error) {
            console.log(error)
            setError('Что-то пошло не так, попробуйте еще раз');
        }
    }

    const handleChange = (e) => {
        e.preventDefault();
        const value = e.currentTarget.value;
        const name = e.currentTarget.name;
        setFormData({...formData, [name]: value});
        setError('');
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        let err = null;
        if(!formData.email || !formData.password){
            err = 'Заполните объязательные поля';
        }
        if(err){
            setError(err);
        }else{
            loginApi();
        }
    }

    return (
        <div id="login">
            <ForgotPassword mail={formData.email} show={showModal} setShow={setShowModal} />
            <div className="content">
                <i className="logo"></i>
                <form onSubmit={handleSubmit}>
                    <div className="inputs">
                        <div className="form-group">
                            <label>Логин или email</label>
                            <input type="text" name="email" value={formData.email} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Пароль</label>
                            <input type="password" name="password"  value={formData.password} onChange={handleChange}/>
                            <div className="error">{error}</div>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="forgot" onClick={(e)=>{e.preventDefault(); setShowModal(true)}}>Забыли пароль?</div>
                        <input type="submit" className='btn' value="Войти" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;


const ForgotPassword = ({mail, show, setShow}) => {
    const [status, setStatus] = useState(null);
    const [email, setEmail] = useState(mail);
    const handleChange = (e) => {
        e.preventDefault();
        setEmail(e.currentTarget.value);
    }
    const send = async (e) => {
        e.preventDefault();
        setStatus('loading');
        if(email && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)){
            // const {status} = await axios.post(`/api/users/reset`, email, {validateStatus: function (status) { return true }, headers: {"Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"}});
            setStatus('success');
        }
    }
    const close = (e) => {
        setStatus(null)
        setShow(false);
    }
    if(!show)
        return ;
    return (
        <div id="forgotPassword">
            <div className="content">
                {!status && (
                    <>
                        <div className="text">
                            <div className="title">
                            Забыли пароль?
                            </div>
                            <div className="description">
                            Введите привязанную электронную почту и нажмите на кнопку “Сбросить пароль”. Мы отправим на вашу почту ссылку для сброса пароля.
                            </div>
                        </div>
                        <input type="email" name='email' placeholder='E-mail' onChange={handleChange} value={email} />
                        <div className="bottom">
                            <div className="close" onClick={close}>Закрыть</div>
                            <div className="btn" onClick={send}>Сбросить пароль</div>
                        </div>
                    </>
                )}
                {status && status==='loading' && (
                    <div className="loading">
                        <i></i>
                    </div>
                )}
                {status && status==='success' && (
                    <>
                        <div className="text">
                            <div className="description">
                            Новый пароль отправлен на почту {email}
                            </div>
                        </div>
                        <div className="bottom">
                            <div className="btn" onClick={close}>Закрыть</div>
                        </div>
                    </>
                )}
            </div>

        </div>
    );
}