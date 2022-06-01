import React, { Component } from 'react';

export class Base extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            val: '',
            number: '',
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
            this.setState({ name: this.state.name, message: 'welcome ' + this.state.name, val: this.state.val, number: this.state.number });

        }
    }
    render() {
        return (
            <React.Fragment>
                <div className='container m-5 d-flex justify-content-center'>
                    <div className='row m-5'>
                        <div className='col-lg-12 mb-5 text-center'>
                            <label className='display-4'><i class="bi bi-controller"></i>T<span className='h1'>i</span>c T<sup className='h1'>a</sup>c T<span className='h1'>o</span>e</label>
                        </div>
                        <div className='col-sm-6'>
                            <label className='display-4'>Enter <sup className='display-6'>[row][col]</sup></label><hr />
                            <label className='display-4'>Enter Your Name....</label>
                            <h5 className='text-danger'>{this.state.message}</h5>
                            {this.state.message === '' ? "" : <button className="mt-5 btn btn-dark text-white fs-5 form-control p-3" style={{ border: 'none', borderRight: '15px solid yellowgreen' }} onClick={() => { this.props.data(this.state) }}>Start</button>}
                        </div>
                        <form className='col-sm-6'>
                            <input type='text' className="form-control fs-1" style={{ width: '80px', border: 'none', borderBottom: '2px solid black', backgroundColor: 'darkgrey' }} name='number' value={this.state.number} onChange={this.handleChangedata} placeholder='0' />
                            <input type='text' className="form-control fs-1" style={{ border: 'none', borderBottom: '2px solid black', backgroundColor: 'darkgrey' }} name='name' value={this.state.name} onChange={this.handleChangedata} placeholder='Enter Player Name' />
                            <label className='mt-5 mb-4 h5 text-dark'>Select which you want to be ? </label><br />
                            <button type='button' className='btn btn-dark btn-lg' style={{ border: 'none', borderRight: '15px solid yellowgreen' }} name='X' onClick={() => { this.token('X') }}  >Player X</button><button type='button' className='btn btn-dark  btn-lg mx-4' style={{ border: 'none', borderRight: '15px solid yellowgreen' }} name='O' onClick={() => { this.token('O') }}  >Player 0</button>
                            <br />
                            <button type="button" className="mt-5 btn btn-dark text-white fs-5 form-control p-3" style={{ border: 'none', borderRight: '15px solid yellowgreen' }} onClick={this.handleSubmit}>Save</button>
                        </form>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Base;