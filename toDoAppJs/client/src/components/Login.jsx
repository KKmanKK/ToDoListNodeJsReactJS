import React, { useContext } from "react";
import {
  Input,
  InputGroup,
  InputRightElement,
  Button,
  VStack,
  IconButton,
} from "@chakra-ui/react";
import { ViewIcon } from "@chakra-ui/icons";

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { useState } from "react";
import { Context } from "..";
import { observer } from "mobx-react-lite";

export const Login = observer(() => {
  const [show, setShow] = useState(false);
  const [password, setPassword] = useState("");
  const { userStore } = useContext(Context);
  const [email, setEmail] = useState("");

  return (
    <>
      <VStack>
        <FormControl isRequired>
          <FormLabel>Почта</FormLabel>
          <Input
            placeholder="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>

        <FormControl id="pass" isRequired>
          <FormLabel>Пароль</FormLabel>
          <InputGroup>
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Введите пароль"
              type={show ? "text" : "password"}
            ></Input>
            <InputRightElement w="4.5rem">
              <IconButton
                colorScheme="teal"
                borderRadius="lg"
                variant={show ? "outline" : "solid"}
                size="sm"
                h="1.7em"
                icon={<ViewIcon />}
                onClick={() => setShow((sho) => !sho)}
              />
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <Button
          h="1.7em"
          m="20px 0 0 0"
          colorScheme="teal"
          size="lg"
          onClick={() => userStore.login(email, password)}
        >
          Аунтефикация
        </Button>
      </VStack>
    </>
  );
});
