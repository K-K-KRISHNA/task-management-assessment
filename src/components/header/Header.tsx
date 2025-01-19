import {
  Avatar,
  Box,
  FormControl,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React from "react";
import {
  blackCopyPad,
  boardInactive,
  listInactive,
  logout,
  magnifier,
} from "../../assets/assets.ts";
import { colors } from "../../utils/theme.ts";
import { commonStyles } from "./../../utils/commonStyles.ts";
import { styles } from "./styles.ts";

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={styles.container}>
      <Box sx={styles.mainHeader}>
        <Stack direction={"row"} alignItems={"center"} gap={0.75}>
          {
            <Box
              display={{ xs: "none", md: "block" }}
              component={"img"}
              width={"20px"}
              height={"20px"}
              src={blackCopyPad}
            />
          }
          <Typography
            fontSize={"24px"}
            fontWeight={"600"}
            color={colors.black2}
          >
            TaskBuddy
          </Typography>
        </Stack>
        <Box>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            endIcon={
              <Typography
                display={{ xs: "none", md: "block" }}
                fontWeight={"700"}
                fontSize={"16px"}
                color="#00000099"
              >
                Krishna
              </Typography>
            }
          >
            <Avatar sx={styles.avatarSize} src="/broken-image.jpg" />
          </Button>
          <Menu
            sx={styles.logoutMenu}
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </Box>
      </Box>
      <Stack
        display={{ xs: "none", md: "flex" }}
        direction={"row"}
        justifyContent={"space-between"}
      >
        <Stack direction={"row"} gap={2}>
          <Button
            variant="text"
            sx={styles.listViewInactiveBtn}
            startIcon={
              <Box
                component={"img"}
                src={listInactive}
                sx={styles.listViewIconSize}
              />
            }
          >
            List
          </Button>
          <Button
            variant="text"
            sx={styles.listViewActiveBtn}
            startIcon={
              <Box
                component={"img"}
                src={boardInactive}
                sx={styles.listViewIconSize}
              />
            }
          >
            Board
          </Button>
        </Stack>
        <Button
          size="small"
          variant="outlined"
          startIcon={
            <Box
              component={"img"}
              src={logout}
              width={"15px"}
              height={"15px"}
            />
          }
          sx={styles.logoutBtn}
        >
          Logout
        </Button>
      </Stack>
      <Stack
        p={{ xs: 1, md: 0 }}
        flexWrap={"wrap"}
        mt={2}
        direction={"row"}
        justifyContent={"space-between"}
      >
        <Stack width={"100%"} flexDirection={"row"} justifyContent={"right"}>
          <Button
            variant="contained"
            size="small"
            sx={{
              ...styles.addTaskBtn("86px", "32px", "10px"),
              ...commonStyles.hideInWeb,
            }}
          >
            ADD TASK
          </Button>
        </Stack>
        <Box
          display={"flex"}
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Typography fontWeight={"600"} color="#00000099" fontSize={"12px"}>
            Filter by:
          </Typography>
          <FormControl sx={styles.selectContainer}>
            <Select
              size="small"
              value={""}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="">Category</MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={styles.selectContainer}>
            <Select
              size="small"
              value={""}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="">DueDate</MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"row"}
          alignItems={"center"}
          gap={3}
        >
          <TextField
            size="small"
            placeholder="Search"
            sx={styles.textField}
            slotProps={{
              input: {
                startAdornment: (
                  <Box
                    component={"img"}
                    src={magnifier}
                    width={"20px"}
                    height={"20px"}
                    mx={"5px"}
                  />
                ),
              },
            }}
          />
          <Button
            variant="contained"
            size="medium"
            sx={{ ...styles.addTaskBtn(), ...commonStyles.hideInSmall }}
          >
            ADD TASK
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default Header;
