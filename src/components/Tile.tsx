import * as React from 'react';
import { Link } from 'react-router-dom';
// import { ITileProps } from './interfaces';

const Tile = (props:any) => {
    const { post } = props;

    return (
        <div className="Tile">
            {post && <div className="Tile__inner">
                <Link to={{ pathname: `/posts/${post.id}`, state: { post } }}>
                    <div className="Tile__title">{post.title}</div>
                </Link>
                <div className="Tile__body">{post.body}</div>
            </div>}
        </div>
    )
};

export default Tile;
