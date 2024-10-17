import React, { useEffect, useState } from "react";
import './write.css';
import Card from 'react-bootstrap/Card';
import fish from './../icons/fish.jpg';
import omurgasiz from './../icons/omurgasiz.jpg';
import herb from './../icons/yosun.jpg';

const WriteNew = () => {



    return (
        <div className={"main"}>
            <div className={'sub-main'}>
                <div className="container">
                    <Card className={'card'}  style={{ width: '20rem' }}>
                        <Card.Img className={'fish-img'} variant="top" src={fish} />
                        <Card.Body>
                            <Card.Title className={'title'}>Akvaryum Balıkları</Card.Title>
                            <Card.Text className="text-center">
                                Akvaryum balıkları, su altında yaşam süren ve çeşitli renk, şekil ve boyutlara sahip olan büyüleyici canlılardır.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="container">
                    <Card className={'card'}  style={{ width: '20rem' }}>
                        <Card.Img className={'fish-img'} variant="top" src={omurgasiz} />
                        <Card.Body>
                            <Card.Title className={'title'}>Omurgasız Canlılar</Card.Title>
                            <Card.Text className="text-center">
                                Akvaryum balıkları, su altında yaşam süren ve çeşitli renk, şekil ve boyutlara sahip olan büyüleyici canlılardır.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="container">
                    <Card className={'card'}  style={{ width: '20rem' }}>
                        <Card.Img className={'fish-img'} variant="top" src={herb} />
                        <Card.Body>
                            <Card.Title className={'title'}>Akvaryum Bitkileri</Card.Title>
                            <Card.Text className="text-center">
                                Akvaryum balıkları, su altında yaşam süren ve çeşitli renk, şekil ve boyutlara sahip olan büyüleyici canlılardır.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>

    );
};

export default WriteNew;
