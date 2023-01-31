import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Box, Container, HStack, Text } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";

export const ListItem = ({ task }) => {
  return (
    <Box
      backgroundColor="white"
      d="flex"
      textAlign="center"
      p={3}
      w="45w"
      m="10px 0 15px 0"
      borderRadius="lg"
      boxShadow="base"
    >
      <HStack d="flex" justifyContent="space-between">
        <HStack spacing={4}>
          <IconButton
            colorScheme="teal"
            variant="outline"
            size="sm"
            icon={<CheckIcon />}
          />
          {/* <CheckIcon cursor="pointer" /> */}
          <Text fontSize="20px">{task.title}</Text>
        </HStack>
        <HStack>
          <ButtonGroup gap="2">
            <Button colorScheme="teal" size="sm">
              Edit
            </Button>
            <Button colorScheme="teal" size="sm">
              Delete
            </Button>
          </ButtonGroup>
        </HStack>
      </HStack>
    </Box>
  );
};
