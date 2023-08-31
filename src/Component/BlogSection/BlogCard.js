import './BlogCart.css'
import {NavLink} from "react-router-dom";


const BlogCard = ({title, image, description, created_at, id, showImg=true}) => {

    return (
        <NavLink to={'/blog/' + id}>
            <div className="blog-card">
                {showImg && <img className="w-100" src={image} alt={title}/>}
                <h5>{(new Date(created_at)).toLocaleDateString()}</h5>
                <h4>{title}</h4>
                <p>{description.slice(0, 130)}...</p>
            </div>
        </NavLink>
    );
}
export default BlogCard