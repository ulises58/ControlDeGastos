import Gasto from './Gasto';

export const ListadoGastos = ({ gastos }) => {
	return (
		<div className='listado-gastos contenedor contenedor'>
			<h2>{gastos.length ? 'Gastos' : 'No Hay Gastos'}</h2>
			ListadoGastos
			{gastos.map(gasto => (
				<Gasto key={gasto.id} gasto={gasto} />
			))}
		</div>
	);
};
