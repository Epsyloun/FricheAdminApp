import React from "react";
import "../index.css";

import { Routes, Route, useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";

import { InicioPages } from "../pages/InicioPages";
import { DeudasPages } from "../pages/DeudasPages";
import { PedidosPages } from "../pages/PedidosPages";
import { FinanzasPages } from "../pages/FinanzasPages";
import { GraficosPages } from "../pages/GraficosPages";
import { InventarioPages } from "../pages/InventarioPages";
import { AjustesPages } from "../pages/AjustesPages";
import { MobilePages } from "../pages/MobilePages";
import { AppBarContainer } from "../containers/AppBarContainer";
import { FooterContainer } from "../containers/FooterContainer";
import NotFound from "../pages/NotFound";

function MainContainer() {
  //Menu handler
  const [pageIndex, setPageIndex] = React.useState(0);
  let navigate = useNavigate();
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (pageIndex === 0) {
      navigate("/");
    } else if (pageIndex === 1) {
      navigate("/deudas");
    } else if (pageIndex === 2) {
      navigate("/pedidos");
    } else if (pageIndex === 3) {
      navigate("/inventario");
    } else if (pageIndex === 4) {
      navigate("/finanzas");
    } else if (pageIndex === 5) {
      navigate("/graficos");
    } else if (pageIndex === 6) {
      navigate("/ajustes");
    } else if (pageIndex === 7) {
      navigate("/mobilePages");
    } else {
      navigate("*");
    }
  }, [pageIndex]);
  return (
    <Box backgroundColor="background.default">
      <div className="big-container">
        <div id="main-container">
          <AppBarContainer pageIndex={pageIndex} setPageIndex={setPageIndex} />
          <Routes>
            <Route path="/" element={<InicioPages />} />
            <Route path="/deudas" element={<DeudasPages />} />
            <Route path="/pedidos" element={<PedidosPages />} />
            <Route path="/finanzas" element={<FinanzasPages />} />
            <Route path="/graficos" element={<GraficosPages />} />
            <Route path="/inventario" element={<InventarioPages />} />
            <Route path="/ajustes" element={<AjustesPages />} />
            <Route
              path="/mobilePages"
              element={
                <MobilePages
                  pageIndex={pageIndex}
                  setPageIndex={setPageIndex}
                />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <FooterContainer />
      </div>
    </Box>
  );
}

export default MainContainer;