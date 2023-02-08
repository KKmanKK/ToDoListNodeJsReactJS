import { Box, Tabs, Tab, TabList, TabPanels, TabPanel } from "@chakra-ui/react";
import { Login } from "./Login";
import { SingUp } from "./SingUp";
export const Authenticated = ({ getData }) => {
  return (
    <>
      <Box
        backgroundColor="white"
        d="flex"
        textAlign="center"
        p={3}
        w="30vw"
        m="10px 0 15px 0"
        borderRadius="lg"
        boxShadow="base"
      >
        <Tabs colorScheme="teal" variant="soft-rounded">
          <TabList mb="1em">
            <Tab w="50%">Login</Tab>
            <Tab w="50%">SingUp</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login getData={getData} />
            </TabPanel>
            <TabPanel>
              <SingUp />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
};
