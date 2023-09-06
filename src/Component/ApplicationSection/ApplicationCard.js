import './ApplicationCard.css';
import {NavLink} from "react-router-dom";


const ApplicationCard = ({id, title, image, description, created_at, showImg=true}) => {


    return (
        <NavLink to={'/application/' + id}>
            <div className="app-card">
                <div className='app-img-box'>
                    {showImg && <img className="w-100" src={image} alt={title}/>}
                </div>
                <h5>{(new Date(created_at)).toLocaleDateString()}</h5>
                <h4>{title .slice(0, 55)}...</h4>
                <p>{description.slice(0, 130)}...</p>
            </div>
        </NavLink>
    );
}
export default ApplicationCard