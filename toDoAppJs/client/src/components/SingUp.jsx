import React from "react";
import {
  Input,
  InputGroup,
  InputRightElement,
  Button,
  VStack,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { ViewIcon } from "@chakra-ui/icons";

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { useState } from "react";
import { useContext } from "react";
import { Context } from "..";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";

export const SingUp = observer(() => {
  const [showPas, setShowPas] = useState(false);
  const [showPasConfirm, setShowPasConfirm] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { userStore } = useContext(Context);
  const [disabled, setDisabled] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState("Значение не может быть пустым");
  const [passwordError, setPasswordError] = useState(
    "Значение не может быть пустым"
  );
  const [comfirmPasswordDirty, setComfirmPasswordDirty] = useState(false);
  const [comfirmPasswordError, setComfirmPasswordError] = useState(
    "Значение не может быть пустым"
  );

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
      case "comfirmPassword":
        setComfirmPasswordDirty(true);
        break;
    }
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Некорректный emeil");
    } else {
      setEmailError("");
    }
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 3 || e.target.value.length > 12) {
      setPasswordError("Пароль должен быть длиннее 3 и не длинее 12");
    } else {
      setPasswordError("");
    }
  };
  const comfirmPasswordHandler = (e) => {
    setConfirmPassword(e.target.value);
    if (e.target.value !== password) {
      setComfirmPasswordError("Пароли не совпадают");
    } else {
      setComfirmPasswordError("");
    }
  };
  useEffect(() => {
    if (comfirmPasswordError == "" && passwordError == "" && emailError == "") {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [comfirmPasswordError, passwordError, emailError]);
  const submitRegFrom = () => {
    userStore.registration(email, password);
  };
  return (
    <>
      <VStack>
        <FormControl isRequired>
          <FormLabel>Почта</FormLabel>
          <Input
            name="email"
            onBlur={blurHandler}
            placeholder="email"
            type="email"
            value={email}
            onChange={emailHandler}
          />
        </FormControl>
        {emailDirty && emailError && <Text color="red">{emailError}</Text>}
        <FormControl id="pass" isRequired>
          <FormLabel>Пароль</FormLabel>
          <InputGroup>
            <Input
              name="password"
              onBlur={blurHandler}
              placeholder="Введите пароль"
              type={showPas ? "text" : "password"}
              value={password}
              onChange={passwordHandler}
            ></Input>
            <InputRightElement w="4.5rem">
              <IconButton
                colorScheme="teal"
                borderRadius="lg"
                variant={showPas ? "outline" : "solid"}
                size="sm"
                h="1.7em"
                icon={<ViewIcon />}
                onClick={() => setShowPas((showP) => !showP)}
              />
            </InputRightElement>
          </InputGroup>
        </FormControl>
        {passwordDirty && passwordError && (
          <Text color="red">{passwordError}</Text>
        )}
        <FormControl id="pass" isRequired>
          <FormLabel>Потвржение пароля</FormLabel>
          <InputGroup>
            <Input
              onBlur={blurHandler}
              name="comfirmPassword"
              placeholder="Введите пароль"
              type={showPasConfirm ? "text" : "password"}
              value={confirmPassword}
              onChange={comfirmPasswordHandler}
            ></Input>
            <InputRightElement w="4.5rem">
              <IconButton
                colorScheme="teal"
                borderRadius="lg"
                variant={showPasConfirm ? "outline" : "solid"}
                size="sm"
                h="1.7em"
                icon={<ViewIcon />}
                onClick={() => setShowPasConfirm((showP) => !showP)}
              />
            </InputRightElement>
          </InputGroup>
        </FormControl>
        {comfirmPasswordDirty && comfirmPasswordError && (
          <Text color="red">{comfirmPasswordError}</Text>
        )}
        <Button
          h="1.7em"
          m="20px 0 0 0"
          colorScheme="teal"
          isDisabled={disabled}
          size="lg"
          onClick={submitRegFrom}
        >
          Регистрация
        </Button>
      </VStack>
    </>
  );
});
