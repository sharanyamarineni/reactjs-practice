import { Grid } from "@material-ui/core";
import React from "react";
import ItemCard from "./ItemCard";

const ItemMakerCard = props => {
    return (
      <Grid item xs={12} sm={4}>
        <ItemCard key={props.itemObj.id}  {...props.itemObj} />
      </Grid>
    );
  };

const Content = () => {

    const itemsList = [
        {
            id: 1,
            title: "MacBook",
            price: "90,000",
            description:
              "The MacBook Air is a line of laptop computers developed and manufactured by Apple Inc.",
            imageUrl:
              "https://pngimg.com/uploads/laptop/laptop_PNG5903.png"
          },
          {
            id: 2,
            title: "Sony Laptop",
            price: "60,000",
            description:
              "Sony Laptop has a display for your daily needs. This laptop is powered by Intel Core i3.",
            imageUrl:
              "https://pngimg.com/uploads/laptop/laptop_PNG5926.png"
          },
          {
            id: 3,
            title: "Asus Laptop",
            price: "40,000",
            description:
              "Asus laptop is powered by Intel Core i5-7200U (7th Gen) processor, coupled with 8 GB of RAM.",
            imageUrl:
              "https://pngimg.com/uploads/laptop/laptop_PNG5902.png"
          }
    ]
   

      return (
        <Grid container spacing={2}>
          {itemsList.map(itemObj => <ItemMakerCard itemObj={itemObj} key={itemObj.id} />)}
        </Grid>
      );
};

export default Content;