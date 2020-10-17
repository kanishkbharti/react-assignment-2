import React, { useEffect, useState } from 'react'
import './Business.css';
import * as api from "../../helpers/request"
import FormatQuoteRoundedIcon from '@material-ui/icons/FormatQuoteRounded';

const BusinessComponent = (props) => {

    const [review, setReview] = useState({
        name: "Kanishk",
        text: "Best Ice Cream in the world"
    })

    useEffect(() => {

        const fetchData = async () => {
            try {
                const rawData = await api.get(`/businesses/${props.id}/reviews`, { term: "", location: "" });
                const resp = await rawData.json();
                const rev = resp.reviews[0];
                console.log(rev);
                setReview({
                    name: rev.user.name ? rev.user.name : "",
                    text: rev.text ? rev.text : ""
                })

            } catch (e) {
                console.error(e);
            }
        }

        fetchData();
    }, [props.id])



    const business = props.business;
    const address = business.location.display_address.map(a => <p key={business.id + a}>{a}</p>);


    return (
        <div className="business-container card">
            <div className="content card">
                <img src={business.image_url} alt='business' className="icecream-image  card-img-top" />
                <div className="address-component card-body">
                    <h2 className="name card-title">{business.name}</h2>
                    <h4>{business.phone}</h4>
                    {address}
                </div>
            </div>
            { review.name && <div className="review-container">
                <p className="review">{review.name}</p>
                <p><FormatQuoteRoundedIcon style={{ transform: "rotateY(180deg)" }} />{review.text}<FormatQuoteRoundedIcon /></p>
            </div>}
        </div>

    )
}

export default BusinessComponent
