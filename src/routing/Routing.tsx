import { routes } from "./routes";
import { Route, Routes } from "react-router-dom";

export const Routing: React.FC = () => {
  return (
    <>
      <Routes>
        {routes.map((route) => (
          <Route
            path={route.path}
            key={route.name}
            element={<route.component />}
          ></Route>
        ))}
      </Routes>
    </>
  );
};
