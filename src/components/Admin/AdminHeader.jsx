import { UserContext } from '@/app/admin/page';
import '@/styles/admin/header.scss';


const AdminHeader = () => {
    return (
        <header>
            <div className="container">
                <div className="content">
                    <a href='/' className="logo">
                        City Group Almaty 
                    </a>
                    <div className="navbar">
                        <UserContext.Consumer>
                            {value => {
                                return value.user && value.user.email && (
                                    <>
                                        <div className="user">
                                            {value.user.email}
                                        </div>
                                        <div className="btn" onClick={(e)=>{e.preventDefault(); value.logout()}}>
                                            Выход
                                        </div>
                                    </>
                                )
                            }}  
                        </UserContext.Consumer>
                    </div>
                    <i className="menu" onClick={(e)=>{e.preventDefault(); setShowMenu(true)}} ></i>
                </div>
            </div>
        </header>
    );
};

export default AdminHeader;