import React, { Component } from 'react';
import { getPlayerByID } from '../service';
import Player from './Player';
import {
    Container,
	Modal, 
	ModalHeader, 
	ModalBody
} from 'reactstrap';
import UpdatePlayerForm from './UpdatePlayer';

export default class ViewPlayer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            player: {},
            modal: false
        }
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        this.setState({ modal: !this.state.modal })
    }

    componentDidMount() {
        getPlayerByID(this.props.match.params.id).then(res => {
            this.setState({
                player: res.data
            });
            console.log(this.state.player);
            console.log('componentDidMount id = ' + this.props.match.params.id);
        })
    }

    render() {
        return (
            <Container fluid>
                <Player modal={this.toggleModal} view player={this.state.player} />
                <Modal isOpen={this.state.modal} toggle={this.toggleModal}>
                    <ModalHeader >Edit Player</ModalHeader>
                    <ModalBody>
                        <UpdatePlayerForm player={this.state.player}/>
                    </ModalBody>
                </Modal>
            </Container>
        )
    }
}