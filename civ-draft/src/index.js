import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const CIVS = ['Aztecs', 'Berbers', 'Britons', 'Bulgarians', 'Burmese', 'Byzayntines', 'Celts', 
        'Chinese', 'Cumans', 'Ethiopians', 'Franks', 'Goths',' Huns', 'Incas', 
        'Indians', 'Italians', 'Japanese', 'Khmer', 'Koreans', 'Lithuanians', 'Magyars', 
        'Malay', 'Malians', 'Mayans', 'Mongols', 'Persians', 'Portuguese', 'Saracens', 
        'Slavs', 'Spanish', 'Tatars', 'Teutons', 'Turks', 'Vietnamese', 'Vikings']; 

function CivBoardButton(props) {
    let buttonState = props.value ? "on-button" : "off-button";
    return (
        <button className={buttonState} onClick={props.onClick}>
            {props.name}
        </button>
    )
}

class CivBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            civButtons: Array(CIVS.length).fill(false),
            labels: CIVS, 
            draftList: null,
        };
    }

    handleClick(i) {
        const civButtons = this.state.civButtons.slice();
        civButtons[i] = this.state.civButtons[i] ? false : true;
        this.setState({
            civButtons: civButtons,
        });
    }

    renderCivBoardButton(i) {  
        return (
            <CivBoardButton
            value={this.state.civButtons[i]}
            name={this.state.labels[i]}  
            onClick = {() => this.handleClick(i)}
            />
        );
    }
    render() {
        return (
            <div className="board">
                <div className="civ-board">
                    {/* Civalization Board */}
                    <b> AOE2 CIVS</b>
                    <div className="civ-board-row">
                        {this.renderCivBoardButton(0)}
                        {this.renderCivBoardButton(1)}
                        {this.renderCivBoardButton(2)}
                        {this.renderCivBoardButton(3)}
                        {this.renderCivBoardButton(4)}
                        {this.renderCivBoardButton(5)}
                        {this.renderCivBoardButton(6)}
                    </div>
                    <div className="civ-board-row">
                        {this.renderCivBoardButton(7)}
                        {this.renderCivBoardButton(8)}
                        {this.renderCivBoardButton(9)}
                        {this.renderCivBoardButton(10)}
                        {this.renderCivBoardButton(11)}
                        {this.renderCivBoardButton(12)}
                        {this.renderCivBoardButton(13)}
                    </div>
                    <div className="civ-board-row">
                        {this.renderCivBoardButton(14)}
                        {this.renderCivBoardButton(15)}
                        {this.renderCivBoardButton(16)}
                        {this.renderCivBoardButton(17)}
                        {this.renderCivBoardButton(18)}
                        {this.renderCivBoardButton(19)}
                        {this.renderCivBoardButton(20)}
                    </div>
                    <div className="civ-board-row">
                        {this.renderCivBoardButton(21)}
                        {this.renderCivBoardButton(22)}
                        {this.renderCivBoardButton(23)}
                        {this.renderCivBoardButton(24)}
                        {this.renderCivBoardButton(25)}
                        {this.renderCivBoardButton(26)}
                        {this.renderCivBoardButton(27)}
                    </div>
                    <div className="civ-board-row">
                        {this.renderCivBoardButton(28)}
                        {this.renderCivBoardButton(29)}
                        {this.renderCivBoardButton(30)}
                        {this.renderCivBoardButton(31)}
                        {this.renderCivBoardButton(32)}
                        {this.renderCivBoardButton(33)}
                        {this.renderCivBoardButton(34)}
                    </div>
                </div>
                
                {/* Draft Board */}
                <div className="draft-board">
                    <b> Draft Board</b> 
                </div>

            </div>
        );
    }
}

// class DraftBoard extends React.Component { 

//     render() {
//         return (
//             <div className="draft-board">
//                 <b> Draft Board</b>
//             </div>
//         )
//     }
// }

ReactDOM.render(<CivBoard />, document.getElementById('root'));