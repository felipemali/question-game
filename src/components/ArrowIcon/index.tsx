import { Box, Fab } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const ArrowIcon = (props: any) => {
  return (
    <Box
      sx={{
        "& > :not(style)": { ml: 20, mt: 10 },
      }}
    >
      <Fab color="secondary" aria-label="edit">
        <ArrowForwardIcon
          onClick={() => {
            props.generateQuestion();
            props.setOptionSelected(null);
          }}
        />
      </Fab>
    </Box>
  );
};
