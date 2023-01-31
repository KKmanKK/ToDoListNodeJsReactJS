import { Box, Container, HStack, Text } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Modalcomponent } from "./Modal";
export const ListHeader = () => {
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
            <Modalcomponent />
            <Button colorScheme="teal" variant="outline" size="sm">
              SigUP
            </Button>
          </ButtonGroup>
        </HStack>
      </HStack>
    </Box>
  );
};
