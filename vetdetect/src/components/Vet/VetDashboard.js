import React from 'react';
import FormControl from 'react-bootstrap/lib/FormControl';
import InputGroup from 'react-bootstrap/lib/InputGroup';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import Button from 'react-bootstrap/lib/Button';
import InputGroupAddon from 'react-bootstrap/lib/InputGroupAddon';
import InputGroupButton from 'react-bootstrap/lib/InputGroupButton';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import {
  Col,
  Row,
  FormGroup,
  ControlLabel
} from "react-bootstrap";
import Home from '../Home';
import Appointment from './Appointment';
import VetInfo from './VetInfo'
import Grid from 'react-bootstrap/lib/Grid';

class VetDashboard extends React.Component {
    render() {
        return (
            <div className="profile-page">
                <Home>
                </Home>
                <Grid>
                    <div className="container">
                        <Row>
                            <Col xs={6} md={2}>
                                <VetInfo>
                                </VetInfo>
                            </Col>
                            <Col xs={6} md={7}>
                                <h2>Rick Sanchez</h2>
                                <h3>Animal Medical Center</h3>
                                <h3>236 Park Ave. New York, NY 12345</h3>
                                <h3>(212)123-4567</h3>
                            </Col>
                            <Col xs={6} md={3}>
                                <Appointment>
                                </Appointment>       
                            </Col>            
                        </Row>
                        <Row>
                            <Button style={{
                                background:'#d9534f',
                                color:'white'}}>
                                Check Reviews
                            </Button>
                        </Row>
                    </div>
                </Grid>
            </div> 
        );
    }
  }

  export default(VetDashboard);