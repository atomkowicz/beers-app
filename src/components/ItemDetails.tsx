import * as React from 'react';
import SimilarItems from "./SimilarItems";
import '../assests/css/product.css';
import {Link} from "react-router-dom";
import { IBeer } from '../utils/API';

export const ItemDetails = (props: { product: IBeer }) => {
        const {
            product: {id, name, tagline, image_url, abv, ibu, ebc, description, brewers_tips}
        } = props;

         return (
            <div className="Product" >
                <div className="Product__inner">
                    <img className="Product__image" src={image_url} alt="product"/>
                    <div className="Product__body">
                        <h1 className="Product__name">{name}</h1>

                        <h2 className="Product__tagline">{tagline}</h2>
                        <div className="Product__properties">
                            <div className="Product__abv">
                                <span>IBU:</span> {abv}
                            </div>
                            <div className="Product__ibu">
                                <span>ABV:</span> {ibu} %
                            </div>
                            <div className="Product__ebc">
                                <span>EBC:</span> {ebc}
                            </div>
                        </div>
                        <p className="Product__desc">{description}</p>
                        <p className="Product__brewer_tips">{brewers_tips}</p>
                        <Link to={`/details/${id}`}>see more...</Link>
                    </div>
                </div>

                <SimilarItems product = {props.product}/>

         </div> )
}