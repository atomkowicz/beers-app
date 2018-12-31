import * as React from 'react';
import '../assests/scss/index.css';
import * as API from "../utils/API";
import {ListItem} from './ListItem';
import Loader from "./Loader";
import {Link} from "react-router-dom";
import {IBeer} from "../utils/API";

interface ISimilarItemsState {isFetching: boolean; products: IBeer[]}

class SimilarItems extends React.Component<any, ISimilarItemsState> {

    constructor(props: any) {
        super(props);
        this.state = {
            isFetching: true,
            products: []
        };
    }

    public async componentDidMount() {
        try {
            const similar = await API.fetchSimilarProducts(this.props.product);
            this.setState({isFetching: false, products: similar})
        } catch (e) { console.log(e) }
    }

    public render() {
        const {products} = this.state;

        const tiles = products.map((product: IBeer) =>
            <Link
                key={product.id}
                to={`/details/${product.id}`}
                className="Product__link">
                <ListItem
                    product={product}
                    additionalStyle={"small"}
                />
            </Link>
        );

        return (
            <>
                {products.length > 0 && <div className="Product__similar">You may also like:</div>}
                {products.length > 0 && <div className="TileList small">
                    <div className="flex">{tiles}</div>
                </div>}
                {this.state.isFetching && <Loader/>}

            </>
        );
    }
}

export default SimilarItems;
