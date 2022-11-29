import Tabela from "../Dashboard";
import Layout from "../Layout";

interface LayoutProps {
  titulo: string;
  children: any;
}

export default function Entrada() {
  return (
    <Layout titulo="Dashboard">
      <Tabela />
    </Layout>
  );
}
