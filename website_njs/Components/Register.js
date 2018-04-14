import React, { Component } from 'react';
import axios from 'axios';
import Webcam from 'react-webcam';
class Register extends Component {
  constructor(props) {
     super(props);

     this.state = {
         username: '',
         load: false
     };
 }

 // for invoking react-webcam component for procuring a screenshot
 setRef = (webcam) => {
     this.webcam = webcam;
 }

 // capturing the screenshot through the function
 capture = () => {
     this.setState({
         load: true
     });

     // captures the screenshot for the image
     const imageSrc = this.webcam.getScreenshot();

     axios.post(`https://api.kairos.com/enroll`, {
         gallery_name: 'newCameraGallery',
         image: imageSrc,
         subject_id: this.state.username
     }, {
             // you have to add your secret credentials here
             headers: {
               app_id: '178c28a8',
               app_key: 'e8820376f222aba5db1d3f5e3c0a2e58'
             }
         }).then((response) => {
             // redux method for refining the JSON response is invoked
             this.props.registerUser(response.data);
             this.setState({
                 load: false
             });
         });
 };

 render() {
     return (
                     <div style={{ 'textAlign': 'center' }}>
                         <h3>REGISTER FACE</h3>
                         <Webcam
                             audio={false}
                             height={320}
                             ref={this.setRef}
                             screenshotFormat="image/png"
                             width={320}
                         />
                         <br />
                         <div style={{ 'margin': '0 auto!important' }}>

                         </div>
                         <br />


                         <br />
                         <button className='register-button' onClick={this.capture}/>
                         <button className='register-button' onClick={this.resetGallery}/>

                     </div>
     );
 }
}

export default Register;
