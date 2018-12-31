import * as React from "react";
import {ItemDetails} from "./ItemDetails";
import * as API from "../utils/API";
import Loader from "./Loader";
import {IBeer} from "../utils/API";

class ItemDetailsContainer extends React.Component<any, { product?: IBeer, isFetching: boolean }> {

    constructor(props: any) {
        super(props);
        this.state = {
            isFetching: true
        }
    }

    componentDidMount() {
        const {id} = this.props.match.params;
        API.fetchProduct(id)
            .then((product: IBeer) => {
                this.setState({
                    product: product[0],
                    isFetching: false
                });
            }).catch(e => console.log(e))
    }

    render() {
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

