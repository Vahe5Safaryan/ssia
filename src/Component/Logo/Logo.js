import {useNavigate} from "react-router";

const Logo = () => {
    const navigate = useNavigate()

    const onClick = (e) => {
        e.preventDefault()
        navigate('/')
    }

    return <a className='logo' onClick={onClick} href={'/'}>
        <h2>Logo</h2>
    </a>
}

export default Logo