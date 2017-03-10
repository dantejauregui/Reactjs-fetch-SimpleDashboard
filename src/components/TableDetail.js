import React, {Component} from 'react';

class TableDetail extends Component{

	render () {
	//console.log(this.props.dataTest);

	return <tr>
						<td>PC</td>
						<td>Venta</td>
						<td>{this.props.dataTest.name}</td>
						<td>{this.props.dataTest.username}</td>
						<td>{this.props.dataTest.email}</td>
						<td>??</td>
						<td>??</td>
						<td>??</td>
						<td>{this.props.dataTest.website}</td>
						<td>??</td>
		   	</tr>

	};
};

// TableDetail.propTypes = {
//   dataTest: PropTypes.array,
// };

export default TableDetail;
