import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

export default function Home() {

  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Bob', 12, '2'),
    new Cliente('Carlos', 59, '3'),
    new Cliente('David', 23, '4'),
    new Cliente('Ed', 47, '5'),
    new Cliente('Fausto', 19, '6'),
  ]

  function clienteSelecionado(cliente: Cliente){
    console.log(cliente.nome)
  }

  function clienteExcluido(cliente: Cliente){
    console.log(`Excluir ${cliente.nome}!!!`)
  }

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
    <Layout titulo="Cadastro de usuarios">
      <Tabela clientes={clientes} clienteSelecionado={clienteSelecionado} clienteExcluido={clienteExcluido}></Tabela>
    </Layout>
    </div>
  )
}
