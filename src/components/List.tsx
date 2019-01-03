import * as React from 'react';
import * as InfiniteScroll from 'react-infinite-scroller';
import * as Modal from "react-modal";
import '../assests/css/modal.css';
import '../assests/css/tileList.css';
import * as API from '../utils/API';
import { IBeer } from '../utils/API';
import {BEERS_PER_PAGE} from "../utils/Consts";
import {modalStyle} from '../utils/Styles';
import {ItemDetails} from "./ItemDetails";
import {ListItem} from './ListItem';
import Loader from "./Loader";

interface IListState {
    query: string,
    showModal: boolean,
    visibleProducts: IBeer[],
    currentPage: number,
    hasMore: boolean,
    modalProduct?: IBeer
}

class List extends React.Component<{}, IListState> {

    constructor(props: any) {
        super(props);
        this.state = {
            currentPage: 1,
            hasMore: true,
            query: "",
            showModal: false,
            visibleProducts: []
        };
    }

    public render() {
        const {visibleProducts, hasMore, modalProduct} = this.state;

        const tiles = visibleProducts.map((product: IBeer) =>
            <ListItem
                key={product.id}
                onClick={this.openModal.bind(this, product.id)}
                product={product}
                additionalStyle={"big"}
            />
        );

        return (
            <>
                <div className="TileList">
                    <div className="Tile__container">
                        <InfiniteScroll
                            pageStart={0}
                            loadMore={this.loadMoreItems}
                            hasMore={hasMore}
                            loader={<Loader key={0}/>}>
                            {tiles}
                        </InfiniteScroll>
                    </div>
                    {!hasMore && <div className="text-center">You've reached end of the list...</div>}
                </div>

                {modalProduct && <Modal
                    ariaHideApp={false}
                    isOpen={this.state.showModal}
                    onRequestClose={this.closeModal}
                    style={modalStyle}
                    contentLabel="Product">
                    <div className="btn-close" onClick={this.closeModal}>x</div>
                    <ItemDetails product={modalProduct}/>
                </Modal>}
            </>
        );
    }

    private loadMoreItems = () => {
        const {currentPage} = this.state;

        API.fetchProducts(currentPage)
            .then((products: any) => {
                this.setState((prevState: any) => ({
                    currentPage: prevState.currentPage + 1,
                    hasMore: products.length === BEERS_PER_PAGE,
                    visibleProducts: [...prevState.visibleProducts, ...products]
                }));
            }).catch(e => alert(e))
    };
    
    private closeModal = () => {
        this.setState({showModal: false});
    };

    private openModal = (productId: number) => {
        this.setState({
            modalProduct: this.state.visibleProducts.find((product) =>
                product.id === productId),
            showModal: true,
        });
    };
}

export default List;
