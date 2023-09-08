import './PartnerSection.css';
import {useDispatch, useSelector} from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useEffect} from "react";
import axios from "../../helpers/axios";
import {setPartnerItems} from "../../slices/partnerSlice";

const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
};
const responsiveSettings = [
    {
        breakpoint: 768,
        settings: {
            slidesToShow: 2,
        },
    },
];

const PartnerSection = () => {
    const {data} = useSelector(state => state.partner);
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get('/api/partners', {
            params: {
                limit: 999
            }
        }).then((res) => {
            dispatch(setPartnerItems(res.data.data));
        }).catch(error => {
            console.error("Error fetching data:", error);
        });
    }, [dispatch]);


    return (
        <div className='container'>
            <div className='partner-section'>
                <Slider {...sliderSettings} responsive={responsiveSettings}>
                    {data.map((item) => (
                        <div className='partner-box' key={item.id}>
                            <img src={process.env.REACT_APP_API_URL + '/storage/partners/' + item.img}
                                 alt="partnerImg"/>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default PartnerSection




