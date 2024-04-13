import { useState, useEffect} from "react";
import {Container, Row, Col} from "react-bootstrap";
import "./Banner.css"
import characterImg from "../../assets/img/character.svg"
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);
        return () => clearInterval(ticker);
    }, [text]);

    const tick = () => {
        const i = loopNum % toRotate.length;
        const fullText = toRotate[i];
        const updatedText = isDeleting
            ? fullText.substring(0, text.length - 1)
            : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    };
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible}) =>
                                <div className={isVisible ? "animate_animated animate_fadeIn" : ""}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hey there, I'm WebCode `}<span className="wrap">web developer</span></h1>
                        <p>Lorem Ipsum is simply dumy text of the printing and typesetting industry</p>
                        <button className="btn-contact" onClick={() => console.log('connect')}>Contact me</button>
                                </div>}
                                </TrackVisibility>
                        </Col>
                    <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
                            {({ isVisible}) =>
                                <div className={isVisible ? "animate_animated animate_zoomIn" : ""}>
                                <img className="character" src={characterImg} alt="character"/>
                                </div>}
                                </TrackVisibility>
                        </Col>
                </Row>
            </Container>
        </section>
    )
}