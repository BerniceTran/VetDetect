import React from 'react';
import pawPrint from './paw-print.png';
import Navbar from 'react-bootstrap/lib/Navbar';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import Button from 'react-bootstrap/lib/Button';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import SplitButton from 'react-bootstrap/lib/SplitButton'
import Home from '../components/Home'

class Header extends React.Component {
    render() {
      return (
          <div>
            <Navbar sytle ={{background:'#eee'}}>
            <Navbar.Header height = {'80px'}>
                <Navbar.Brand >
                    <img src={pawPrint}/>
                </Navbar.Brand>
                <Navbar.Brand>
                    <a style={{color:'red'}} href="/" >VetDetect</a>
                </Navbar.Brand>
            </Navbar.Header>
            <Navbar.Form pullRight>
                    <FormGroup>
                    <FormControl  type ="text" placeholder = "Email"/>
                    {' '}
                    <FormControl type ="text" placeholder = "Password"/> 
                    </FormGroup>
                    {' '}
                    <Button style={{background:'#d9534f',color:'white'}} type="submit">Login</Button>
                    {' '}
                    <SplitButton id='splitButton' pullRight title = {'Sign up'}>
                        <MenuItem id = '1' eventKey="1">Patient</MenuItem>
                        <MenuItem id = '2' divider />
                        <MenuItem id = '3' eventKey="2">Veterinarian</MenuItem>
                    </SplitButton>
            </Navbar.Form>

        </Navbar>
        </div>
      );
    }
  }
  
  export default Header;