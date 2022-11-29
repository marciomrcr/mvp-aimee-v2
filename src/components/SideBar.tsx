import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import BusinessIcon from "@mui/icons-material/Business";
import CategoryIcon from "@mui/icons-material/Category";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import ReplayCircleFilledIcon from "@mui/icons-material/ReplayCircleFilled";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import TaskIcon from "@mui/icons-material/Task";
import Link from "next/link";
import Container from "./Container";

interface SideBarProps {
  component: JSX.Element;
  children?: any;
}

export default function SideBar(props: SideBarProps) {
  return (
    <>
      <div className="relative min-h-screen md:flex">
        {/* mobile menu bar */}
        <div className="bg-gray-800 text-gray-100 flex justify-between md:hidden">
          {/* logo */}
          <a href="#" className="block p-4 text-white font-bold">
            Aimée Stylus
          </a>
          {/* mobile menu button */}
          <button className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-700">
            <svg
              className="h-5 w-5"
              xmlns="http:www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        {/* sidebar */}
        <div className="sidebar bg-gray-800 text-blue-100 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
          {/* logo */}
          <a href="#" className="text-white flex items-center space-x-2 px-4">
            <svg
              className="w-8 h-8"
              xmlns="http:www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              />
            </svg>
            <span className="text-2xl font-extrabold">Aimée Stylus</span>
          </a>
          {/* nav */}
          <nav>
            <div className="h-10">
              <Link href="/">
                <div className="flex p-3 text-gray-300  space-x-2 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ">
                  <DonutLargeIcon className=" text-gray-300" />
                  <p className=" ">Dashboard</p>
                </div>
              </Link>
            </div>
            <div className="h-10">
              <div className="flex p-3 text-gray-300  space-x-2 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ">
                <MonetizationOnIcon className="text-gray-300" />
                <p className="text-gray-300  ">Vendas</p>
              </div>
            </div>
            <div className="h-10">
              <Link href="/entradas">
                <div className="flex p-3 text-gray-300  space-x-2 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ">
                  <ArrowUpwardIcon className="text-gray-300" />
                  <p className="text-gray-300  ">Entradas</p>
                </div>
              </Link>
            </div>
            <div className="h-10">
              <div className="flex p-3 text-gray-300  space-x-2 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ">
                <ArrowDownwardIcon className="text-gray-300" />
                <p className="text-gray-300  ">Despesas</p>
              </div>
            </div>
            <div className="h-10">
              <div className="flex p-3 text-gray-300  space-x-2 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ">
                <ShoppingCartIcon className="text-gray-300" />
                <p className="text-gray-300  ">Compras</p>
              </div>
            </div>
            <div className="">
              <h1 className="text-gray-400">Estoque</h1>
              <div className="h-10">
                <div className="flex p-3 text-gray-300  space-x-2 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer">
                  <ShoppingBasketIcon className="text-gray-300" />
                  <p className="text-gray-300  ">Produtos</p>
                </div>
              </div>
              <div className="">
                <div className="flex p-3 text-gray-300  space-x-2 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ">
                  <ReplayCircleFilledIcon className="text-gray-300" />
                  <p className="text-gray-300  ">Estoque</p>
                </div>
              </div>
            </div>
            <div className="">
              <h1 className="text-gray-400">Cadastros</h1>
              <div className="">
                <div className="h-10 flex p-3 text-gray-300  space-x-2 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ">
                  <PersonAddIcon className="text-gray-300" />
                  <p className="text-gray-300  ">Clientes</p>
                </div>
                <div className="h-10 flex p-3 text-gray-300  space-x-2 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ">
                  <BusinessIcon className="text-gray-300" />
                  <p className="text-gray-300  ">Fornecedores</p>
                </div>
                <div className="h-10 flex p-3 text-gray-300  space-x-2 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ">
                  <CategoryIcon className="text-gray-300" />
                  <p className="text-gray-300  ">Categorias</p>
                </div>
                <div className="flex p-3 text-gray-300  space-x-2 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ">
                  <TaskIcon className="text-gray-300" />
                  <p className="text-gray-300  ">Tarefas</p>
                </div>
              </div>
            </div>
          </nav>
        </div>
        {/* Dashboard */}

        <div>
          <Container children={props.children} component={props.component} />
        </div>
      </div>
    </>
  );
}
