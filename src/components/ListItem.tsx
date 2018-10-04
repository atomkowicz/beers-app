import * as React from 'react';
// @ts-ignore
import { getBier } from '../api/api';
// import * as Modal from 'react-modal';
// import { Link } from 'react-router-dom';

class ListItem extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            errMsg: "",
            isFetched: false,
            post: {},
            showModal: false
        }
    }

    public componentDidMount() {
        const { id } = this.props.match.params;

        getBier(id).then(post => {
            this.setState({
                isFetched: true,
                post
            })
        })
    }


    public render() {

        const { isFetched, post: { id, title, body, userId } } = this.state;
        const names = ["Spryga", "Shenanigans", "Fiddledeedee", "Bovicide", "Bloviate", "CluelBean", "Leukoplakia"];
        const author = names[Math.floor(Math.random() * 8) + 1];

        return (
            <div className="Post">
                <button onClick={this.props.history.goBack}>Go back</button>
                {isFetched
                    ? <div className="Post__inner">
                        <div className="Post__id">Post Id: {id}</div>
                        <div className="Post__userid">Author Id: {userId}</div>
                        <div className="Post__author">Author name: {author}</div>
                        <div className="Post__title">{title}</div>
                        <div className="Post__body">{body}</div>
                    </div>
                    : <div>loading ...</div>
                }

            </div>


        );
    }
}

export default ListItem;
