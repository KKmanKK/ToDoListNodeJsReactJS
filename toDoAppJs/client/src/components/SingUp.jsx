import React from "react";
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

export default function SingUp() {
  const [showPas, setShowPas] = useState(false);
  const [showPasConfirm, setShowPasConfirm] = useState(false);

  return (
    <>
      <VStack>
        <FormControl isRequired>
          <FormLabel>Почта</FormLabel>
          <Input placeholder="email" type="email" />
        </FormControl>

        <FormControl id="pass" isRequired>
          <FormLabel>Пароль</FormLabel>
          <InputGroup>
            <Input
              placeholder="Введите пароль"
              type={showPas ? "text" : "password"}
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
        <FormControl id="pass" isRequired>
          <FormLabel>Потвржение пароля</FormLabel>
          <InputGroup>
            <Input
              placeholder="Введите пароль"
              type={showPasConfirm ? "text" : "password"}
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
        <Button h="1.7em" m="20px 0 0 0" colorScheme="teal" size="lg">
          Регистрация
        </Button>
      </VStack>
    </>
  );
}
