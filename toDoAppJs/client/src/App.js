import "./App.css";
import React, { useContext } from "react";
import { Box, Container, HStack, Spinner } from "@chakra-ui/react";

import axios from "axios";
import { useEffect, useState } from "react";
import { ListHeader } from "./components/ListHeader";
import { ListItem } from "./components/ListItem";
import { Authenticated } from "./components/Authenticated";
import { Context } from ".";
import { observer } from "mobx-react-lite";
import { toJS } from "mobx";

function App() {
  const { userStore, todoStore } = useContext(Context);
  const [task, setTask] = useState();

  const getData = async () => {
    try {
      await todoStore.show(toJS(userStore.user?.user?.email));
      setTask(toJS(todoStore.todo.data));
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
      userStore.checkAuth();
      getData();
    }
  }, []);
  useEffect(() => {
    getData();
  }, [userStore.isAuth]);

  const sortedTask = task?.sort(
    (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
  );

  if (userStore.isLoading) {
    return (
      <div className="App">
        <Container maxW="xl" centerContent>
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Container>
      </div>
    );
  }

  if (!userStore.isAuth) {
    return (
      <div className="App">
        <Container maxW="xl" centerContent>
          <Authenticated getData={getData} />
        </Container>
      </div>
    );
  }

  return (
    <div className="App">
      <Container maxW="xl" centerContent>
        <ListHeader getData={getData} user_email={userStore.user.user.email} />
        <Box borderRadius="lg" w="50vw" p={3} backgroundColor="Seashell">
          {sortedTask?.map((t) => (
            <ListItem key={t.id} task={t} getData={getData} />
          ))}
        </Box>
      </Container>
    </div>
  );
}

export default observer(App);
