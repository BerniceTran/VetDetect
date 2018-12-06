import React from 'react';
import {withRouter} from 'react-router-dom';
import FormControl from 'react-bootstrap/lib/FormControl';
import InputGroup from 'react-bootstrap/lib/InputGroup';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import Button from 'react-bootstrap/lib/Button';
import InputGroupAddon from 'react-bootstrap/lib/InputGroupAddon';
import InputGroupButton from 'react-bootstrap/lib/InputGroupButton';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import { Route, Switch } from 'react-router-dom';

class InsuranceDropDown extends React.Component {
    constructor(){
        super()
        this.state = {
            insuranceType: 'insurance'
        };
    }

    handleSelect = (eventKey) => {
        this.setState({
            insuranceType:eventKey
        });
        console.log(eventKey)
    }

    render(){

        return (
            <DropdownButton  id ='insuranceDropDown' title = {this.state.insuranceType} onSelect={this.handleSelect}>
            <MenuItem id = '1' eventKey="No Insurance">No Insurance</MenuItem>
            <MenuItem divider/>
            <MenuItem id = '2' eventKey="Embrace" >Embrace</MenuItem>
            <MenuItem id = '3' eventKey="Healthy Paws Pet" >Healthy Paws Pet</MenuItem>
            <MenuItem id = '4' eventKey="Nationwide" >Nationwide</MenuItem>
        </DropdownButton>

        );
    }
}


class Home extends React.Component {
    render() {
      return (
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
                        <InsuranceDropDown insuranceType = 'insurance'/>
                        <Button href="/Results" style={{
                            background:'#d9534f',
                            color:'white'}}>
                            <Glyphicon glyph ="glyphicon glyphicon-search"/>
                        </Button>

                    </InputGroupButton>
                </InputGroup>
            </div>
        </div>
      );
    }
  }

  export default withRouter(Home);