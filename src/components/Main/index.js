import React, { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import Cards from "../Cards";
import Divider from "../Divider";
import Header from "../Header";

export default function Main() {
  const [firstProposition, setFirstProposition] = useState();
  const [secondProposition, setSecondProposition] = useState();
  const [displayResult, setDisplayResult] = useState(false);
  const [checked, setChecked] = useState();

  const res = Math.floor(Math.random() * (100 - 1 + 1)) + 1;

  // const data = {
  //   firstPropostion: [
  //     "have telekinesis ",
  //     "be royalty 1,000 years ago",
  //     "find true love today",
  //     "be in jail for five years",
  //   ],
  //   secondProposition: [
  //     "have telepathy",
  //     "average person today",
  //     "win the lottery next year",
  //     "be in a coma for a decade",
  //   ],
  // };

  const data = [
    ["have telekinesis", "have telepathy"],
    ["be royalty 1,000 years ago", "average person today"],
    ["find true love today", "win the lottery next year"],
    ["be in jail for five years", "be in a coma for a decade"],
  ];

  const randomNumber = Math.floor(Math.random() * data.length);

  useEffect(() => {
    if (!displayResult) {
      setFirstProposition(data[randomNumber][0]);
      setSecondProposition(data[randomNumber][1]);
    }
  }, [displayResult]);

  const handleOnPress = (card) => {
    setDisplayResult(!displayResult);
    if (card == 1) {
      setChecked(1);
    }
    if (card == 2) {
      setChecked(2);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Cards
        customStyles={{ backgroundColor: "blue" }}
        onPress={() => handleOnPress(1)}
        question={firstProposition}
        displayResult={displayResult}
        res={100 - res}
        checked={checked == 1 ? true : false}
      />
      <Divider />
      <Cards
        onPress={() => handleOnPress(2)}
        question={secondProposition}
        customStyles={{ backgroundColor: "red" }}
        displayResult={displayResult}
        res={res}
        checked={checked == 2 ? true : false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    flex: 1,
  },
});
