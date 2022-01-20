import React from 'react'

const LoginView = () => {
    return (
        <div>
            <div className="vh-100 gradient-custom">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card bg-light text-danger">
                                <div className="card-body p-5 text-center">
                                    <div className="mb-md-5 mt-md-4 pb-5">
                                        <h2 className="fw-bold mb-2 text-uppercase">Quizqu</h2>
                                        <p className="text-black-50 mb-5">
                                            Masukkan username dan password kamu
                                        </p>
                                        <div className="form-outline form-white mb-4">
                                            <input
                                                type="email"
                                                id="typeEmailX"
                                                className="form-control form-control-lg"
                                            />
                                            <label className="form-label text-black-50" for="typeEmailX">username
                                            </label >
                                        </div>

                                        <div className="form-outline form-white mb-4 text-black-50">
                                            <input
                                                type="password"
                                                id="typePasswordX"
                                                className="form-control form-control-lg"
                                            />
                                            <label className="form-label" for="typePasswordX">Password
                                            </label>
                                        </div>
                                        <button className="btn btn-primary btn-lg px-5" type="submit">
                                            Login
                                        </button>

                                        <div
                                            className="d-flex justify-content-center text-center mt-4 pt-1"
                                        ></div>
                                    </div>

                                    <div>
                                        <p className="mb-0 text-primary">
                                            Belum punya akun?
                                            <a href="#!" className="text-black-50 fw-bold">Daftar</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginView
