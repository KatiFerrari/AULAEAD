interface Mesa{
    id: number;
    codigo: string;
    numLugares: number;
}
const PerfilMesa: React.FC<{mesa: Mesa}> = ({mesa}) => {
    return (
        <div>
            <h1>Id: {mesa.id}</h1>
            <p>Código: {mesa.codigo}</p>
            <p>Número de lugares: {mesa.numLugares}</p>
        </div>
    )
}
 export default PerfilMesa;
