import Gasto from './Gasto';

export const ListadoGastos = ({ gastos, setGastoEditar, elimanarGasto }) => {
	return (
		<div className='listado-gastos contenedor contenedor'>
			<h2>{gastos.length ? 'Gastos' : 'No Hay Gastos'}</h2>
			{gastos.map(gasto => (
				<Gasto
					elimanarGasto={elimanarGasto}
					setGastoEditar={setGastoEditar}
					key={gasto.id}
					gasto={gasto}
				/>
			))}
		</div>
	);
};
