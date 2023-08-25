import './BlogCart.css'


const BlogCard = ({ title, image, description, created_at, showImg=true}) => {
    return (
        <div className="blog-card">
            {showImg && <img className="w-100" src={image} alt={title}/>}
            <h5>{(new Date(created_at)).toLocaleDateString()}</h5>
            <h4>{title}</h4>
            <p>{description.slice(0, 130)}...</p>
        </div>
    );
}
export default BlogCard