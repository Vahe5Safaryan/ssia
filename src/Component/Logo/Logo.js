import {useNavigate} from "react-router";
import './Logo.css'

const Logo = () => {
    const navigate = useNavigate()

    const onClick = (e) => {
        e.preventDefault()
        navigate('/')
    }

    return <a className='logo' onClick={onClick} href={'/'}>
        <div className='logo-box'>
            <img src="/Logo/logo1.png" alt=""/>
            <img className='rotate' src="/Logo/logo2.png" alt=""/>
        </div>
    </a>
}

export default Logo