import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./pages/Home";
import { ACasa } from "./pages/ACasa";
import { ODaime } from "./pages/ODaime";
import { GuiaDoVisitante } from "./pages/GuiaDoVisitante";
import { Agenda } from "./pages/Agenda";
import { Contato } from "./pages/Contato";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "a-casa", Component: ACasa },
      { path: "o-daime", Component: ODaime },
      { path: "guia-do-visitante", Component: GuiaDoVisitante },
      { path: "agenda", Component: Agenda },
      { path: "contato", Component: Contato },
    ],
  },
]);
