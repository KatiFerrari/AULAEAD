import PerfilReserva from '../interfaces/reserva';

const PaginaReserva = () =>{
    const reserva = {
        id: 1,
        usuario_id: 1,
        mesa_id: 1,
        data: '03/10/2024',
        n_pessoas: 5,
        status: true,
    }
    return (
        <div>
            <h1>Página de Reserva</h1>
            <PerfilReserva reserva={reserva}/>    
        </div>
    )
}
//
export default PaginaReserva