import PerfilMesa from '../interfaces/mesa';
const PaginaMesa = () =>{
    const mesa = {
        id: 1,
        codigo: '001',
        numLugares: 2,
    }
    return (
        <div>
            <h1>Página de Mesa</h1>
            <PerfilMesa mesa = {mesa}/>       
        </div>
    )
}
export default PaginaMesa