import * as React from 'react';
import '../assests/css/listItem.css';
import { IBeer } from '../utils/API';

export const ListItem = (props: { product: IBeer; onClick?: () => void; additionalStyle?: string }) =>
            <div className={`Tile ${props.additionalStyle}`} onClick={props.onClick}>
                {props.product && <div className={`Tile__inner ${props.additionalStyle}`}>
                    <div className="Tile__body">
                        <img className={`Tile__image ${props.additionalStyle}`} src={props.product.image_url} alt="product"/>
                    </div>
                    <div className="Tile__title">{props.product.name}</div>
                    <div className="Tile__subtitle">{props.product.tagline}</div>
                </div>}
            </div>

