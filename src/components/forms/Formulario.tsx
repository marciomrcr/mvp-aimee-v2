import { Income } from "@prisma/client";
import Router from "next/router";
import { useState } from "react";
import Botao from "../button/Botao";
import Entrada from "./Entrada";

interface FormProps {
  entrada: Income;
  mudouNome?: (entrada: Income) => void;
  cancelado?: () => void;
}

interface FormData {
  name: string;
  description: string;
  id: string;
}

interface entradas {
  entradas: {
    name: string;
    description: string;
    id: string;
  }[];
}

const deletar = async function (id: string): Promise<void> {
  await fetch(`/api/entradas/${id}`, {
    method: "DELETE",
  });
  await Router.push("/api/entradas/");
  return;
};

export default function Formulario(props: FormProps) {
  const id = props.entrada?.id;
  const [nome, setNome] = useState(
    props.entrada?.name ?? "Sem dados para exibir!"
  );

  const [form, setForm] = useState<FormData>({
    name: "",
    description: "",
    id: "",
  });
  const [descricao, setDescricao] = useState(
    props.entrada?.description ?? "Sem dados para exibir!"
  );
  return (
    <div>
      <Entrada texto="entrada" valor={nome} mudouValor={setNome} />
      <Entrada texto="Descrição" valor={descricao} mudouValor={setDescricao} />

      <div className="flex justify-end mt-7">
        <Botao
          className="bg-blue-600 mr-2"
          //onClick={() => setForm()}
        >
          {id ? "Alterar" : "Salvar"}
        </Botao>
        <Botao onClick={props.cancelado}>Cancelar</Botao>
      </div>
    </div>
  );
}

// const getServerSideProps = async () => {
//   const entrada = await prisma.Income.findMany();
//   return {
//     props: {
//       entrada: JSON.parse(JSON.stringify(entrada)),
//     },
//   };
// };
