import Heading from "../../Component/Heading/Heading";
import React  from "react";
import {useTranslation} from "react-i18next";


const GalleryCard = (post) => {
    const { i18n } = useTranslation()
    const title = 'title_' + i18n.language
    return (
        <div className="galley-card">
            <div
                title={post.created_at}
            >
                <img
                    src={`${process.env.REACT_APP_API_URL}/storage/gallery/${post.img}`}
                    alt=""
                    className='w-100'
                />
                <div

                    className={[
                        'vaspur'
                    ]}
                >
                    <p>{post[title]}</p>

                </div>
            </div>

        </div>
    );
}
export default GalleryCard