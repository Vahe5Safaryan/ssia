import React  from "react";
import {useTranslation} from "react-i18next";


const GalleryCard = (props) => {
    const { i18n } = useTranslation();
    const title = 'title_' + i18n.language;

    return (
        <div className="gallery-card">
            <div title={props.created_at}>
                <img
                    src={`${process.env.REACT_APP_API_URL}/storage/gallery/${props.img}`}
                    alt=""
                    className='w-100'
                    {...props.openModal ? {onClick: () => props.openModal(props)} : {}}
                />
                <div className={''}>
                    <h5>{props[title]}</h5>
                </div>
            </div>
        </div>
    );
};

export default GalleryCard;







// const GalleryCard = (post) => {
//     const { i18n } = useTranslation()
//     const title = 'title_' + i18n.language
//
//     return (
//         <div className="galley-card">
//             <div
//                 title={post.created_at}
//             >
//                 <img
//                     src={`${process.env.REACT_APP_API_URL}/storage/gallery/${post.img}`}
//                     alt=""
//                     className='w-100'
//                 />
//                 <div className={''}>
//                     <h5>{post[title]}</h5>
//                 </div>
//             </div>
//         </div>
//     );
// }
