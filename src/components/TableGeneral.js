import React, {Component} from 'react';
import TableDetail from './TableDetail';

class TableGeneral extends Component{

	constructor(props){
    super(props);

    this.state = {
      usuarios: [],
    }
  }


	componentWillMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
				//console.log(data[0].username);
        this.setState({ usuarios: data })
      })
  }


	render () {
		//console.log(this.state.usuarios);

    if (this.state.usuarios.length > 0) {
      return (
            <div className="container">
              <div className="row">
                <div className="table-responsive">
                  <table className="table table-bordered">
                     <thead>
                       <tr>
                         <th></th>
                         <th></th>
                         <th>Name</th>
                         <th>UserName {this.state.usuarios.name}</th>
                         <th>Email</th>
                         <th>Address</th>
                         <th>City</th>
                         <th>Zip Code</th>
                         <th>Website</th>
                         <th>Company Name</th>
                       </tr>
                     </thead>
                     <tbody>

                      <TableDetail dataTest={this.state.usuarios} />

                     </tbody>
                    </table>
                </div>
               </div>
             </div>
      )
    } else {
      return <p className="text-center">Cargando empleados...</p>
    }

	};
}


export default TableGeneral;
