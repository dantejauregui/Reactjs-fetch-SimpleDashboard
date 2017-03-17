import React from 'react';

class Row extends React.Component {

  render() {
    return(
      <tr>
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
    )
  }
}

export default Row