import './BlogDetail.css';
import {useNavigate, useParams} from "react-router";
import {useEffect, useState} from "react";
import axios from "axios";
import Heading from "../../Component/Heading/Heading";
import {useTranslation} from "react-i18next";
import {GrDocumentExcel, GrDocumentPdf, GrDocumentWord} from "react-icons/gr";

const Detail = ({section}) => {
    const {id} = useParams();
    const [detail, setDetail] = useState({})
    const navigate = useNavigate()
    const {t, i18n} = useTranslation()
    useEffect(() => {
        axios.get(process.env.REACT_APP_API_URL + '/api/' + section + '/' + id)
            .then((res) => {
                setDetail(res.data);
            })
            .catch(error => {
                if (error.response.status === 404) {
                    navigate('/not_found')
                }
                console.error("Error fetching data:", error);
            });
    }, [id, section]);
    return <div className='mt-50'>

        <div className="container">
            <div className="d-flex justify-center direction-column detail-section">
                <img src={`${process.env.REACT_APP_API_URL}/storage/${section}/${detail.img}`} alt=""/>
                <Heading classNames={['text-left', 'p-y-10']} type={'h3'}>
                    {detail['title_' + i18n.language]}
                </Heading>
                <p>
                    {detail['description_' + i18n.language]}
                </p>
            </div>

            {detail.pdf && <div className='file pdf'>
                <a href={`${process.env.REACT_APP_API_URL}/storage/${section}/files/${detail.pdf}`} target="_blank"
                   rel="noreferrer"> <GrDocumentPdf/> Pdf</a>
            </div>}
            {detail.word  && <div className='file word'>
                <a href={`${process.env.REACT_APP_API_URL}/storage/${section}/files/${detail.word}`} target="_blank"
                   rel="noreferrer"> <GrDocumentWord/> Word</a>
            </div>}
            {detail.exc  && <div className='file excel'>
                <a href={`${process.env.REACT_APP_API_URL}/storage/${section}/files/${detail.exc}`} target="_blank"
                   rel="noreferrer"> <GrDocumentExcel/> Excel</a>
            </div>}
        </div>
    </div>
}


export default Detail