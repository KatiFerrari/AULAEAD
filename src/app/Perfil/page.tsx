import PerfilUsuario from '../interfaces/usuario';
const PaginaPerfil = () =>{
    
    const usuario = {
        nome: 'Maria Fernanda Alves dos Santos',
        idade: 17,
        email: 'mariafer@gmail.com',
        password: '030924',
        id: 1,
        tipo: 'adm'

    }
    return (
        <div>
            <h1>Página de Perfil</h1>
            <PerfilUsuario usuario={usuario}/>    
        </div>
    )
}
export default PaginaPerfil