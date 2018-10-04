import * as React from 'react';
import * as Modal from 'react-modal';
import {Link} from "react-router-dom";
// @ts-ignore
import * as API from '../utils/API';

class ProductDetails extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            errMsg: "",
            isFetched: false,
            product: {},
            showModal: false
        }
    }

    public componentDidMount() {
        const {id} = this.props.match.params;

        API.fetchProduct(id).then(post => {
            this.setState({
                isFetched: true,
                post
            })
        })
    }

    public closeModal() {
        this.setState({ showModal: false });
    }


    public render() {

        const {isFetched, post: {id, title, body, userId}} = this.state;
        const names = ["Spryga", "Shenanigans", "Fiddledeedee", "Bovicide", "Bloviate", "CluelBean", "Leukoplakia"];
        const author = names[Math.floor(Math.random() * 8) + 1];

        return (
            <>
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
                <Modal
                    isOpen={this.state.showModal}
                    onRequestClose={this.closeModal}
                    contentLabel="Error Modal">
                    <h2>Error</h2>
                    <div>Something's wrong...{this.state.errMsg}</div>
                    <Link to={"/"}>
                        <button>close</button>
                    </Link>
                </Modal>
            </>
        );
    }
}

export default ProductDetails;
