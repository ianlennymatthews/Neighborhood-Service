import React from 'react';
import Dialog from 'react-dialog';

class Dialogue extends React.Component {
    constructor() {
        super();
        this.state = {
            isDialogOpen: false
        }
    }
 
    openDialog = () => this.setState({ isDialogOpen: true })
 
    handleClose = () => this.setState({ isDialogOpen: false })
 
    render() {
        return (
            <div className="dialogueContainer">
                <button className="questionMarkButton" type="button" onClick={this.openDialog}>?</button>
                {
                    this.state.isDialogOpen &&
                    <Dialog
                        modal={true}
                        height="150"
                        width="450"
                        hasCloseIcon={false}
                        onClose={this.handleClose}
                        buttons={
                            [{
                                text: "X",
                                onClick: () => this.handleClose()
                            }]
                        }>
                        <p className="dialogueMessageLine">{this.props.messageLine1}</p>
                        <p className="dialogueMessageLine">{this.props.messageLine2}</p>
                        <p className="dialogueMessageLine">{this.props.messageLine3}</p>
                        <a className="dialogueLink" href={this.props.link}>Learn More</a>
                        <p></p>
                    </Dialog>
                }
            </div>
        );
    }
}

module.exports = Dialogue;