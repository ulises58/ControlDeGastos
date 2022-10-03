import { useState, useEffect } from 'react';
import Header from './components/Header';
import IconoNuevoGasto from './img/nuevo-gasto.svg';
import Modal from './components/Modal';
import { ListadoGastos } from './components/ListadoGastos';
import { generarId } from '../helpers/index';

function App() {
	const [presupuesto, setPresupuesto] = useState(
		Number(localStorage.getItem('presupuesto')) ?? 0
	);
	const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
	const [modal, setModal] = useState(false);
	const [animarModal, setAnimarModal] = useState(false);
	const [gastos, setGastos] = useState([]);
	const [gastoEditar, setGastoEditar] = useState({});

	useEffect(() => {
		if (Object.keys(gastoEditar).length > 0) {
			setModal(true);
			setTimeout(() => {
				setAnimarModal(true);
			}, 500);
		}
	}, [gastoEditar]);

	useEffect(() => {
		localStorage.setItem('presupuesto', presupuesto ?? 0);
	}, [presupuesto]);

	useEffect(() => {
		const presupuestoLS = Number(localStorage.getItem('presupuesto')) ?? 0;
		if (presupuestoLS > 0) {
			setIsValidPresupuesto(true);
		}
	}, []);
	const handleNuevoGasto = () => {
		setModal(true);
		setGastoEditar({});
		setTimeout(() => {
			setAnimarModal(true);
		}, 500);
	};

	const guardarGasto = gasto => {
		if (gasto.id) {
			//Actulizar
			const gastosActulizados = gastos.map(gastosState =>
				gastosState.id === gasto.id ? gasto : gastosState
			);
			setGastos(gastosActulizados);
			setGastoEditar({});
		} else {
			gasto.id = generarId();
			gasto.fecha = Date.now();
			setGastos([...gastos, gasto]);
		}
		setAnimarModal(false);
		setTimeout(() => {
			setModal(false);
		}, 500);
	};

	const elimanarGasto = id => {
		const gastosActulizados = gastos.filter(gasto => gasto.id !== id);
		setGastos(gastosActulizados);
	};
	return (
		<div className={modal ? 'fijar' : ''}>
			<Header
				gastos={gastos}
				presupuesto={presupuesto}
				setPresupuesto={setPresupuesto}
				isValidPresupuesto={isValidPresupuesto}
				setIsValidPresupuesto={setIsValidPresupuesto}
			/>
			{isValidPresupuesto && (
				<>
					<main>
						<ListadoGastos
							elimanarGasto={elimanarGasto}
							setGastoEditar={setGastoEditar}
							gastos={gastos}
						/>
					</main>

					<div className='nuevo-gasto'>
						<img
							src={IconoNuevoGasto}
							alt='icono nuevo gasto'
							onClick={handleNuevoGasto}
						/>
					</div>
				</>
			)}
			{modal && (
				<Modal
					setModal={setModal}
					animarModal={animarModal}
					setAnimarModal={setAnimarModal}
					guardarGasto={guardarGasto}
					gastoEditar={gastoEditar}
					setGastoEditar={setGastoEditar}
				/>
			)}
		</div>
	);
}

export default App;
