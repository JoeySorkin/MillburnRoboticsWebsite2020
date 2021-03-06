import React from "react";
import {
  Card,
  Paper,
  Typography,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import colors from "../Core/colors";
import { TeamInfo } from "./Profiles/Profiles";
import { Link } from "react-router-dom";
interface TeamCardProps {
  name: string;
  children?: string;
  color: string;
}
function truncateString(str, num) {
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num) + "...";
}

export default function TeamsCard(props: TeamCardProps) {
  const useStyles = makeStyles((theme) => ({
    wrapper: {
      height: "100%",
      backgroundColor: colors.green,
    },
    title: {
      fontSize: "35px",
    },
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  }));
  const classes = useStyles();
  const team: any = TeamInfo.get(props.name);
  return (
    <Card className={classes.root}>
      <CardActionArea href={`/teams/${props.name}`}>
        {/* <CardMedia
            className={classes.media}
            image="./placeholder.png"
            title="Contemplative Reptile"
          /> */}
        <CardContent style={{ backgroundColor: props.color }}>
          <Typography gutterBottom variant="h3" component="h2">
            Team {team.name}
          </Typography>
          <Typography
            style={{ fontSize: "16px" }}
            variant="body1"
            color="textSecondary"
            component="p"
          >
            {truncateString(team.description, 220)}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{ backgroundColor: props.color }}>
        <Button size="small" color="primary">
          <Link
            to={`/teams/${props.name}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Learn More
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
}
{
  /* <Paper>
<Typography align='center' variant='h1' className={classes.title}>{props.name}</Typography>
</Paper> */
}
