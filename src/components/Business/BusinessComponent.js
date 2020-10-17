import React, { useEffect, useState } from 'react'
import './Business.css';
import * as api from "../../request"

const BusinessComponent = (props) => {

    const [review, setReview] = useState({
        name: "",
        text: ""
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
            <div className="content">
                <img src={business.image_url} alt='business' className="icecream-image" />
                <h2 className="name">{business.name}</h2>
                <div className="address-component">
                    <h4>{business.phone}</h4>
                    {address}
                </div>
            </div>

            <div className="review-container">
                <p>{review.name}</p>
                <p>{review.text}</p>
            </div>
        </div>
    )
}

export default BusinessComponent
