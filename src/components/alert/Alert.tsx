import React from 'react'
import { useSelector } from 'react-redux';
import { RootStore } from '../../utils/TypeScript';
import Loading from './Loading';
import Toast from './Toast';

const Alert =() =>{

    const {alert} = useSelector((state:RootStore)=>state)

    return (
        <div className="alert">
            {
                alert.loading && <Loading />
            }
            {
                alert.errors && <Toast type="error" body={alert.errors} />
            }
            {
                alert.success && <Toast type="success" body={alert.success} />
            }
        </div>
    )
}

export default Alert;
