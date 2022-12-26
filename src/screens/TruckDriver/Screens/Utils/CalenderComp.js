import { View, Text, StyleSheet, Alert } from "react-native";
import React, { useState } from "react";
import moment from "moment";
import { Calendar } from "react-native-calendars";
import { useEffect } from "react";

const CalenderComp = (props) => {
  const [date, setdate] = useState(null);
  const today = moment().format("YYYY-MM-DD");

  return (
    <View style={styles.Container}>
      <Calendar
        onDayPress={(data) => {
          setdate(data.dateString);
          props.func(data.dateString);
        }}
        markedDates={{
          [date]: { selected: true, selectedColor: "#00488d" },
        }}
        minDate={today}
      />
    </View>
  );
};

export default CalenderComp;

const styles = StyleSheet.create({
  Container: {
    paddingRight: 10,
  },
});
