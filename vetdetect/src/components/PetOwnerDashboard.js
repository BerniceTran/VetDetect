import React from 'react';
import FormControl from 'react-bootstrap/lib/FormControl';
import InputGroup from 'react-bootstrap/lib/InputGroup';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import Button from 'react-bootstrap/lib/Button';
import InputGroupAddon from 'react-bootstrap/lib/InputGroupAddon';
import InputGroupButton from 'react-bootstrap/lib/InputGroupButton';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import pawPrint from './paw-print.png';


class PetOwnerDashboard extends React.Component {
    render() {
        return (
            <div className="profile-page">
                <div className='jumbotron'>          
                    <div className="container d-flex h-100">
                        <InputGroup>
                            <FormControl 
                            type ='text' 
                            placeholder='Search Veterinarian, Clinic, Condition...'>
                            </FormControl>
                            <InputGroupAddon></InputGroupAddon>

                            <FormControl 
                            type ='text' 
                            placeholder='Near zip code, neighborhood, city...'>
                            </FormControl>
                        
                            <InputGroupButton>
                                <DropdownButton title = {'Insurance'}>
                                            <MenuItem eventKey="1">No Insurance</MenuItem>
                                            <MenuItem divider/>
                                            <MenuItem eventKey="2">Embrace</MenuItem>
                                            <MenuItem eventKey="3">Healthy Paws Pet</MenuItem>
                                            <MenuItem eventKey="4">Nationwide</MenuItem>
                                </DropdownButton>
                                <Button style={{
                                    background:'#d9534f',
                                    color:'white'}}>
                                    <Glyphicon glyph ="glyphicon glyphicon-search"/>
                                </Button>

                            </InputGroupButton>
                        </InputGroup>
                    </div>

                </div>

                <div className="profile">
                    <img src={pawPrint}/>
                </div>
                
            </div> 
        );
    }
  }

  export default(PetOwnerDashboard);