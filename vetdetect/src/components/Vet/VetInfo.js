import React from 'react';
import rick from './RickSanchez.png';
import {
  Col,
  Row,
  FormGroup,
  ControlLabel
} from "react-bootstrap";

class VetInfo extends React.Component {

	render(){
		return (
			<div className="vet-info">

					<Row>
						<Col>
							<img src={rick} width="200" length="200"/>
						</Col>

	       		 	</Row>
      		</div>
		)
	}
}

export default(VetInfo);