import * as React from "react";
import * as API from "../utils/API";
import {IBeer} from "../utils/API";
import {ItemDetails} from "./ItemDetails";
import Loader from "./Loader";

class ItemDetailsContainer extends React.Component<any, { product?: IBeer, isFetching: boolean }> {

    constructor(props: any) {
        super(props);
        this.state = {
            isFetching: true
        }
    }

    public componentDidMount() {
        const {id} = this.props.match.params;
        API.fetchProduct(id)
            .then((product: IBeer) => {
                this.setState({
                    isFetching: false,
                    product: product[0],
                });
            }).catch(e => e)
    }

    public render() {
        const {product, isFetching} = this.state;

        return (
            <div>
                {isFetching && <Loader/>}
                {product && <ItemDetails product={product}/>}
            </div>
        );
    }

}

export default ItemDetailsContainer;

