import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
} from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
export const Modalcomponent = ({ mode, isOpenn, showOpen, task, getData }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);

  const labelStyles = {
    mt: "2",
    ml: "-2.5",
    fontSize: "sm",
  };

  const editMode = mode === "edit" ? true : false;
  const [data, setData] = useState({
    user_email: editMode ? task.user_email : "todo@Test.ru",
    title: editMode ? task.title : "",
    prohress: editMode ? task.prohress : 0,
  });
  const changeHendlerInput = (e) => {
    setData((prev) => {
      return {
        ...prev,
        title: e.target.value,
      };
    });
  };
  const changeHendlerSlider = (e) => {
    setData((prev) => {
      return {
        ...prev,
        prohress: e,
      };
    });
  };
  useEffect(() => {
    console.log(data.prohress);
  }, [data.prohress]);
  const createTask = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.SERVER_URL}/todo`, data);

      if (res.status === 200) {
        showOpen();
        getData();
      }
    } catch (e) {
      console.log(e);
    }
  };
  const updataTask = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`${process.env.SERVER_URL}/todo`, {
        id: task.id,
        title: data.title,
        prohress: data.prohress,
      });

      if (res.status === 200) {
        showOpen();
        getData();
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <Modal finalFocusRef={finalRef} isOpen={isOpenn} onClose={showOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl isRequired>
              <FormLabel>Task Title</FormLabel>

              <Input
                placeholder="Task Title"
                value={data.title}
                onChange={changeHendlerInput}
              />

              <Slider
                mt="6vh"
                value={data.prohress}
                aria-label="slider-ex-6"
                onChange={changeHendlerSlider}
              >
                <SliderMark value={25} {...labelStyles}>
                  25%
                </SliderMark>
                <SliderMark value={50} {...labelStyles}>
                  50%
                </SliderMark>
                <SliderMark value={75} {...labelStyles}>
                  75%
                </SliderMark>
                <SliderMark
                  value={data.prohress}
                  textAlign="center"
                  bg="blue.500"
                  color="white"
                  mt="-10"
                  ml="-5"
                  w="12"
                >
                  {data.prohress}%
                </SliderMark>
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="teal"
              size="sm"
              mr={3}
              onClick={editMode ? updataTask : createTask}
            >
              {editMode ? "Edit" : "Add New"}
            </Button>
            <Button colorScheme="teal" size="sm" onClick={showOpen}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
