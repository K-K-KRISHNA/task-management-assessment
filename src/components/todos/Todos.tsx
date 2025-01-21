import {
  Add,
  AddCircleOutline,
  BorderColor,
  CheckBoxOutlineBlankOutlined,
  CheckCircle,
  Delete,
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
  Menu,
  MenuItem,
  Modal,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Dayjs } from "dayjs";
import React, { useState } from "react";
import { LuGripVertical } from "react-icons/lu";
import { calendar, searchNotFound } from "../../assets/assets.ts";
import { commonStyles } from "../../utils/commonStyles.ts";
import { colors } from "../../utils/theme.ts";
import Header from "../header/Header.tsx";
import TodoForm from "../todoForm/TodoForm.tsx";
import { styles } from "./styles.ts";
import { Category, TodoSelectingStatus, TodoStatus } from "./types.ts";
const todoStatus: TodoStatus[] = ["TO-DO", "IN-PROGRESS", "COMPLETED"];
const categories: { key: Category; text: string }[] = [
  {
    key: "CATEGORY",
    text: "Category",
  },
  {
    key: "PERSONAL",
    text: "Personal",
  },
  {
    key: "WORK",
    text: "Work",
  },
];
const statusItems: { key: TodoSelectingStatus; text: string }[] = [
  {
    key: "STATUS",
    text: "Status",
  },
  {
    key: todoStatus[0],
    text: "To Do",
  },
  {
    key: todoStatus[1],
    text: "In Progress",
  },
  {
    key: todoStatus[2],
    text: "Completed",
  },
];

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
  const [internalAddStatus, setInternalAddStatus] =
    useState<TodoSelectingStatus>("STATUS");
  const [internalCategory, setInternalCategory] =
    useState<Category>("CATEGORY");
  const [anchorElForEdit, setAnchorElForEdit] = useState<null | HTMLElement>(
    null
  );
  const [anchorElForStatus, setAnchorElForStatus] =
    useState<null | HTMLElement>(null);
  const [activeTodoEdit, setActiveTodoEdit] = useState<number>(-1);
  const [activeTodoStatus, setActiveTodoStatus] = useState<number>(-1);
  const [value, setValue] = useState<Dayjs | null>(null);

  const handleClickForEdit = (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => {
    setAnchorElForEdit(event.currentTarget);
    setActiveTodoEdit(id);
  };

  const handleClickForStatus = (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => {
    setAnchorElForStatus(event.currentTarget);
    setActiveTodoStatus(id);
  };

  const handleCloseForEdit = () => {
    setAnchorElForEdit(null);
    setActiveTodoEdit(-1);
  };

  const handleCloseForStatus = () => {
    setAnchorElForStatus(null);
    setActiveTodoStatus(-1);
  };

  const todoEditHandler = (id: number) => {
    handleCloseForEdit();
  };

  const todoDeleteHandler = (id: number) => {
    handleCloseForEdit();
  };

  const getLableAndBgColor = (todoType: TodoStatus) => {
    switch (todoType) {
      case "TO-DO":
        return ["Todos", colors.pink];
      case "IN-PROGRESS":
        return ["In-Progress", colors.blue];
      default:
        return ["Completed", colors.lemon];
    }
  };
  const getAccordion = (todoType: TodoStatus) => {
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
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={["DatePicker"]}>
                        <Box sx={styles.dateField}>
                          <DatePicker
                            format="DD/MM/YYYY"
                            value={value}
                            onChange={(newValue) => setValue(newValue)}
                            slots={{
                              openPickerIcon: () => (
                                <Box
                                  component={"img"}
                                  src={calendar}
                                  sx={styles.calenderSize}
                                />
                              ),
                            }}
                            slotProps={{
                              textField: {
                                size: "small",
                                fullWidth: true,
                                placeholder: "Add Date",
                              },
                            }}
                          />
                        </Box>
                      </DemoContainer>
                    </LocalizationProvider>
                  </Grid2>
                  <Grid2 size={{ xs: 0, md: 2 }}>
                    <FormControl sx={styles.selectContainer}>
                      <Select
                        size="small"
                        value={internalAddStatus}
                        onChange={internalStatusChangeHandler}
                        displayEmpty
                        IconComponent={AddCircleOutline}
                        inputProps={{ "aria-label": "Without label" }}
                      >
                        {statusItems.map((each) => (
                          <MenuItem key={each.key} value={each.key}>
                            {each.text}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid2>
                  <Grid2 size={4}>
                    <FormControl sx={styles.selectContainer}>
                      <Select
                        size="small"
                        value={internalCategory}
                        onChange={internalCategoryChangeHandler}
                        displayEmpty
                        IconComponent={AddCircleOutline}
                        inputProps={{ "aria-label": "Without label" }}
                      >
                        {categories.map((each) => (
                          <MenuItem key={each.key} value={each.key}>
                            {each.text}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
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
            .map((each, index) => (
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
                  <Button
                    id="basic-button-2"
                    aria-controls={
                      activeTodoStatus === index ? "basic-menu2" : undefined
                    }
                    aria-haspopup="true"
                    aria-expanded={
                      activeTodoStatus === index ? "true" : undefined
                    }
                    onClick={(event) => handleClickForStatus(event, index)}
                  >
                    <Typography sx={styles.todoStatus}>{todoType}</Typography>
                  </Button>
                  <Menu
                    id="basic-menu2"
                    anchorEl={anchorElForStatus}
                    open={activeTodoStatus === index}
                    onClose={handleCloseForStatus}
                    MenuListProps={{
                      "aria-labelledby": "basic-button-2",
                    }}
                  >
                    <MenuItem onClick={handleCloseForStatus}>
                      <Typography>TO DO</Typography>
                    </MenuItem>
                    <MenuItem onClick={handleCloseForStatus}>
                      <Typography>IN-PROGRESS</Typography>
                    </MenuItem>
                    <MenuItem onClick={handleCloseForStatus}>
                      <Typography>COMPLETED</Typography>
                    </MenuItem>{" "}
                  </Menu>
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
                    <Button
                      id="basic-button"
                      aria-controls={
                        activeTodoEdit === index ? "basic-menu" : undefined
                      }
                      aria-haspopup="true"
                      aria-expanded={
                        activeTodoEdit === index ? "true" : undefined
                      }
                      onClick={(event) => handleClickForEdit(event, index)}
                    >
                      <MoreHorizOutlined
                        sx={{ ...styles.inactiveIcons, color: colors.black }}
                      />
                    </Button>
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorElForEdit}
                      open={activeTodoEdit === index}
                      onClose={handleCloseForEdit}
                      MenuListProps={{
                        "aria-labelledby": "basic-button",
                      }}
                    >
                      <MenuItem>
                        <Stack
                          direction={"row"}
                          alignItems={"center"}
                          gap={1.5}
                          onClick={() => todoEditHandler(index)}
                        >
                          <BorderColor sx={styles.editIcon()} />
                          <Typography sx={styles.editText()}>Edit</Typography>
                        </Stack>
                      </MenuItem>
                      <MenuItem>
                        <Stack
                          onClick={() => todoDeleteHandler(index)}
                          direction={"row"}
                          alignItems={"center"}
                          gap={1.5}
                        >
                          <Delete sx={styles.editIcon(colors.red)} />
                          <Typography sx={styles.editText(colors.red)}>
                            Delete
                          </Typography>
                        </Stack>
                      </MenuItem>
                    </Menu>
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
  const internalStatusChangeHandler = (
    event: SelectChangeEvent<TodoSelectingStatus>
  ) => {
    setInternalAddStatus(event.target.value as TodoSelectingStatus);
  };

  const internalCategoryChangeHandler = (
    event: SelectChangeEvent<Category>
  ) => {
    setInternalCategory(event.target.value as Category);
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
          {todoStatus.map((each) => getAccordion(each as TodoStatus))}
        </Box>
      )}
      <Modal open={false}>
        <TodoForm />
      </Modal>
    </Box>
  );
};
export default Todos;
