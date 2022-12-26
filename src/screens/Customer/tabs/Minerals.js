import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import React from "react";
import CustomerDealCard from "./CustomerDealCard";

import SearchBar from "./Utils/SearchBar/SearchBar";
//const long=require("../assets/long.png")

const Minerals = () => {
  return (
    <>
      <SearchBar />
      <ScrollView>
        <CustomerDealCard
          start="Gorakhpur,Uttar Pradesh"
          end="Akbarpur,Uttar Pradesh"
          product="Balu"
          owner="Chabra Traders"
          driver="Ashfaq Singh"
          dnum="9838252488"
          dist={885}
          ton={20}
          tyre={16}
        />
        <CustomerDealCard
          start="Banda,Uttar Pradesh"
          end="Akbarpur,Uttar Pradesh"
          product="Moorang"
          owner="Central Traders"
          driver="Gulshan Yadav"
          dnum="9838252488"
          dist={1263}
          ton={18}
          tyre={12}
        />
        <CustomerDealCard
          start="Gorakhpur,Uttar Pradesh"
          end="Akbarpur,Uttar Pradesh"
          product="Balu"
          owner="Chabra Traders"
          driver="Ashfaq Singh"
          dnum="9838252488"
        />
        <CustomerDealCard
          start="Banda,Uttar Pradesh"
          end="Akbarpur,Uttar Pradesh"
          product="Moorang"
          owner="Central Traders"
          driver="Gulshan Yadav"
          dnum="9838252488"
        />

        <CustomerDealCard
          start="Gorakhpur,Uttar Pradesh"
          end="Akbarpur,Uttar Pradesh"
          product="Balu"
          owner="Chabra Traders"
          driver="Ashfaq Singh"
          dnum="9838252488"
        />
        <CustomerDealCard
          start="Banda,Uttar Pradesh"
          end="Akbarpur,Uttar Pradesh"
          product="Moorang"
          owner="Central Traders"
          driver="Gulshan Yadav"
          dnum="9838252488"
        />
        <CustomerDealCard
          start="Gorakhpur,Uttar Pradesh"
          end="Akbarpur,Uttar Pradesh"
          product="Balu"
          owner="Chabra Traders"
          driver="Ashfaq Singh"
          dnum="9838252488"
        />
      </ScrollView>
    </>
  );
};

export default Minerals;
