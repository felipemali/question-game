import React, { useState } from "react";
import Box from "@mui/material/Box";
import CardMui from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import Typography from "@mui/material/Typography";
import { useQuestions } from "../../hooks";
import { style } from "@mui/system";
import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@mui/material";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function Card({ optionSelected, onSelect }: any) {
  const { generatedQuestion } = useQuestions();

  return (
    <CardMui sx={{ maxWidth: 375, mx: "auto", mt: 2 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Você consegue <TagFacesIcon sx={{ color: "red" }} />
        </Typography>
        <Typography variant="body2">
          <Typography sx={{ mb: 3 }} variant="h6">
            {generatedQuestion?.ask}
          </Typography>
          {generatedQuestion?.options.map((option) => {
            return (
              <Paper
                sx={{
                  mt: 1,
                  background: optionSelected
                    ? option.isCorrect
                      ? "#84B026"
                      : "#FF5F5D"
                    : "#3CA6A6",
                  display: "flex",
                  alignItems: "bottom",
                }}
              >
                <ListItem disablePadding>
                  <ListItemButton role={undefined} dense>
                    <ListItemIcon>
                      <Typography sx={{ color: "#fff" }} variant="h6">
                        {option.option}
                      </Typography>
                    </ListItemIcon>
                    <ListItemText
                      onClick={() => {
                        onSelect(option);
                      }}
                      primary={option.title}
                      sx={{
                        color: "#fff",
                        padding: "0.5rem",
                        display: "flex",
                        alignItems: "center",
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              </Paper>
            );
          })}
        </Typography>
      </CardContent>
    </CardMui>
  );
}
