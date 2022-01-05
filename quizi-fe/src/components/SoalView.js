import React, { useState } from 'react'
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";
const SoalView = () => {
    const [pertanyaan, setPertanyaan] = useState("")
    const [jwb1, setJwb1] = useState("")
    const [jwb2, setJwb2] = useState("")
    const [jwb3, setJwb3] = useState("")
    const [jwb4, setJwb4] = useState("")
    const [benar, setBenar] = useState(0)
    const navigate = useNavigate();
    const { id } = useParams();

    const buatpertanyaan = async () => {
        try {
            console.log("buatpertanyaan");
            console.log(pertanyaan)
            console.log(jwb1)
            console.log(jwb2)
            console.log(jwb3)
            console.log(jwb4)
            console.log(benar)
            console.log(id)
            const response = await axios.post(`http://localhost:5000/pertanyaan/`, {
                "pertanyaan": pertanyaan,
                "a": jwb1,
                "soalId": id,
                "b": jwb2,
                "c": jwb3,
                "d": jwb4,
                "benar": benar
            });
            console.log(response.data);
            console.log("pertanyaan selesai dibuat")
        } catch (error) {
            console("failed to get")
        }
    }

    const tambahpertanyaan = () => {
        buatpertanyaan();
        console.log("set kemabli")
        setPertanyaan("");
        setJwb1("");
        setJwb2("");
        setJwb3("");
        setJwb4("");
        setBenar(0);
        console.log("selesai set")
    }

    const selesai = () => {
        buatpertanyaan();
        navigate('/')
    }
    return (
        < div className="wrapper bg-dark gradient-custom" >
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-10">
                        <div className="card bg-light text-danger">
                            <div className="card-body p-5 text-center">
                                <div className="mb-md-5 mt-md-4 pb-5">
                                    <h2 className="fw-bold mb-2 text-uppercase">Quizqu</h2>
                                    <p className="text-black-50 mb-5">
                                        tambahkan soal
                                    </p>
                                    <div className="form-outline form-white mb-4">
                                        <input type="text" id="soal" className="form-control form-control-lg" placeholder="Masukkan Pertanyaan" onChange={(e) => setPertanyaan(e.target.value)} value={pertanyaan} />
                                    </div>
                                    <div className="form-outline form-white mb-4">
                                        <div className="input-group">
                                            <div className="input-group-text">
                                                <input type="radio" id="jawaban" name="jawaban" value="1" onChange={(e) => setBenar(e.target.value)} />
                                            </div>
                                            <input type="text" id="soal" className="form-control form-control-lg" placeholder="Jawaban 1" onChange={(e) => setJwb1(e.target.value)} value={jwb1} />
                                        </div>
                                    </div>
                                    <div className="form-outline form-white mb-4">
                                        <div className="input-group">
                                            <div className="input-group-text">
                                                <input type="radio" id="jawaban" name="jawaban" value="1" onChange={(e) => setBenar(e.target.value)} />
                                            </div>
                                            <input type="text" id="soal" className="form-control form-control-lg" placeholder="Jawaban 1" onChange={(e) => setJwb2(e.target.value)} value={jwb2} />
                                        </div>
                                    </div>
                                    <div className="form-outline form-white mb-4">
                                        <div className="input-group">
                                            <div className="input-group-text">
                                                <input type="radio" id="jawaban" name="jawaban" value="1" onChange={(e) => setBenar(e.target.value)} />
                                            </div>
                                            <input type="text" id="soal" className="form-control form-control-lg" placeholder="Jawaban 1" onChange={(e) => setJwb3(e.target.value)} value={jwb3} />
                                        </div>
                                    </div>
                                    <div className="form-outline form-white mb-4">
                                        <div className="input-group">
                                            <div className="input-group-text">
                                                <input type="radio" id="jawaban" name="jawaban" value="1" onChange={(e) => setBenar(e.target.value)} />
                                            </div>
                                            <input type="text" id="soal" className="form-control form-control-lg" placeholder="Jawaban 1" onChange={(e) => setJwb4(e.target.value)} value={jwb4} />
                                        </div>
                                    </div>
                                    <button className="btn btn-primary btn-lg px-5 mx-2" type="submit" onClick={() => tambahpertanyaan()}>
                                        Tambah pertanyaan lagi
                                    </button>
                                    <button className="btn btn-success btn-lg px-5 mx-2" type="submit" onClick={() => selesai()}>
                                        selesai
                                    </button>

                                    <div className="d-flex justify-content-center text-center mt-4 pt-1"></div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <p className="text-white text-center">Created with <i className=" bi bi-heart-fill text-danger"></i> by <a
                        href="http://facebook.com" className="text-white fw-bold">Quizqu</a> </p>
                </div>
            </div>
        </div>
    )
}

export default SoalView
