import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';

const NilaiView = () => {
    const [nilai, setNilai] = useState('0')
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const getNilai = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/kumpuljawaban/nilai/${id}`);
                setNilai(response.data.data)
            } catch (error) {
                navigate('/')
            }
        }
        getNilai();
    }, [id, navigate])

    return (
        <div>
            <nav className="navbar-expand-lg navbar-dark bg-danger shadow-sm fixed-top">
                <div className="container">
                    <p className="text-center fs-1 fw-bold pt-3 text-light">Quizqu</p>
                </div>
            </nav>

            <div className="vh-100 bg-dark">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-10">
                            <div className="card bg-light text-danger" style={{ borderRadius: 50 }}>
                                <div className="card-body p-5 text-center">
                                    <div className="mb-md-5 mt-md-4 pb-5">
                                        <h2 className="fw-bold mb-2 text-uppercase">Quizqu</h2>
                                        <p className="title fw-bold ">Score</p>
                                        <p className="title fw-bold ">{nilai}%</p>
                                        <div className="btn-nilai">
                                            <button type="button" class="btn btn-primary btn-lg" onClick={() => navigate('/')}>Halaman Utama</button>
                                            <button type="button" class="btn btn-secondary btn-lg">Kerjakan lagi</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="text-white text-center">Created with <i className=" bi bi-heart-fill text-danger"></i> by <a
                        href="http://facebook.com" className="text-white fw-bold">Quizqu</a> </p>
                </div>
            </div >
        </div >
    )
}

export default NilaiView
