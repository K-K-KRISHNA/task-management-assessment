import {
  Add,
  AddCircleOutline,
  CheckBoxOutlineBlankOutlined,
  CheckCircle,
  ExpandMore,
  MoreHorizOutlined,
  SubdirectoryArrowLeft,
} from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  FormControl,
  Grid2,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { LuGripVertical } from "react-icons/lu";
import { calendar, searchNotFound } from "../../assets/assets.ts";
import { commonStyles } from "../../utils/commonStyles.ts";
import { colors } from "../../utils/theme.ts";
import Header from "../header/Header.tsx";
import { styles } from "./styles.ts";

type TODO_STATUS = "TO-DO" | "IN-PROGRESS" | "COMPLETED";
const todoStatus = ["TO-DO", "IN-PROGRESS", "COMPLETED"];

const searchNotFoundView = () => (
  <Stack
    width={"100%"}
    height={"100%"}
    justifyContent={"center"}
    alignItems={"center"}
  >
    <Box
      component={"img"}
      src={searchNotFound}
      alt="search not found"
      width={"250px"}
      height={"200px"}
    />
    <Typography sx={styles.notfoundText}>
      It looks like we can't find any results that match.
    </Typography>
  </Stack>
);

const Todos = () => {
  const getLableAndBgColor = (todoType: TODO_STATUS) => {
    switch (todoType) {
      case "TO-DO":
        return ["Todos", colors.pink];
      case "IN-PROGRESS":
        return ["In-Progress", colors.blue];
      default:
        return ["Completed", colors.lemon];
    }
  };
  const getAccordion = (todoType: TODO_STATUS) => {
    const [lable, bgColor] = getLableAndBgColor(todoType);
    return (
      <Accordion
        defaultExpanded
        disableGutters
        sx={styles.accrodion}
        elevation={0.5}
      >
        <AccordionSummary
          expandIcon={<ExpandMore sx={commonStyles.addColor(colors.black)} />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={styles.accordionSummary(bgColor)}
        >
          <Typography
            fontSize={"14px"}
            fontWeight={"600"}
            color={colors.black}
            component="span"
          >
            {lable} (3)
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={styles.accordionDetails}>
          {todoType === "TO-DO" && (
            <Accordion
              disableGutters
              defaultExpanded
              elevation={0}
              sx={{
                ...commonStyles.addBg("transparent"),
                ...commonStyles.hideInSmall,
                flexDirection: "column",
              }}
            >
              <AccordionSummary>
                <Box sx={commonStyles.rowStartColumnCenter}>
                  <Add color="primary" />
                  <Typography
                    color="#000000CC"
                    fontSize={"14px"}
                    fontWeight={"700"}
                  >
                    ADD TASK
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Grid2 container px={2} mt={1} alignItems={"center"}>
                  <Grid2 size={4}>
                    <TextField sx={styles.taskTitle} placeholder="Task Title" />
                  </Grid2>
                  <Grid2 size={{ xs: 0, md: 2 }}>
                    <Stack
                      gap={1}
                      sx={styles.calendarOutline}
                      direction={"row"}
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      <Box
                        component={"img"}
                        src={calendar}
                        sx={styles.calenderSize}
                      />
                      <Typography
                        fontSize={"12px"}
                        fontWeight={"600"}
                        color={colors.black3}
                      >
                        Add date
                      </Typography>
                    </Stack>
                  </Grid2>
                  <Grid2 size={{ xs: 0, md: 2 }}>
                    <FormControl sx={styles.selectContainer}>
                      <Select
                        size="small"
                        value={""}
                        displayEmpty
                        IconComponent={AddCircleOutline}
                        inputProps={{ "aria-label": "Without label" }}
                      >
                        <MenuItem value="">Status</MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid2>
                  <Grid2 size={4}>
                    <FormControl sx={styles.selectContainer}>
                      <Select
                        size="small"
                        value={""}
                        displayEmpty
                        IconComponent={AddCircleOutline}
                        inputProps={{ "aria-label": "Without label" }}
                      >
                        <MenuItem value="">Category</MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>{" "}
                  </Grid2>
                </Grid2>
                <Stack direction={"row"} gap={3}>
                  <Button
                    variant="contained"
                    sx={styles.addBtn}
                    size="small"
                    endIcon={<SubdirectoryArrowLeft />}
                  >
                    Add
                  </Button>
                  <Button variant="text" sx={styles.cancelBtn}>
                    CANCEL
                  </Button>
                </Stack>
              </AccordionDetails>
            </Accordion>
          )}
          {Array(6)
            .fill(0)
            .map((each) => (
              <Grid2
                container
                mt={1}
                borderTop={`solid 1.5px #0000001A`}
                pt={1}
              >
                <Grid2 size={{ xs: 10, md: 4 }}>
                  <Stack gap={1} direction={"row"} alignItems={"center"}>
                    <CheckBoxOutlineBlankOutlined sx={styles.inactiveIcons()} />
                    <LuGripVertical fontSize={"15px"} color={colors.black3} />
                    <CheckCircle
                      sx={styles.inactiveIcons(
                        todoType === "COMPLETED" ? "#1B8D17" : undefined
                      )}
                    />
                    <Typography sx={styles.todoText(todoType === "COMPLETED")}>
                      Design a Dashboard page along with wireframes{" "}
                    </Typography>
                  </Stack>
                </Grid2>
                <Grid2
                  size={{ xs: 0, md: 2 }}
                  display={{ xs: "none", md: "block" }}
                >
                  <Typography sx={styles.todoText()}>31 Dec, 2024</Typography>
                </Grid2>
                <Grid2
                  size={{ xs: 0, md: 2 }}
                  display={{ xs: "none", md: "block" }}
                >
                  <Typography sx={styles.todoStatus}>{todoType}</Typography>
                </Grid2>
                <Grid2 size={{ xs: 2, md: 4 }}>
                  <Stack
                    direction={"row"}
                    justifyContent={{ xs: "flex-end", md: "space-between" }}
                    alignItems={"center"}
                  >
                    <Typography
                      display={{ xs: "none", md: "block" }}
                      sx={styles.todoText()}
                    >
                      Work
                    </Typography>
                    <MoreHorizOutlined
                      sx={{ ...styles.inactiveIcons, color: colors.black }}
                    />
                  </Stack>
                </Grid2>
              </Grid2>
            ))}
          {false && (
            <Box height={"200px"} sx={commonStyles.centeredFlex}>
              <Typography
                color={colors.black2}
                fontSize={"15px"}
                fontWeight={"500"}
                textTransform={"capitalize"}
              >
                No Tasks in {todoType.replace("-", " ")}
              </Typography>
            </Box>
          )}
        </AccordionDetails>
      </Accordion>
    );
  };

  return (
    <Box p={{ xs: 0, md: 1.5 }} pt={{ xs: 0, md: 2.5 }}>
      <Box
        position={"sticky"}
        top={0}
        zIndex={5}
        sx={{ backgroundColor: "white" }}
      >
        <Header />
      </Box>
      {false ? (
        searchNotFoundView()
      ) : (
        <Box p={{ xs: 1, md: 0 }}>
          <Box display={{ xs: "none", md: "block" }}>
            <Grid2 container px={2} mt={1}>
              <Grid2 size={4}>
                <Typography sx={styles.tHeadText}>Task name</Typography>
              </Grid2>
              <Grid2 size={{ xs: 0, md: 2 }}>
                <Typography sx={styles.tHeadText}>Due on</Typography>
              </Grid2>
              <Grid2 size={{ xs: 0, md: 2 }}>
                <Typography sx={styles.tHeadText}>Task Status</Typography>
              </Grid2>
              <Grid2 size={4}>
                <Typography sx={styles.tHeadText}>Task Category</Typography>
              </Grid2>
            </Grid2>
          </Box>
          {todoStatus.map((each) => getAccordion(each as TODO_STATUS))}
        </Box>
      )}
    </Box>
  );
};
export default Todos;
