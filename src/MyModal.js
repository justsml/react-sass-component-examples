/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class MyModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      nestedModal: false,
      closeAll: false
    };
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  toggleNested = () => {
    this.setState({
      nestedModal: !this.state.nestedModal,
      closeAll: false
    });
  };

  toggleAll = () => {
    this.setState({
      nestedModal: !this.state.nestedModal,
      closeAll: true
    });
  };

  render() {
    return (
      <div className={this.props.className}>
        <Button color={this.props.buttonColor || "danger"} onClick={this.toggle}>
          {this.props.buttonLabel}
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            {this.props.children || `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.`}
            <br />
            <Button color="success" onClick={this.toggleNested}>
              Show Nested Modal
            </Button>
            <Modal
              isOpen={this.state.nestedModal}
              toggle={this.toggleNested}
              onClosed={this.state.closeAll ? this.toggle : undefined}
            >
              <ModalHeader>Nested Modal title</ModalHeader>
              <ModalBody>Stuff and things</ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={this.toggleNested}>
                  Done
                </Button>{" "}
                <Button color="secondary" onClick={this.toggleAll}>
                  All Done
                </Button>
              </ModalFooter>
            </Modal>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>
              Do Something
            </Button>{" "}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default MyModal;
