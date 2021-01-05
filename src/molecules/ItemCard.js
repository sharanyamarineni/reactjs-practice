import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { CardHeader, IconButton, CardMedia } from "@material-ui/core";
import CardButton from '../atoms/CardButton'
import ShareIconButton from "../atoms/ShareIconButton";


const ItemCard = props => {
  const { title, description, imageUrl } = props;
    return (
      <Card>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <ShareIconButton />
          </IconButton>
        }
        title={title}
      />
      <CardMedia style={{ height: "300px" }} image={imageUrl} />
      <CardContent>
        <Typography variant="body2" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <CardButton size="small">BUY NOW</CardButton>
        <CardButton size="small" >OFFER</CardButton>
      </CardActions>
    </Card>
      );
}

export default ItemCard