import LogIn from "../components/authorization/LogIn";
import History from "../components/history/History";
import MainPage from "../components/mainPage/MainPage";

export enum locations {
  MAIN = "/",
  LOGIN = "/login",
  HISTORY = "/history",
}

interface SubPath {
  path: locations;
  component: React.ComponentType;
  subPath?: SubPath[];
}

export interface RouterProps {
  path: locations;
  component: React.ComponentType;
  name?: string;
  exact?: boolean;

  subPath?: SubPath[];
}

export const routes: RouterProps[] = [
  {
    path: locations.MAIN,
    component: MainPage,
    name: "Main",
    exact: true,

    // subPath: [
    //   {
    //     path: locations.LIST_OF_TASKS,
    //     component: ListOfTasks,
    //   },
    // ],
  },
  {
    path: locations.LOGIN,
    component: LogIn,
    name: "LogIn",
    exact: true,
  },
  {
    path: locations.HISTORY,
    component: History,
    name: "History",
    exact: true,
  },
];
