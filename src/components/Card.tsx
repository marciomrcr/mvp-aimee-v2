import BusinessIcon from "@mui/icons-material/Business";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function MediaCard(props: any) {
  return (
    <Card
      sx={{
        marginBottom: "10px",
        marginLeft: "10px",
        maxWidth: 345,
      }}
    >
      <div className="h-10 flex p-3 text-gray-300  space-x-2 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ">
        <BusinessIcon className="text-gray-300" />
        <p className="text-gray-300  ">Fornecedores</p>
      </div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of reptiles, with over 6,000 species,
          ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </Card>
  );
}
