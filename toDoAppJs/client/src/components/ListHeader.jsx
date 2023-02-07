import { Box, Container, HStack, Text } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Modalcomponent } from "./Modal";
import { useDisclosure } from "@chakra-ui/react";
import { useContext } from "react";
import { Context } from "..";
export const ListHeader = ({ getData, user_email }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const showOpen = () => {
    onClose();
  };
  const { userStore } = useContext(Context);
  return (
    <Box
      backgroundColor="Seashell"
      d="flex"
      textAlign="center"
      p={3}
      w="50vw"
      m="40px 0 15px 0"
      borderRadius="lg"
    >
      <HStack d="flex" justifyContent="space-between">
        <HStack d="flex" justifyContent="space-between">
          <Text color="teal" fontWeight="normal" fontSize="20px">
            ToDoLists
          </Text>
          <Text color="teal" fontWeight="bold" fontSize="20px">
            Email:
          </Text>
          <Text color="#6B46C1" fontWeight="normal" fontSize="20px">
            {` ${user_email}`}
          </Text>
        </HStack>
        <HStack>
          <ButtonGroup gap="2">
            <Button
              variant="outline"
              colorScheme="teal"
              size="sm"
              onClick={onOpen}
            >
              Add New
            </Button>

            <Modalcomponent
              mode={"create"}
              isOpenn={isOpen}
              showOpen={showOpen}
              getData={getData}
            />

            <Button
              colorScheme="teal"
              variant="outline"
              size="sm"
              onClick={() => userStore.logout()}
            >
              Logout
            </Button>
          </ButtonGroup>
        </HStack>
      </HStack>
    </Box>
  );
};
