import moment from "moment";
import { Flex, Pressable, Text, Box, VStack } from "native-base";
import React, { useEffect, useState } from "react";
import { IPickerProps } from "./types";

const TimeSlotPicker = (props: IPickerProps) => {
  const [slots, setSlots] = useState([]);
  const [weekdaySlots, setWeekdaySlots] = useState([]);
  const [weekendSlots, setWeekendSlots] = useState([]);

  const createTimeslots = (fromTime: string, toTime: string) => {
    let startTime = moment(fromTime, "HH:mm");
    let endTime = moment(toTime, "HH:mm");
    if (endTime.isBefore(startTime)) {
      endTime.add(1, "day");
    }
    let arr: any = [];
    while (startTime <= endTime) {
      arr.push(startTime.format("HH:mm"));
      startTime.add(15, "minutes");
    }
    return arr;
  };

  useEffect(() => {
    //show if it is weekday or weekend
    const weekday = moment().weekday();
    if (weekday === 0 || weekday === 6) {
      setSlots(createTimeslots(props.weekendFromTime, props.weekendToTime));
    } else {
      setSlots(createTimeslots(props.weekDayFromTime, props.weekDayToTime));
    }
  }, []);

  return (
    <Box>
      <VStack space={1} alignItems={"center"}>
        <Text fontSize="xl" fontWeight="bold" mb={1}>
          Select a Time Slot
        </Text>
        <Text fontSize="sm" mb={2}>
          {moment().format("dddd, MMMM Do YYYY")}
        </Text>
      </VStack>
      <Flex
        direction="row"
        wrap={"wrap"}
        alignItems={"center"}
        justifyContent={"center"}
        p={2}
        rounded="2xl"
      >
        {slots.map((slot: string, index: number) => (
          <Pressable
            onPress={() => {
              return props.slotResult(slot);
            }}
            key={index}
            p={2}
            m={1}
            _dark={{
              bg: "blueGray.800",
            }}
            _light={{
              bg: "blueGray.300",
            }}
          >
            <Text>{slot}</Text>
          </Pressable>
        ))}
      </Flex>
    </Box>
  );
};
export default TimeSlotPicker;
