import * as React from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

const languages = [
  { name: "English", level: ["Spoken",'Written'] },
  { name: "Tamil", level: ["Spoken", "Written"] },
  { name: "Hindi", level: ["Spoken"] },
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#2c6798",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

export default function ResponsiveStack() {
  return (
    <div>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        {languages.map((language) => (
          <Item key={language.name} sx={{"&:hover":{
            transform:'scale(1.1)'
          }}}>
            <Box>
              <Typography sx={{color:"white"}} variant="subtitle1">{language.name}</Typography>
              <Typography sx={{color:"white"}} variant="subtitle2">
                {language.level.map(eachLevel=>
                    `${eachLevel} `
                )}
              </Typography>
            </Box>
          </Item>
        ))}
      </Stack>
    </div>
  );
}
