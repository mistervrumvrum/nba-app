import React from "react";
import Typography from "@material-ui/core/Typography"

const LastLeagueGamesCard = ({
  date,
  homeTeam,
  awayTeam,
  homeScore,
  awayScore,
  homeId,
  awayId
}) => {


  return (
    <div style={{ margin: "0.5rem 0", backgroundColor: "white" }}>
      <div style={{}}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.5rem 2rem", borderBottom: "1px solid #d4d4d4" }}>
          <img src={""} alt="" style={{ height: "70px", width: "auto", marginRight: "1rem" }} />
          <Typography align="left" style={{ width: "100%", marginRight: "1rem" }}>
            {homeTeam}
          </Typography>
          <Typography variant="h5" component="p">
            {homeScore}
          </Typography>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.5rem 2rem", borderBottom: "1px solid #d4d4d4" }}>
          <img src={""} alt="" style={{ height: "70px", width: "auto", marginRight: "1rem" }} />
          <Typography align="left" style={{ width: "100%", marginRight: "1rem" }}>
            {awayTeam}
          </Typography>
          <Typography variant="h5" component="p">
            {awayScore}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default LastLeagueGamesCard;
