import { Income } from "@prisma/client";
import Botao from "../../components/button/Botao";
import { IconDelete, IconEdit } from "../../components/Icones";
import SideNavbar from "../../components/SideBar";
import prisma from "../../lib/prisma";

type Props = {
  entradas: Income[];
};

const EntradasDashboard: React.FC<Props> = (props) => {
  return (
    <div className=" flex justify-center">
      <SideNavbar />

      <div className="">
        <Botao className="mt-2 mb-2" children={<button>Cadastrar</button>} />

        <table className=" rounded-xl w-auto ">
          <thead className="w-full justify-between text-gray-100 bg-gradient-to-r from-blue-900 to-black">
            <tr>
              <th className=" text-left p-4">Nome</th>
              <th className=" text-left p-4">Descrição</th>
              <th className=" text-left p-2">Ações</th>
            </tr>
          </thead>
          <tbody>
            {props.entradas.map((entrada, i) => (
              <tr
                key={entrada.id}
                className={`${i % 2 === 0 ? "bg-gray-100" : "bg-gray-300"}`}
              >
                <td className=" text-left p-4">{entrada.name}</td>
                <td className=" text-left p-4">{entrada.description}</td>
                <td className="flex justify-center">
                  <button
                    // onClick={() =>() }
                    className="flex justify-center items-center text-green-600 rounded-full p-2 m-1 hover:bg-blue-50"
                  >
                    {IconEdit}
                  </button>

                  <button
                    // onClick={() => ()}
                    className="flex justify-center items-center text-red-500 rounded-full p-2 m-1 hover:bg-blue-50"
                  >
                    {IconDelete}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

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

export default EntradasDashboard;
