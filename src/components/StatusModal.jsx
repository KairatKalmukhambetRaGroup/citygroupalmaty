import '@/styles/statusModal.scss';
import { useEffect } from 'react';

const StatusModal = ({status, close}) => {

    useEffect(()=>{
        if(status){
            document.querySelector('body').style.overflow = 'hidden';
        }else{
            document.querySelector('body').style.overflow = 'auto';
            document.querySelector('body').style.overflowX = 'hidden';
        }
    }, [status]);

    const closeBtn = (e) => {
        e.preventDefault();
        close();
    }

    return status && (
        <div id="statusModal" >
            <div className={`content ${status}`}>
                {status === 'loading' && (
                    <i></i>
                )}
                {status === 'success' && (
                    <>
                        <div className="close" onClick={closeBtn}>Закрыть</div>
                        <div className="body">
                            <i></i>
                            <div className="text">
                                <div className="title">
                                Заявка успешно отправлена!
                                </div>
                                <div className="subtitle">
                                Наши менеджеры свяжутся с Вами в ближайшее время
                                </div>
                            </div>
                        </div>
                        <div className="btn" onClick={closeBtn}>
                            Продолжить
                        </div>
                    </>
                )}
                {status === 'fail' && (
                    <>
                        <div className="close" onClick={closeBtn}>Закрыть</div>
                        <div className="body">
                            <i></i>
                            <div className="text">
                                <div className="title">
                                Ошибка
                                </div>
                                <div className="subtitle">
                                Попробуйте обновить страницу сейчас или позднее
                                </div>
                            </div>
                        </div>
                        <div className="btn" onClick={closeBtn}>
                            Обновить
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default StatusModal;