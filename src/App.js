import * as React from "react";
import { Admin, Resource } from "react-admin";
import { PostList, PostEdit, PostCreate } from "./posts";
import { UserList } from "./users";
import Dashboard from "./Dashboard";
import jsonServerProvider from "ra-data-json-server";
import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";
import authProvider from "./authProvider";
//import { Router, Link, Route, Routes } from "react-router-dom";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const App = () => (

  <Admin
  // 아래 3개 custom reducer 역할하는 컴포넌트들
    dashboard={Dashboard}
    authProvider={authProvider}
    dataProvider={dataProvider}
  >
    <Resource
      name="posts"
      list={PostList}
      edit={PostEdit}
      create={PostCreate}
      icon={PostIcon}
    />
    <Resource name="users" list={UserList} icon={UserIcon} />
  </Admin>
);

export default App;
