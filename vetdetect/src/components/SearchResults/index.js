import React from 'react';
import Home from '../Home';
import Header from '../Header'
import Grid from 'react-bootstrap/lib/Grid'
import Col from 'react-bootstrap/lib/Col'
import Row from 'react-bootstrap/lib/Row'
import Button from 'react-bootstrap/lib/Button';

const dummyData = {

}


class ClinicInfo extends React.Component{
  constructor(props){
    super(props);

    this.state ={
      vetName: props.vetName,
      clinicName: props.clinicName,  
      clinicAddress: props.clinicAddress,
      clinicTelephone: props.clinicTelephone,
      vetImage: props.vetImage
    }
  }


  render(){
    return (
      <div>
        <Grid>
          <Row>
            <Col xs= {6} md={3} >
            <img  src = {this.state.vetImage} width = {'200px'} height={'200px'} ></img>

            </Col>
            <Col xs= {6} md={2}/>
              <h1>{this.state.vetName}</h1>
              <h3>{this.state.clinicName}</h3>
              <p>{this.state.clinicAddress}</p>
              <p>{this.state.clinicTelephone}</p>
            <Col xs={6} md={4}/>
            
            <Button  style={{alignItems:'top', background:'#d9534f',color:'white'}} type="submit">Book Appointment</Button>
            <Button  style={{justifyContent:"top", alignItems:'top', background:'#d9534f',color:'white'}} type="submit">Review</Button>
            

          </Row>
        </Grid>
      </div>
    );
  }
}



class SearchResults extends React.Component {
    render() {
      return (
        <div className='Results'>
        <Home/>      
        <ul>
        <ClinicInfo  vetImage = {"https://qph.fs.quoracdn.net/main-qimg-25ef1c0ca8700b0be8751a8414ba045c"} vetName = {'Dr. Rick Sanchez'} clinicName = {'Animal Medical Center'} clinicAddress = {'236 Park Ave, New York 12345'} clinicTelephone = {'(212) 123 4567'}/>
        
        <ClinicInfo  vetImage = {"https://pbs.twimg.com/profile_images/758480024815140865/FoGQ7dVf.jpg"} vetName = {'Dr. Morty Smith'} clinicName = {'Animals United'} clinicAddress = {'632 Lexington Ave, New York 12345'} clinicTelephone = {'(212) 123 4567'}/>
          </ul>    
        </div>
      );
    }
  }

  export default(SearchResults);