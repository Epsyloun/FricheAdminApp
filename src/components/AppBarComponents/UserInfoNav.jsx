import React from "react";
import { Avatar, Button, Stack, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add"; //AÑADIR
import { ModalVenta } from "../../components/GenericComponents/ModalVenta";

//Styled Components
const StyledAddButton = {
  width: "fit-content",
  borderRadius: "20px",
};

const StyledAvatar = { width: "8em", height: "8em", objectFit: "cover" };

const StyledBackground = { backgroundColor: "background.container" };

//Arreglo de meses
const monthNames = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

//Componente de fecha
function Fecha() {
  const fecha = new Date();
  const diaf = fecha.getDate();
  const mes = monthNames[fecha.getMonth()];
  const ano = fecha.getFullYear();
  return (
	<Typography variant="subtitle1" color="text.accent">
	  {diaf} {mes} {ano}
	</Typography>
  );
}

function UserInfoNav() {
  const [open, setOpen] = React.useState(false);
  return (
	<>
	  <ModalVenta open={open} setOpen={setOpen} />
	  <Stack
		sx={StyledBackground}
		direction="column"
		alignItems="Center"
		spacing={1}
		pt={6}
		pb={2}
	  >
		<Fecha />
		<Avatar
		  alt="User Photo"
		  src="https://i.pinimg.com/736x/e7/0a/4c/e70a4c9a51ed64b04f71bbae16a9d91b.jpg"
		  sx={StyledAvatar}
		/>
	  </Stack>
	  <Stack pb={2} sx={StyledBackground}>
		<Typography variant="h5" align="center">
		  Rodrigo Diaz
		</Typography>
		<Typography variant="caption" align="center">
		  rodrigo.diaz8b@gmail.com
		</Typography>
		<Stack display="flex" alignItems="center" mt="0.5em">
		  <Button
			onClick={() => {
			  setOpen(!open);
			}}
			color="secondary"
			sx={StyledAddButton}
			startIcon={<AddIcon />}
			variant="outlined"
		  >
			Nueva venta
		  </Button>
		</Stack>
	  </Stack>
	</>
  );
}

export { Fecha, UserInfoNav };
