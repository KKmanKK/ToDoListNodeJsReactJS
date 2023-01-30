import './App.css';
import { Box, Container, HStack, Text } from '@chakra-ui/react'

import { Authenticated } from './components/Authenticated';
function App() {
  return (
    <div className='App'>
      <Container maxW="xl" centerContent>
        <Box backgroundColor="Seashell" d="flex"
          textAlign="center"
          p={3}
          w="50vw"
          m="40px 0 15px 0"
          borderRadius="lg">
          <HStack d="flex" justifyContent="space-between">
            <Text fontSize="20px">ToDoLists</Text>
            <HStack>
              <Box backgroundColor="white"
                p={2}
                borderRadius="10px"
                cursor="pointer">Add New</Box>

              <Box backgroundColor="white"
                p={2}
                  borderRadius="10px"
                cursor="pointer">SigUP</Box>
            </HStack>
          </HStack>
        </Box>
        {/* <Authenticated /> */}
      </Container>
    </div>
  );
}

export default App;
