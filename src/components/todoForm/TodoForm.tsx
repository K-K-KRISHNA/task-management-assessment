import { Close } from "@mui/icons-material";
import {
  Box,
  Button,
  FormHelperText,
  Grid2,
  MenuItem,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { ChangeEvent, useState } from "react";
import { calendar } from "../../assets/assets.ts";
import { commonStyles } from "./../../utils/commonStyles.ts";
import { styles } from "./styles.ts";

interface ITypes {
  TaskTitle: string;
  TaskDescription: string;
  TaskStatus: "NONE" | "TO-DO" | "IN-PROGREESS" | "COMPLETED";
  TaskCategory: "WORK" | "PERSONAL" | "NONE";
}

const TodoForm = () => {
  const [taskTitle, setTaskTitle] = useState<ITypes["TaskTitle"]>("");
  const [taskDescription, setTaskDescription] =
    useState<ITypes["TaskDescription"]>("");
  const [taskStatus, setTaskStatus] = useState<ITypes["TaskStatus"]>("NONE");
  const [taskCategory, setTaskCategory] =
    useState<ITypes["TaskCategory"]>("NONE");

  const isWeb = useMediaQuery("(min-width:768px)");

  const taskTitleHandler = (event: ChangeEvent<HTMLInputElement>) =>
    setTaskTitle(event.target.value);

  const taskDescriptionHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setTaskDescription(value.slice(0, 300) as ITypes["TaskStatus"]);
  };
  const taskStatusHandler = (event: ChangeEvent<HTMLInputElement>) =>
    setTaskStatus(event.target.value as ITypes["TaskStatus"]);

  const taskCategoryHandler = (value: ITypes["TaskCategory"]) =>
    setTaskCategory(value);

  return (
    <Stack gap={2} sx={isWeb ? styles.modalForWeb : styles.modal}>
      <Close sx={styles.closeIcon} />
      <Typography sx={styles.createTask}>Create Task</Typography>
      <Box component={"hr"} />
      <TextField
        size="small"
        fullWidth
        placeholder="Task title"
        value={taskTitle}
        onChange={taskTitleHandler}
        sx={styles.taskTitleField}
      />
      <TextField
        size="small"
        fullWidth
        multiline
        value={taskDescription}
        onChange={taskDescriptionHandler}
        rows={5}
        placeholder="📃 Type your task description here"
        sx={styles.taskTitleField}
      />
      <Typography
        fontSize={"12px"}
        fontWeight={"400"}
        mt={-5}
        textAlign={"right"}
        pr={1.5}
      >
        {taskDescription.length}/300 characters
      </Typography>
      <Grid2 container alignItems={"center"} spacing={2}>
        <Grid2 size={{ xs: 12, md: 4 }}>
          <Box>
            <FormHelperText sx={styles.dueDateText}>
              Task Category*
            </FormHelperText>
            <Stack direction={"row"} gap={2} mt={1}>
              <Button
                onClick={() => taskCategoryHandler("WORK")}
                variant={taskCategory === "WORK" ? "contained" : "outlined"}
                sx={
                  taskCategory === "WORK"
                    ? styles.formCategoryBtn()
                    : styles.formCategoryInactiveBtn()
                }
              >
                Work
              </Button>
              <Button
                onClick={() => taskCategoryHandler("PERSONAL")}
                variant={taskCategory === "PERSONAL" ? "contained" : "outlined"}
                sx={
                  taskCategory === "PERSONAL"
                    ? styles.formCategoryBtn()
                    : styles.formCategoryInactiveBtn()
                }
              >
                Personal
              </Button>
            </Stack>
          </Box>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }}>
          <Box>
            <FormHelperText sx={styles.dueDateText}>Due On*</FormHelperText>
            <TextField
              size="small"
              fullWidth
              placeholder="DD/MM/YYYY"
              sx={styles.taskTitleField}
              slotProps={{
                input: {
                  endAdornment: (
                    <Box
                      component={"img"}
                      src={calendar}
                      sx={styles.calendarImg}
                    />
                  ),
                },
              }}
            />
          </Box>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }}>
          <Box>
            <FormHelperText sx={styles.dueDateText}>
              Task Status*
            </FormHelperText>
            <TextField
              size="small"
              select
              fullWidth
              placeholder="Task title"
              sx={styles.taskTitleField}
              value={taskStatus}
              onChange={taskStatusHandler}
            >
              <MenuItem value={"NONE"}>Choose</MenuItem>
              <MenuItem value={"TO-DO"}>Todo</MenuItem>
              <MenuItem value={"IN-PROGRESS"}>In Progress</MenuItem>
              <MenuItem value={"COMPLETED"}>Completed</MenuItem>
            </TextField>
          </Box>
        </Grid2>
      </Grid2>
      <Stack
        direction={"row"}
        gap={2}
        sx={commonStyles.addBg("#F1F1F1")}
        mt={1}
        p={2}
        pt={4}
        borderRadius={"20px"}
        justifyContent={"flex-end"}
      >
        <Button
          variant="outlined"
          sx={styles.formCategoryInactiveBtn("102px", "40px")}
        >
          CANCEL
        </Button>
        <Button
          disabled
          variant="contained"
          sx={{
            ...styles.formCategoryBtn("102px", "40px"),
            ...styles.createDisabled,
          }}
        >
          CREATE
        </Button>
      </Stack>
    </Stack>
  );
};

export default TodoForm;
