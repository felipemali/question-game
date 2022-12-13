import { Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Box from "@mui/material/Box";
import "./index.css";

const HeaderGame = () => {
  return (
    <header className="header-game">
      <nav>
        <Box component="p" sx={{ m: 0 }}>
          <Typography variant="h6" component="div">
            4/10
          </Typography>
        </Box>
        <Box component="p" sx={{ m: 0 }}>
          <AccessAlarmIcon />
          <Typography
            sx={{ color: "red", fontWeight: 550 }}
            variant="subtitle2"
            component="div"
          >
            00:00
          </Typography>
        </Box>

        <Box component="p" sx={{ m: 0 }}>
          3<FavoriteIcon className="icon" />
        </Box>
      </nav>
    </header>
  );
};
export default HeaderGame;
