import React from 'react'; 
import Button from 'react-bootstrap/lib/Button';
import DayPicker, { DateUtils } from 'react-day-picker'
import 'react-day-picker/lib/style.css';

class Appointment extends React.Component {

	render() {
    	return (
    		<div className="row">
	      		<div class="col-lg">
	     			< DayPicker
	        			locale='us'
	         		/> 
	         	</div>
	         	<Button style={{
                        background:'#d9534f',
                        color:'white'}}>
                        Appointments
                </Button>
	
	        </div>
	                             
   		)
    }
}

export default(Appointment);	