import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Box, Container, HStack, Stack, Text } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import { useDisclosure, Progress } from "@chakra-ui/react";
import { Modalcomponent } from "./Modal";
import axios from "axios";
import { useContext } from "react";
import { Context } from "..";
export const ListItem = ({ task, getData }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const showOpen = () => {
    onClose();
  };
  const { todoStore } = useContext(Context);
  const deleteData = async () => {
    try {
      const res = await todoStore.delete(task.id);
      if (res.status === 200) {
        getData();
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Box
      backgroundColor="white"
      d="flex"
      textAlign="center"
      p={3}
      w="49vw"
      m="10px 0 15px 0"
      borderRadius="lg"
      boxShadow="base"
    >
      <HStack d="flex" justifyContent="space-between">
        <HStack spacing={4} w="30vh">
          <IconButton
            colorScheme="teal"
            variant="outline"
            size="sm"
            icon={<CheckIcon />}
          />
          {/* <CheckIcon cursor="pointer" /> */}
          <Text w="7em" fontSize="20px">
            {task.title}
          </Text>
        </HStack>
        <Box>
          <Progress
            w="20vw"
            colorScheme="teal"
            hasStripe
            value={task.prohress}
          />
        </Box>
        <HStack>
          <ButtonGroup
            gap="2"
            alignItems="center"
            justifyContent="center"
            flexWrap="wrap"
          >
            <Button colorScheme="teal" size="sm" onClick={onOpen}>
              Edit
            </Button>

            <Modalcomponent
              mode={"edit"}
              isOpenn={isOpen}
              showOpen={showOpen}
              task={task}
              getData={getData}
            />
            <Button colorScheme="teal" size="sm" onClick={deleteData}>
              Delete
            </Button>
          </ButtonGroup>
        </HStack>
      </HStack>
    </Box>
  );
};
