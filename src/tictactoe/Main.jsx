import React, { Component } from 'react'

export class Main extends Component {
    render() {
        return (
            <React.Fragment>
                <div className='container-fluid d-flex justify-content-center'>
                    <div className='row mt-5'>
                        <div className='col-lg-12 shadow-lg p-3 mb-5  rounded'>
                            <div className='row mb-2'>
                                <button className='col-lg-12 btn btn-primary border border-1 text-center text-dark buttontic fs-3'>Tic-Tac-Toe</button>
                            </div>
                            <div className='row bg-dark'>
                                <button className='col-lg-4 p-5 btn border border-1 text-center text-white button fs-1'>X</button>
                                <button className='col-lg-4 p-5 btn border border-1 text-center text-white button fs-1'>X</button>
                                <button className='col-lg-4 p-5 btn border border-1 text-center text-white button fs-1'>X</button>
                            </div>
                            <div className='row bg-dark'>
                                <button className='col-lg-4 p-5 btn border border-1 text-center text-white button fs-1'>O</button>
                                <button className='col-lg-4 p-5 btn border border-1 text-center text-white button fs-1'>O</button>
                                <button className='col-lg-4 p-5 btn border border-1 text-center text-white button fs-1'>O</button>
                            </div>
                            <div className='row bg-dark'>
                                <button className='col-lg-4 p-5 btn border border-1 text-center text-white button fs-1'>X</button>
                                <button className='col-lg-4 p-5 btn border border-1 text-center text-white button fs-1'>X</button>
                                <button className='col-lg-4 p-5 btn border border-1 text-center text-white button fs-1'>X</button>
                            </div>
                            <div className='row mt-2 mb-2'>
                                <button className='col-lg-6 btn btn-primary border border-1 text-center text-dark buttontic fs-1'>Start</button>
                                <button className='col-lg-6 btn btn-primary border border-1 text-center text-dark buttontic fs-1'>Restart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Main;