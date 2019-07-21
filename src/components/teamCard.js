import React, { useState, useEffect } from "react";
import axios from "axios";
import { Modal } from "./index";
import { checkIfValidAbbreviation } from "./utils";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  }
});

const TeamCard = ({ team }) => {
  //  STATE
  const [showTeam, setShowTeam] = useState(false);
  const [players, setPlayers] = useState([]);

  function handlePopup() {
    setShowTeam({ showTeam: !showTeam });
  }

  useEffect(() => {
    // Check for valid abbreviation
    let teamAbbreviation = checkIfValidAbbreviation(team.team_abbrev);

    axios
      .get(
        `https://nba-players.herokuapp.com/players-stats-teams/${teamAbbreviation}`
      )
      .then(res => {
        setPlayers(res.data);
      })
      .catch(err => console.error(err));
  });

  const { team_abbrev, team_name, team_nickname } = team;
  const classes = useStyles();

  return (
    <div className="team-card" onClick={handlePopup}>
      {showTeam ? (
        <Modal handlePopup={handlePopup} team={team} players={players} />
      ) : (
        ""
      )}
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image={`http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/${team.team_abbrev.toLowerCase()}.png`}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {`${team.team_name}`}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default TeamCard;
