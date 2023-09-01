import FacebookLogin from 'react-facebook-login';
import axios from "../../helpers/axios";
import useAuth from "../../hooks/useAuth";

const FacebookLoginButton = () => {

    const {loginImmediately} = useAuth()
    const responseFacebook = (response) => {
        const {name, email, userID, accessToken} = response

        axios.post('/api/fb-login', {
            name,
            email,
            user_id: userID,
            access_token: accessToken
        }).then((response) => {
            loginImmediately(response.data.token, response.data.user)
        }).catch((e) => {
            console.log(e)
        })
    };

    return (
        <div>
            <FacebookLogin
                appId="1346643176202435"
                autoLoad={false} // Если true, то произойдет автоматическая попытка входа при загрузке компонента
                fields="name,email,picture" // Запрашиваемые поля пользователя
                callback={responseFacebook} // Функция для обработки ответа от Facebook
            />
        </div>
    );
};

export default FacebookLoginButton;