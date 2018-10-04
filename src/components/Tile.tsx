import * as React from 'react';
import {Link} from 'react-router-dom';
// import { ITileProps } from './interfaces';


const Tile = (props: any) => {
    const {post} = props;

    return (
        <div className="Tile">
            {post && <div className="Tile__inner">
                <div className="Tile__body">
                    <img className="Tile__image" src={post.image_url} alt="product"/>
                </div>
                <Link to={{pathname: `/details/${post.id}`, state: {post}}}>
                    <div className="Tile__title">{post.name}</div>
                </Link>
                <div className="Tile__subtitle">{post.tagline}</div>
            </div>}
        </div>
    )
};

export default Tile;
