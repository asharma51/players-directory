import React, { Component } from 'react';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	Modal, 
	ModalHeader, 
	ModalBody
} from 'reactstrap';
import CreatePlayerForm from './CreatePlayer';
import '../style/Stylesheet.css';

export default class AppNavbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false,
			modal: false
		};
		this.toggle = this.toggle.bind(this);
		this.toggleCreatePlayerModal = this.toggleCreatePlayerModal.bind(this);
	}

	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	toggleCreatePlayerModal() {
		this.setState({ modal: !this.state.modal })
	}

	render() {
		return (
			<div>
				<Navbar color="dark" fixed="top" dark expand="md">
					<NavbarBrand className="header-brand" href="/"><b>Players Directory</b></NavbarBrand>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-auto" navbar>
							<NavItem>
								<NavLink href="/">Home</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="/players">Players</NavLink>
							</NavItem>
							<UncontrolledDropdown nav inNavbar>
								<DropdownToggle nav caret>
									Options
                				</DropdownToggle>
								<DropdownMenu right>
									<DropdownItem onClick={this.toggleCreatePlayerModal}>
										Create New Player
                  					</DropdownItem>
								</DropdownMenu>
							</UncontrolledDropdown>
						</Nav>
					</Collapse>
					<Modal isOpen={this.state.modal} toggle={this.toggleCreatePlayerModal}>
						<ModalHeader >Create New Player</ModalHeader>
						<ModalBody>
							 <CreatePlayerForm/>
        				</ModalBody>
					</Modal>
				</Navbar>
			</div>
		);
	}
}