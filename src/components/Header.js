import React, { Component} from 'react';
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
  DropdownItem
} from 'reactstrap';

export default class AppNavbar extends Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.toggleCreatePlayerModal = this.toggleCreatePlayerModal.bind(this);
		this.state = {
			isOpen: false,
			modal: false
		};
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
					<NavbarBrand href="/"><img src="/assets/logo.jpg" alt="logo for players directory app" className="logo" />Players Directory</NavbarBrand>
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
									<DropdownItem >
										Create Player
                  </DropdownItem>
									<DropdownItem>
										Option 2
                  </DropdownItem>
									<DropdownItem divider />
									<DropdownItem>
										Reset
                  </DropdownItem>
								</DropdownMenu>
							</UncontrolledDropdown>
						</Nav>
					</Collapse>
				
				</Navbar>
			</div>
		);
	}
}