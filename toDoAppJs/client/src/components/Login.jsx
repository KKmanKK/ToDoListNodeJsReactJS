import React, { useContext, useEffect } from "react";
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

export const Login = observer(({ getData }) => {
  const [show, setShow] = useState(false);
  const [password, setPassword] = useState("");
  const { userStore } = useContext(Context);
  const [email, setEmail] = useState("");
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (password == "" || email == "") {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [password, email]);
  const login = async () => {
    userStore.login(email, password);
    getData();
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  return (
    <>
      <VStack>
        <FormControl isRequired>
          <FormLabel>Почта</FormLabel>
          <Input
            placeholder="email"
            type="email"
            value={email}
            onChange={emailHandler}
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
          isDisabled={disabled}
          onClick={login}
        >
          Аунтефикация
        </Button>
      </VStack>
    </>
  );
});
