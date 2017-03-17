import React, {Component} from 'react';

class TableDetail extends Component{

	render () {
	console.log(this.props.dataTest);

	return (<tr>
						<td>PC</td>
						<td>Venta</td>
						<td>{this.props.dataTest[0].name}</td>
						<td>{this.props.dataTest[0].username}</td>
						<td>{this.props.dataTest[0].email}</td>
						<td>{this.props.dataTest[0].address.street} {this.props.dataTest[0].address.suite}</td>
						<td>{this.props.dataTest[0].address.city}</td>
						<td>{this.props.dataTest[0].address.zipcode}</td>
						<td>{this.props.dataTest[0].website}</td>
						<td>{this.props.dataTest[0].company.name}</td>
		   	</tr>
			)	
	};
};

// TableDetail.propTypes = {
//   dataTest: PropTypes.array,
// };

export default TableDetail;
