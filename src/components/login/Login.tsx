import { Box, Button, Stack, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import React from "react";
import {
  google,
  loginBg,
  mobileCirclesBg,
  task,
} from "./../../assets/assets.ts";
import { colors, fontFamily } from "./../../utils/theme.ts";
import { styles } from "./styles.ts";
const Login = () => {
  const isTabletOrBelow = useMediaQuery("(max-width:768px)");
  return (
    <Box
      sx={{
        ...styles.mainBg,
        ...(isTabletOrBelow && { backgroundImage: `url(${mobileCirclesBg})` }),
      }}
    >
      <Stack
        justifyContent={"center"}
        alignItems={{ xs: "center", md: "flex-start" }}
        px={2}
        gap={1.5}
      >
        <Stack
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={1}
        >
          <Box component="img" src={task} width={"45px"} height={"45px"}></Box>
          <Typography
            color="primary"
            fontWeight={"bolder"}
            fontSize={"30px"}
            fontFamily={fontFamily.urbanist}
          >
            Task Buddy
          </Typography>
        </Stack>
        <Typography
          fontFamily={fontFamily.urbanist}
          fontWeight={"bold"}
          color={colors.black}
          textAlign={{ xs: "center", md: "left" }}
          width={"80%"}
          fontSize={"13px"}
        >
          Streamline your workflow and track progress effortlessly with our
          all-in-one task management app.
        </Typography>
        <Button
          sx={styles.signInButton}
          startIcon={
            <Box
              component={"img"}
              src={google}
              width={"20px"}
              height={"20px"}
              mr={1}
            />
          }
        >
          Continue With Google
        </Button>
      </Stack>
      {!isTabletOrBelow && (
        <Box sx={styles.webBg}>
          <Box
            component={"img"}
            src={loginBg}
            sx={{ width: "40vw", height: "40vw" }}
          />
        </Box>
      )}
    </Box>
  );
};

export default Login;
