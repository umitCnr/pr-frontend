import React, {useState, useEffect, useMemo} from "react";
import './../FishDesings.css';
import Card from 'react-bootstrap/Card';
import axios from 'axios';


const BitkiSalt = () => {

    const [saltFish, setSaltFish] = useState([]);
    const [getdataCards] = useState(6);
    const [currentPage, setCurrentPage] = useState(1);

    useMemo(() => {
        axios.get('http://localhost:8081/bitki/getKind/TUZLU')
            .then(getData => setSaltFish(getData.data))
            .catch(err => console.log("data gelmedi" + err))
    },[])


    const indexOfLastPost = currentPage * getdataCards;
    const indexOfFirstPost = indexOfLastPost - getdataCards;
    const currentPosts = saltFish.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);


    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(saltFish.length / getdataCards); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className={"main-salt"}>
            <div className={"sub-main"}>
                <div className={"kind-text"}>
                    <h1>Tuzlu Su Canlıları</h1>
                </div>
                <div className={"kind-cards"}>
                    {currentPosts.map(salt => (
                        <Card className={"cards"} style={{width: '19rem'}} key={salt.id}>
                            <Card.Img variant="top"  src={`data:image/${salt.format};base64,${salt.url}`}  className="card-img"/>
                            <Card.Body className="card-body">
                                <Card.Title className={"title-card"}>{salt.name}</Card.Title>
                                <Card.Text className={"text-card"}>
                                    {salt.description}
                                </Card.Text>
                                <Card.Text className={"text-card"}>
                                    Yaşatabileceği sıcaklık aralığı: {salt.max_temp}-{salt.min_temp}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    ))}
                </div>

                <div className="pagination">
                    {pageNumbers.map(number => (
                        <button key={number} onClick={() => paginate(number)} className="page-number">
                            {number}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default BitkiSalt;