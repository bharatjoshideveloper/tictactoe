import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export class Base extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            val: '',
            message: ''
        }
    }
    handleChangedata = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value }, () => { console.log(this.state) });
    }
    token = (data) => {
        debugger;
        this.setState({ val: data })

    }
    handleSubmit = (event) => {
        if (this.state.name === '') {
            this.setState({ message: 'Please Enter Valid Response!' })
        }
        else {
            this.setState({ name: this.state.name, message: 'welcome ' + this.state.name, val: this.state.val });

        }
    }
    render() {
        return (
            <React.Fragment>
                <div className='container m-5 d-flex justify-content-center'>

                    <div className='row m-5'>
                        <div className='col-lg-12 mb-5 text-center'>
                            <label className='display-4'>Tic Tac Toe</label>
                        </div>
                        <div className='col-sm-6'>
                            <label className='display-4'>Enter Player Name....</label>
                            <h5 className='text-danger'>{this.state.message}</h5>
                            {this.state.message === '' ? "" : <button className='mt-5 btn buttontic p-3 text-dark fs-5 form-control' onClick={() => { this.props.data(this.state) }}>Start</button>}

                        </div>
                        <form className='col-sm-6'>
                            <input type='text' className="form-control fs-1" style={{ border: 'none', borderBottom: '2px solid black', backgroundColor: 'darkgrey' }} name='name' value={this.state.name} onChange={this.handleChangedata} />
                            <label className='mt-5 mb-4 h5 text-dark'>Select Token:</label><br />
                            <button type='button' className='btn btn-dark btn-lg border' name='X' onClick={() => { this.token('X') }}  >X</button><button type='button' className='btn btn-dark  btn-lg border' name='O' onClick={() => { this.token('O') }}  >0</button>
                            <br />
                            <button type="button" class="mt-5 btn buttontic text-dark fs-5 form-control p-3" onClick={this.handleSubmit}>Save</button>
                        </form>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Base