import * as React from 'react';
import * as Modal from "react-modal";
import '../assests/scss/index.css';
import * as API from '../utils/API';
import ListItem from './ListItem';


class List extends React.Component<{}, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            product: "",
            query: "",
            showModal: false,
            visibleProducts: []
        }

        this.openModal = this.openModal.bind(this, this.state.product);
        this.closeModal = this.closeModal.bind(this);
    }

    public closeModal() {
        this.setState({showModal: false});
    }

    public openModal(product: any) {

        this.setState({
            product,
            showModal: true,
        });
    }

    public componentDidMount() {
        API.fetchProducts()
            .then((products: any) => {
                this.setState({visibleProducts: products});
            })
    }


    public render() {
        const {visibleProducts} = this.state;

        const tiles = visibleProducts.map((product: any) =>
            <div key={product.id} onClick={this.openModal.bind(this, product)}>
                <ListItem
                    key={product.id}
                    product={product}
                    handleOpenModal={this.openModal}/>
            </div>);

        return (
            <>
                <div className="TileList">
                    {tiles.length > 0
                        ? <div className="Tile__container">{tiles}</div>
                        : <div> loading ...</div>}

                </div>
                <Modal
                    isOpen={this.state.showModal}
                    onRequestClose={this.closeModal}
                    contentLabel="Product">
                    <div onClick={this.closeModal}>close</div>
                    <div>{this.state.product}</div>
                </Modal>
            </>
        );
    }
}

export default List;
