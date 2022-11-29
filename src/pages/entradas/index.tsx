import { Income } from "@prisma/client";
import { useState } from "react";
import Botao from "../../components/button/Botao";
import Container from "../../components/Container";
import TabelaEntradas from "../../components/entradas/TabelaEntradas";
import Formulario from "../../components/forms/Formulario";
import Layout from "../../components/Layout";
import SideBar from "../../components/SideBar";
import Titulo from "../../components/Titulo";
import prisma from "../../lib/prisma";

interface EntradaProps {
  entrada: Income[];
}
interface EntradasProps {
  component: JSX.Element;
  children: any;
}

export default function Entradas(
  props: EntradasProps,
  { entrada }: EntradaProps
) {
  const entradas = entrada;
  const [entradaCadastrada, setEntradaCadastrada] = useState<Income>();
  const [visible, setVisible] = useState<"tabela" | "form">("tabela");

  function entradaSelecionada(entrada: Income) {
    setEntradaCadastrada(entradaCadastrada);
    console.log(`alterar...${entrada.name}`);
  }

  function entradaExcluida(entrada: Income) {
    console.log(`Excluir...${entrada.name}`);
  }
  function salvar(entrada: Income) {
    console.log(entrada);
    setVisible("tabela");
  }

  return (
    <div>
      <SideBar
        component={
          <Container
            component={<Titulo>Cadastro de Entradas</Titulo>}
            children={
              <div className="flex h-screen justify-center items-center bg-blue-900">
                <Layout titulo="Cadastro de entradas">
                  {visible === "tabela" ? (
                    <>
                      <div className="flex justify-end">
                        <Botao
                          className="mb-4"
                          onClick={() => setVisible("form")}
                        >
                          Cadastrar
                        </Botao>
                      </div>

                      <TabelaEntradas
                        entradas={entradas}
                        entradaSelecionada={entradaSelecionada}
                        entradaExcluida={entradaExcluida}
                      />
                    </>
                  ) : (
                    <Formulario
                      entrada={entrada[1]}
                      mudouNome={salvar}
                      cancelado={() => setVisible("tabela")}
                    />
                  )}
                </Layout>
              </div>
            }
          />
        }
      />
    </div>
  );
}

export const getServerSideProps = async () => {
  const entradas = await prisma.income.findMany({
    select: {
      name: true,
      description: true,
    },
    orderBy: { name: "asc" },
  });
  return {
    props: {
      entradas: JSON.parse(JSON.stringify(entradas)),
    },
  };
};
