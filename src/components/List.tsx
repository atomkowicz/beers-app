import * as React from 'react';
// import {Link} from 'react-router-dom';
import {getPosts} from '../api/api';
import '../assests/scss/index.css';
import Tile from './Tile';

class List extends React.Component<{}, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            query: "",
            visiblePosts: [],
        }
    }

    public componentDidMount() {
        getPosts()
            .then((posts: any) => {
                this.setState({visiblePosts: posts});
            })
    }


    public render() {
        const {visiblePosts} = this.state;


        const tiles = visiblePosts
            .map((post: any) => <Tile key={post.id} post={post}/>);

        return (
            <div className="TileList">
                {tiles.length > 0
                    ? <div className="Tile__container">{tiles}</div>
                    : <div> loading ...</div>}

            </div>
        );
    }
}

export default List;
