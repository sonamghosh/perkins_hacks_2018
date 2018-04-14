import React, { Component } from 'react';
import axios from 'axios';
import Webcam from 'react-webcam';
class Recognize extends Component {
  constructor(props) {
    super(props);

    this.state = {
      load: false
    };
  }
  setRef = (webcam) => {
    this.webcam = webcam;
  }

  capture = () => {
    this.setState({
      load: true
    });

    const imageSrc = this.webcam.getScreenshot();
        axios.post(`https://api.kairos.com/recognize`, {
            gallery_name: 'newCameraGallery',
            image: imageSrc
        }, {
                headers: {
                    app_id: '178c28a8',
                    app_key: 'e8820376f222aba5db1d3f5e3c0a2e58'
                }
            }).then((response) => {
                console.log('response', response);
                this.props.recognizeUser(response.data);
                this.setState({
                    load: false
                });
            }).catch((error) => {
                console.log(error);
            });
        };

  render() {
    return (
                        <div style={{ 'textAlign': 'center' }}>
                            <h3>DETECT FACE</h3>
                            <Webcam
                                audio={false}
                                height={320}
                                ref={this.setRef}
                                screenshotFormat="image/png"
                                width={320}
                            />

                            <br />

                        </div>
    );
  }
}

export default Recognize;
