import Gasto from './Gasto';

export const ListadoGastos = ({ gastos, setGastoEditar }) => {
	return (
		<div className='listado-gastos contenedor contenedor'>
			<h2>{gastos.length ? 'Gastos' : 'No Hay Gastos'}</h2>
			{gastos.map(gasto => (
				<Gasto setGastoEditar={setGastoEditar} key={gasto.id} gasto={gasto} />
			))}
		</div>
	);
};
