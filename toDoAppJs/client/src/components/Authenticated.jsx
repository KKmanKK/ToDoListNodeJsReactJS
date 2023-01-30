import {Box, Tabs, Tab, TabList, TabPanels, TabPanel } from '@chakra-ui/react';
export const Authenticated =()=>{
    return(
        <>
         <Box>
          <Tabs variant='soft-rounded'>
            <TabList mb="1em">
              <Tab w="50%">Tab 1</Tab>
              <Tab w="50%">Tab 2</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <p>one!</p>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
        </>
    )
}