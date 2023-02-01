import { Box, Container, HStack, Text } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Modalcomponent } from "./Modal";
import { useDisclosure } from "@chakra-ui/react";
export const ListHeader = ({ getData }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const showOpen = () => {
    onClose();
  };
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
        <Text color="teal" fontWeight="normal" fontSize="20px">
          ToDoLists
        </Text>
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

            <Button colorScheme="teal" variant="outline" size="sm">
              SigUP
            </Button>
          </ButtonGroup>
        </HStack>
      </HStack>
    </Box>
  );
};
