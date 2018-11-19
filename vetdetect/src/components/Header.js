import React from 'react';
import pawPrint from './paw-print.png';
import Navbar from 'react-bootstrap/lib/Navbar';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import Button from 'react-bootstrap/lib/Button';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import SplitButton from 'react-bootstrap/lib/SplitButton'

class Header extends React.Component {
    render() {
      return (
          <div>
            <Navbar>
            <Navbar.Header height = {'80px'}>
                <Navbar.Brand >
                    <img src={pawPrint}/>
                </Navbar.Brand>
                <Navbar.Brand>
                    <a href="/" >VetDetect</a>
                </Navbar.Brand>
            </Navbar.Header>
            <Navbar.Form pullRight>
                    <FormGroup>
                    <FormControl  type ="text" placeholder = "Email"/>
                    {' '}
                    <FormControl type ="text" placeholder = "Password"/> 
                    </FormGroup>
                    {' '}
                    <Button color ={'blue'} type="submit">Login</Button>
                    {' '}
                    <SplitButton pullRight title = {'Sign up'}>
                        <MenuItem eventKey="1">Patient</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey="2">Veterinarian</MenuItem>
                    </SplitButton>
            </Navbar.Form>
        </Navbar>;
        </div>
      );
    }
  }
  
  export default Header;