import React, {Component} from 'react';

class TableDetail extends Component{

	render () {
		console.log(this.props.dataTest);

		return (
			<tbody>
			{this.props.dataTest.map( function (item, i) {
					return (
							<tr key={i}>
								<td>PC</td>
								<td>Venta</td>
								<td>{item.name}</td>
								<td>{item.username}</td>
								<td>{item.email}</td>
								<td>{item.address.street} {item.address.suite}</td>
								<td>{item.address.city}</td>
								<td>{item.address.zipcode}</td>
								<td>{item.website}</td>
								<td>{item.company.name}</td>
		   				</tr>
					);
			})}
			</tbody>
		);
	}

};

// TableDetail.propTypes = {
//   dataTest: PropTypes.array,
// };

export default TableDetail;
