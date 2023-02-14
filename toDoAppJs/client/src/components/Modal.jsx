import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  useDisclosure,
  Button,
  ButtonGroup,
  FormControl,
  FormLabel,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { Context } from "..";
export const Modalcomponent = ({ mode, isOpenn, showOpen, task, getData }) => {
  const finalRef = React.useRef(null);
  const { todoStore, userStore } = useContext(Context);
  const labelStyles = {
    mt: "2",
    ml: "-2.5",
    fontSize: "sm",
  };

  const editMode = mode === "edit" ? true : false;
  const [data, setData] = useState({
    user_email: userStore.user.user.email ?? "TestTodo@mail.ru",
    title: editMode == true ? task.title : "",
    prohress: editMode == true ? task.prohress : 0,
  });
  const [titleDirty, setTitleDirty] = useState(false);
  const [titleError, setTitleError] = useState("Значение не может быть пустым");
  const [disabled, setDisabled] = useState(false);
  const blurHandler = (e) => {
    switch (e.target.name) {
      case "title":
        setTitleDirty(true);
        break;
    }
  };
  useEffect(() => {
    if (titleError == "") {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, []);
  const changeHendlerInput = (e) => {
    setData((prev) => {
      return {
        ...prev,
        title: e.target.value,
      };
    });
    setDisabled(false);
    if (e.target.value == "") {
      setTitleError("Значение не может быть пустым");
      setDisabled(true);
      return;
    }
    setTitleError("");
  };
  const changeHendlerSlider = (e) => {
    setData((prev) => {
      return {
        ...prev,
        prohress: e,
      };
    });
  };

  const createTask = async (e) => {
    e.preventDefault();

    try {
      const res = await todoStore.create(
        data.user_email,
        data.title,
        data.prohress
      );

      if (res.status === 200) {
        setData({
          user_email: userStore.user.user.email,
          title: "",
          prohress: 0,
        });
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
      const res = await todoStore.update(task.id, data.title, data.prohress);

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
                name="title"
                onBlur={blurHandler}
                placeholder="Task Title"
                value={data.title}
                onChange={changeHendlerInput}
              />
              {titleDirty && titleError && (
                <Text color="red">{titleError}</Text>
              )}
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
              isDisabled={disabled}
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
