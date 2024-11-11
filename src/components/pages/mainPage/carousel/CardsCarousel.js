import Carousel from 'react-bootstrap/Carousel';
import {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class CardsCarousel extends Component {
    render() {
        return (
        <Carousel style={{maxWidth: "1400px", maxHeight: "600px"}}>
            <Carousel.Item>
                <img
                    className="d-block"
                    src="https://img.detmir.st/Jyg9dCaUFEKmBrJH9Fvmt_-8XLaWsHthjPuMkMj_zz4/rs:fill:3360:1311/g:ce/q:100/aHR0cHM6Ly9nby5kZXRtaXIuc3QvaW1hZ2VzL2Jhbm5lcnMvZWUxOGI0YmZlNTg2MDRiNWFmZTk5YTE2MmMwOTEzYTRlOWM3ZjU5Yi5qcGVn.webp"
                    alt="First slide"
                    style={{width:'1400px', height: '600px'}}
                />
                <Carousel.Caption>
                    <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block"
                    src="https://img.detmir.st/akv5HRJVN2wauvFYDPRmTDFRy1vGrPP38IXRdJB7RKY/rs:fill:3360:1311/g:ce/q:100/aHR0cHM6Ly9nby5kZXRtaXIuc3QvaW1hZ2VzL2Jhbm5lcnMvOWM3ODcxOTAwYjlhNTEwYzdlZjBjYzZhZTllODcxMzcwYWVlZTRjMi5qcGVn.webp"
                    alt="First slide"
                    style={{width:'1400px', height: '600px'}}
                />
                <Carousel.Caption>
                    <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block"
                    src="https://img.detmir.st/K9b-yXcqK0E5LTPc11q4b1bd-3Bt2P51zRG_Coiss3A/rs:fill:3360:1311/g:ce/q:100/aHR0cHM6Ly9nby5kZXRtaXIuc3QvaW1hZ2VzL2Jhbm5lcnMvMjQwYzJiY2M5MjJlYjQ0YmM3ZmFmZDlhMzU2OTJmZmU5NjA4NjQxMS5qcGVn.webp"
                    alt="First slide"
                    style={{width:'1400px', height: '600px'}}
                />
                <Carousel.Caption>
                    <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
    }
}
