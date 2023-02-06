import "./App.css";
import React from "react";
import { Box, Container, HStack, Text } from "@chakra-ui/react";

import axios from "axios";
import { useEffect, useState } from "react";
import { ListHeader } from "./components/ListHeader";
import { ListItem } from "./components/ListItem";
import { TodoService } from "./services/TodoService";
import { Authenticated } from "./components/Authenticated";

function App() {
  const user_emai = "todo@Test.ru";
  const [task, setTask] = useState(null);

  const getData = async () => {
    try {
      const todos = await TodoService.showTodos(user_emai);
      setTask(todos.data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => getData, []);

  const sortedTask = task?.sort(
    (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
  );
  console.log();
  return (
    <div className="App">
      <Container maxW="xl" centerContent>
        {/* <ListHeader getData={getData} />
        <Box borderRadius="lg" w="50vw" p={3} backgroundColor="Seashell">
          {sortedTask?.map((t) => (
            <ListItem key={t.id} task={t} getData={getData} />
          ))}
        </Box> */}
        <Authenticated />
      </Container>
    </div>
  );
}

export default App;
