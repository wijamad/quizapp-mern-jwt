import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';


const AnswersView = () => {
    const [soal, setSoal] = useState([]);
    const [idjwb, setIdJwb] = useState(0);
    const [index, setIndex] = useState(0);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        console.log("mulai")
        const getSoal = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/soal/${id}`);

                console.log(response.data.data.Pertanyaans);
                setSoal(response.data.data.Pertanyaans)
                // setIdJwb(create.data.data.id)


            } catch (error) {
                navigate('/')
            }
        }
        getSoal();
        console.log("soal selesai")
        const buatsoal = async () => {
            try {
                console.log(id);
                const create = await axios.post(`http://localhost:5000/kumpuljawaban`, {
                    "soalId": id,
                    "userId": 1
                });
                setIdJwb(create.data.data.id);
            } catch (error) {
                navigate('/')
            }
        }
        buatsoal()
        console.log("jawaban selesai")
    }, [id, navigate]);


    const jawaban = async (benar) => {
        try {

            console.log(benar)
            console.log(soal[index].id)
            console.log(idjwb)
            const jawabanuser = await axios.post(`http://localhost:5000/jawabanuser/`, {
                "jawabanUser": benar,
                "pertanyaanId": soal[index].id,
                "kumpulJawabanId": soal[index].id
            });
            console.log(jawabanuser);
            console.log("tambahkan jawaban user")
            tambahindex();
        } catch (error) {
            console.log(error);
            navigate('/')
        }
    }


    const tambahindex = () => {
        if (index + 1 < soal.length) {
            setIndex(index + 1)
        } else {
            console.log("index selesai");
            navigate('/')
        }
    }

    return (

        < div className="wrapper" >
            <nav className="navbar-expand-lg navbar-dark bg-danger shadow-sm fixed-top">
                <div className="container">
                    <p className="text-center fs-1 fw-bold pt-3 text-light">Quizqu</p>
                </div>
            </nav>
            <div id="d-2" className="bg-dark">
                {soal.length !== 0 ? (<div className="column bg-dark">
                    <div className="a">
                        <p className="fs-1 fw-bolder text-center text-light">
                            {soal[index].pertanyaan}
                        </p>
                    </div>
                    <div className="b">
                        <button className="box btn btn-primary shadow-none" onClick={() => jawaban(1)}>
                            <p className="text-break">
                                {soal[index]["1"]}
                            </p>
                        </button>
                        <button className="box btn btn-primary shadow-none" onClick={() => jawaban(2)}>
                            <p className="text-break">{soal[index]["2"]} </p>
                        </button>
                        <button className="box btn btn-primary shadow-none" onClick={() => jawaban(3)}>
                            <p className="text-break">{soal[index]["3"]}</p>
                        </button>
                        <button className="box btn btn-primary shadow-none" onClick={() => jawaban(4)}>
                            <p className="text-break">{soal[index]["4"]}</p>
                        </button>
                    </div>
                </div>) : null}

            </div>
            <div id="d-3" className="bg-dark text-white text-center">
                <p>
                    {index + 1}/{soal.length !== 0 ? soal.length : "0"}
                </p>
            </div>
        </ div>
    )
}

export default AnswersView
