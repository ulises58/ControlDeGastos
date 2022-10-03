import Gasto from './Gasto';

export const ListadoGastos = ({
	gastos,
	setGastoEditar,
	elimanarGasto,
	filtro,
	gastosFiltrados,
}) => {
	return (
		<div className='listado-gastos contenedor contenedor'>
			{filtro ? (
				<>
					<h2>{gastosFiltrados.length ? 'Gastos' : 'No Hay Gastos'}</h2>
					{gastosFiltrados.map(gasto => (
						<Gasto
							elimanarGasto={elimanarGasto}
							setGastoEditar={setGastoEditar}
							key={gasto.id}
							gasto={gasto}
						/>
					))}
				</>
			) : (
				<>
					<h2>{gastos.length ? 'Gastos' : 'No Hay Gastos'}</h2>
					{gastos.map(gasto => (
						<Gasto
							elimanarGasto={elimanarGasto}
							setGastoEditar={setGastoEditar}
							key={gasto.id}
							gasto={gasto}
						/>
					))}
				</>
			)}
		</div>
	);
};
