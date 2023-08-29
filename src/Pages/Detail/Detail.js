import './BlogDetail.css';
import {useNavigate, useParams} from "react-router";
import {useEffect, useState} from "react";
import axios from "axios";
import Heading from "../../Component/Heading/Heading";
import {useTranslation} from "react-i18next";

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
            {detail.pdf && <div>
                <a href={`${process.env.REACT_APP_API_URL}/storage/${section}/files/${detail.pdf}`} target="_blank">gmbrdilos</a>
            </div>}
            {detail.word && <div>
                <a href={`${process.env.REACT_APP_API_URL}/storage/${section}/files/${detail.word}`} target="_blank">gmbrdilos</a>
            </div>}
            {detail.exc && <div>
                <a href={`${process.env.REACT_APP_API_URL}/storage/${section}/files/${detail.exc}`} target="_blank">gmbrdilos</a>
            </div>}
        </div>
    </div>
}


export default Detail