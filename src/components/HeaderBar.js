import React from 'react';

const HeaderBar = () => {
	return 	<div className="row">
				<div className="pull-left col-md-3">
					<h1 >Ventas</h1>
				</div>

				<div className="pull-right col-md-2">
					<button type="button" className="btn btn-default">Exportar</button>
					<button type="button" className="btn btn-default">Filtrar</button>
				</div>
			</div>




};

export default HeaderBar;
