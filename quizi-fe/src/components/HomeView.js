import React, { useState, useEffect } from 'react'
import quiz from '../img/quiz.jpg'
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export const HomeView = () => {
    const [soal, setSoal] = useState([]);
    const [judul, setJudul] = useState('')
    const navigate = useNavigate();


    useEffect(() => {
        console.log("useEffect")
        ambilsoal();
    }, []);
    const ambilsoal = async () => {
        try {
            const response = await axios.get('http://localhost:5000/soal/');
            console.log(response.data);
            setSoal(response.data.data);
        } catch (error) {
            console("failed to get")
        }
    }
    const buatsoal = async () => {
        try {
            const response = await axios.post('http://localhost:5000/soal/', {
                judul: judul,
                userId: 1
            });
            console.log(response.data.data.id)

            navigate(`/buatpertanyaan/${response.data.data.id}`)
        } catch (error) {
            console("failed to get")
        }
    }
    return (
        <div>
            {/* modal */}
            <div
                className="modal fade"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
                id="exampleModal"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body text-center">
                            <div className="mb-md-5 mt-md-4 pb-5">
                                <h2 className="fw-bold mb-2 text-uppercase text-danger mb-5">
                                    Quizqu
                                </h2>

                                <div className="form-outline form-white mb-5">
                                    <input
                                        type="text"
                                        id="soal"
                                        className="form-control form-control-lg"
                                        placeholder="Masukkan Pertanyaan"
                                        onChange={(e) => setJudul(e.target.value)}
                                    />
                                </div>
                                <b className="btn btn-danger btn-lg px-5"
                                    data-bs-dismiss="modal"
                                    aria-label="Close" type="submit" onClick={() => buatsoal()}>
                                    Buat Pertanyaan
                                </b>
                                <div
                                    className="d-flex justify-content-center text-center mt-4 pt-1"
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* akhir modal */}
            {/*navbar */}
            <nav
                className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm fixed-top"
            >
                <div className="container">
                    <a className="navbar-brand" href="/">Quizqu</a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">
                            <button className="btn btn-danger text-white" href="#projects" data-bs-toggle="modal"
                                data-bs-target="#exampleModal">Buat Quiz</button>
                            <a className="nav-link" href="#contact">Profile</a>
                        </div>
                    </div>
                </div>
            </nav>
            {/*Akhir navbar */}
            {/*menu masukkan kode */}
            <section className="jumbotron text-center">
                <div className="container">
                    <h1 className="display-4">Quizqu</h1>
                    <p className="lead">Menambah Ilmu Menambah Pintar</p>
                    <div className="kode">
                        <div className="input-group mb-3 input-group-lg">
                            <span className="input-group-text" id="basic-addon1">Kode Soal</span>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Username"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                            />
                        </div>
                        <button type="button" className="btn btn-secondary btn-lg">
                            Mulai !
                        </button>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path
                        fill="#ffffff"
                        fillOpacity="1"
                        d="M0,128L40,133.3C80,139,160,149,240,154.7C320,160,400,160,480,186.7C560,213,640,267,720,245.3C800,224,880,128,960,112C1040,96,1120,160,1200,186.7C1280,213,1360,203,1400,197.3L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
                    ></path>
                </svg>
            </section>
            {/*akhir buat quix */}
            {/*projects */}
            <section id="projects">
                <div className="container">
                    <div className="row text-center">
                        <div className="col">
                            <h2>Mungkin Kamu tertarik dengan Quiz dibawah ini</h2>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        {soal.map((soal) => (
                            <div className="col-md-4 mb-3" key={soal.id}>
                                <div className="card">
                                    <img
                                        src={quiz}
                                        className="card-img-top"
                                        alt="..."
                                    />
                                    <div className="card-body text-center">
                                        <p className="card-text">
                                            {soal.judul}
                                        </p>
                                        <button type="button " className="btn btn-secondary">
                                            Mulai !
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#0d6efd" fillOpacity="1"
                        d="M0,192L30,208C60,224,120,256,180,229.3C240,203,300,117,360,122.7C420,128,480,224,540,261.3C600,299,660,277,720,224C780,171,840,85,900,85.3C960,85,1020,171,1080,176C1140,181,1200,107,1260,85.3C1320,64,1380,96,1410,112L1440,128L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z">
                    </path>
                </svg>
            </section>
            {/*akhir projects */}
            {/*footer */}
            <footer className="bg-primary text-white text-center pb-3">
                <p>Created with <i className="bi bi-heart-fill text-danger"></i> by <a href="http://facebook.com"
                    className="text-white fw-bold">Quizqu</a> </p> </footer>
            {/*akhir footer */}
        </div >
    )
}

export default HomeView;