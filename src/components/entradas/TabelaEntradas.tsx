import { Income } from "@prisma/client";
import { IconDelete, IconEdit } from "../Icones";

interface EntradaTabelaProps {
  entradas: Income[];
  entradaSelecionada?: (entrada: Income) => void;
  entradaExcluida?: (entrada: Income) => void;
}
export default function TabelaEntradas(props: EntradaTabelaProps) {
  const exibirAcoes = props.entradaSelecionada || props.entradaExcluida;
  function renderizarCabecalho() {
    return (
      <tr>
        <th className=" text-left p-4">Nome</th>
        <th className=" text-left p-4">Descrição</th>
        {exibirAcoes ? <th className=" p-4">Ações</th> : false}
      </tr>
    );
  }

  function renderizarDados() {
    return props.entradas?.map((entrada, i) => {
      return (
        <tr
          key={entrada.id}
          className={`${i % 2 === 0 ? "bg-gray-100" : "bg-gray-300"}`}
        >
          <td className=" text-left p-4">{entrada.name}</td>
          <td className=" text-left p-4">{entrada.description}</td>
          {exibirAcoes ? renderizarAcoes(entrada) : false}
        </tr>
      );
    });
  }

  function renderizarAcoes(entrada: Income) {
    return (
      <td className="flex justify-center">
        {props.entradaSelecionada ? (
          <button
            onClick={() => props.entradaSelecionada?.(entrada)}
            className="flex justify-center items-center text-green-600 rounded-full p-2 m-1 hover:bg-blue-50"
          >
            {IconEdit}
          </button>
        ) : (
          false
        )}
        {props.entradaExcluida ? (
          <button
            onClick={() => props.entradaExcluida?.(entrada)}
            className="flex justify-center items-center text-red-500 rounded-full p-2 m-1 hover:bg-blue-50"
          >
            {IconDelete}
          </button>
        ) : (
          false
        )}
      </td>
    );
  }

  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead className="text-gray-100 bg-gradient-to-r from-blue-900 to-black">
        {renderizarCabecalho()}
      </thead>

      <tbody>{renderizarDados()}</tbody>
    </table>
  );
}
