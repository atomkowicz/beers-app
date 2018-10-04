import * as React from 'react';
import * as Modal from 'react-modal';

Modal.setAppElement('#root');

class ListItem extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
    }


    public render() {

        return (
            <div className="Tile" onClick={this.props.handleOpenModal.bind(this, this.props.product)}>
                {this.props.product && <div className="Tile__inner">
                    <div className="Tile__body">
                        <img className="Tile__image" src={this.props.product.image_url} alt="product"/>
                    </div>
                    <div className="Tile__title">{this.props.product.name}</div>
                    <div className="Tile__subtitle">{this.props.product.tagline}</div>
                </div>}
            </div>
        )
    }
}

export default ListItem;
