import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";

interface ContainerProps {
  component: JSX.Element;
  children: any;
}

export default function SimpleContainer(props: ContainerProps) {
  return (
    <>
      <div className="flex">
        <CssBaseline />
        <Container className="w-screen">
          <Box
            sx={{
              paddingTop: "12px",
              paddingBottom: "30px",
              bgcolor: "#cfe8fc",
              height: "100vh",
            }}
          >
            <div>{props.component}</div>
            <div>{props.children}</div>
            {/* <Cards title="Vendas" value={10} />
          <Cards title="Entradas" value={10} />
          <Cards title="Saída" value={10} />
          <Cards title="Compras" value={10} />
          <Cards title="Vendas" value={10} />
          <Cards title="Produtos" value={10} /> */}
          </Box>
        </Container>
      </div>
    </>
  );
}
