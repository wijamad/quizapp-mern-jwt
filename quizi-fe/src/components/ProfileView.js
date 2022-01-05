import React, { useState, useEffect } from 'react'
import axios from 'axios';
import quiz from '../img/quiz.jpg'

const ProfileView = () => {
    const [username, setUsername] = useState("");
    const [nilai, setNilai] = useState([]);
    const [riwayat, setRiwayat] = useState([]);

    useEffect(() => {
        ambildata();
    }, [])

    const ambildata = async () => {
        const response = await axios.post(`http://localhost:5000/user/profile`, {
            "id": 1
        });
        console.log(response.data.data)
        console.log(response.data.data.KumpulJawabans)
        console.log(response.data.data.Soals)
        setUsername(response.data.data.username);
        setNilai(response.data.data.KumpulJawabans)
        setRiwayat(response.data.data.Soals)
    }
    return (
        <div>

            <div className="jumbotron text-center">
                <img src={quiz} alt="Mbak Sunny" width="200" className="rounded-circle img-thumbnail" />
                <h1 className="display-4">{username}</h1>
                <p className="lead">Selamat datang di Profiemu</p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#ffffff" fillOpacity="1"
                        d="M0,128L40,133.3C80,139,160,149,240,154.7C320,160,400,160,480,186.7C560,213,640,267,720,245.3C800,224,880,128,960,112C1040,96,1120,160,1200,186.7C1280,213,1360,203,1400,197.3L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z">
                    </path>
                </svg>
            </div>
            <div className="container">
                <div className="nav mb-5">
                    <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                        <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" checked />
                        <label className="btn btn-outline-primary" htmlFor="btnradio1">Radio 1</label>

                        <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" />
                        <label className="btn btn-outline-primary" htmlFor="btnradio2">Radio 2</label>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">Judul</th>
                                <th scope="col">Nilai</th>

                            </tr>
                        </thead>
                        <tbody>
                            {nilai.map((nilai, i) => (
                                <tr key={nilai.id}>
                                    <th scope="row">{i + 1}</th>
                                    <td>{(nilai.Soal != null) ? nilai.Soal.judul : "Tidak ada Judul"}</td>
                                    <td>{nilai.nilai}</td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#e2edff" fillOpacity="1"
                    d="M0,256L30,256C60,256,120,256,180,245.3C240,235,300,213,360,181.3C420,149,480,107,540,112C600,117,660,171,720,165.3C780,160,840,96,900,106.7C960,117,1020,203,1080,234.7C1140,267,1200,245,1260,213.3C1320,181,1380,139,1410,117.3L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z">
                </path>
            </svg>
        </div>
    )
}

export default ProfileView
