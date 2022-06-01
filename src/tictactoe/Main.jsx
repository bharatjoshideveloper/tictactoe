import React, { Component } from 'react'
import Base from './Base';

export class Main extends Component {
    constructor(props) {
        super(props)

        this.state = {
            box: '',
            val: '',
            message: '',
            player: '',
            number: '',
            mode: 'base'

        }
    }


    handleClick = (i) => {
        let box = this.state.box;
        this.setState({ message: '' })
        box[i] = this.state.val;
        // alert(box[i]);
        this.setState({ val: this.state.val === 'O' ? 'X' : 'O' })

    }
    restart = () => {
        this.setState({ box: '', message: '' });
    }
    start = () => {
        this.setState({ box: ['', '', '', '', '', '', '', '', ''], message: 'Lets Start' });
    }
    data = (data) => {
        this.setState({ player: data.name, val: data.val, mode: 'start', number: data.number })
    }

    createBoardDivs() {
        debugger
        let noofcol = this.state.number;
        let noofrow = this.state.number;
        this.boardItems = [];
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                let key = i.toString() + j.toString();
                this.boardItems.push(<div>{key}</div>);
                // <div xaxis={i} yaxis={j} key={i.toString() + j.toString()}>{key}</div>
            }
        }
        return this.boardItems;
    }
    render() {
        return (
            <React.Fragment>
                {this.state.mode === 'base' && <Base data={this.data} />}
                {this.state.mode === 'start' && <div className='container d-flex justify-content-center'>
                    <div className='row mt-5'>
                        <div className='col-lg-12'>
                            <div class="row jumbotron">
                                <h1>Player: {this.state.player}</h1>
                                {this.state.val === 'X' ? <h3 className='col-sm-6 p-2 buttontic text-center'>Turn: {this.state.val}</h3> : <h3 className='col-sm-6 p-2 buttontic text-center'>-</h3>}
                                {this.state.val === 'O' ? <h3 className='col-sm-6 p-2 buttontic text-center'>Turn: {this.state.val}</h3> : <h3 className='col-sm-6 p-2 buttontic text-center'>-</h3>}
                            </div>
                            <div className='row mb-2'>
                                <button className='col-lg-12 btn btn-primary border border-1 text-center text-dark buttontic fs-3'>Tic-Tac-Toe</button>
                            </div>
                            <div className='row mb-2'>
                                {this.state.message === '' ? "" : <p className='col-lg-12  text-center text-dark buttontic fs-3'>{this.state.message}</p>}
                            </div>
                            <div className='row'>
                                <div className='col-sm-1'>
                                    {this.createBoardDivs()}
                                </div>
                            </div>
                            {/* <div className='row bg-dark'>
                                <button className='col-lg-4 p-5 btn border border-1 text-center text-white button fs-1' onClick={() => this.handleClick(0)}>{this.state.box[0]}</button>
                                <button className='col-lg-4 p-5 btn border border-1 text-center text-white button fs-1' onClick={() => this.handleClick(1)}>{this.state.box[1]}</button>
                                <button className='col-lg-4 p-5 btn border border-1 text-center text-white button fs-1' onClick={() => this.handleClick(2)}>{this.state.box[2]}</button>
                            </div>
                            <div className='row bg-dark'>
                                <button className='col-lg-4 p-5 btn border border-1 text-center text-white button fs-1' onClick={() => this.handleClick(3)}>{this.state.box[3]}</button>
                                <button className='col-lg-4 p-5 btn border border-1 text-center text-white button fs-1' onClick={() => this.handleClick(4)}>{this.state.box[4]}</button>
                                <button className='col-lg-4 p-5 btn border border-1 text-center text-white button fs-1' onClick={() => this.handleClick(5)}>{this.state.box[5]}</button>
                            </div>
                            <div className='row bg-dark'>
                                <button className='col-lg-4 p-5 btn border border-1 text-center text-white button fs-1' onClick={() => this.handleClick(6)}>{this.state.box[6]}</button>
                                <button className='col-lg-4 p-5 btn border border-1 text-center text-white button fs-1' onClick={() => this.handleClick(7)}>{this.state.box[7]}</button>
                                <button className='col-lg-4 p-5 btn border border-1 text-center text-white button fs-1' onClick={() => this.handleClick(8)}>{this.state.box[8]}</button>
                            </div>
                            <div className='row mt-2 mb-2'>
                                <button className='col-lg-6 btn btn-primary border border-1 text-center text-dark buttontic fs-3' onClick={() => this.start()}>Start</button>
                                <button className='col-lg-6 btn btn-primary border border-1 text-center text-dark buttontic fs-3' onClick={() => this.restart()}>Replay</button>
                            </div> */}

                        </div>
                    </div>
                </div>}

            </React.Fragment>
        )
    }
}

export default Main;