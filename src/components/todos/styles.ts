import { colors } from "../../utils/theme.ts";

export const styles = {
  accordionSummary: (background) => ({
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
    height: "40px",
    background,
    "&.MuiAccordionSummary-root": {
      minHeight: "42px",
    },
  }),
  accordionDetails: {
    background: "#F1F1F1",
    borderBottomRightRadius: "10px",
    borderBottomLeftRadius: "10px",
  },
  accrodion: { mt: 1, "&:before": { height: "0px" } },
  tHeadText: {
    fontSize: "14px",
    color: colors.black3,
    fontWeight: "700",
  },
  addTaskAccordianDetails: {
    fontSize: "14px",
    color: "#00000080",
    fontWeight: "500",
  },
  taskTitle: {
    "& .MuiInputBase-root": {
      border: "none",
      borderRadius: "30px",
      pl: "5px !important",
      width: { xs: "90vw", sm: "204px" },
      height: "36px",
      fieldset: {
        display: "none",
      },
    },
  },
  todoText: (isCompleted = false) => ({
    color: colors.black,
    fontSize: "14px",
    fontWeight: "500",
    textDecoration: isCompleted ? "line-through" : "none",
  }),
  todoStatus: {
    backgroundColor: "#0000003A",
    borderRadius: "4px",
    p: "5px",
    color: colors.black,
    fontSize: "14px",
    fontWeight: "500",
    width: "max-content",
  },
  selectContainer: { m: 1, minWidth: 100 },
  inactiveIcons: (color = "#0000003A") => ({
    color,
    fontSize: "20px",
  }),
  notfoundText: {
    fontSize: { xs: "16px", md: "24px" },
    fontWeight: "700",
    textAlign: "center",
    maxWidth: "400px",
    color: colors.black2,
  },
  calendarOutline: {
    border: "solid 2px #00000033",
    borderRadius: "20px",
    width: "100px",
    height: "30px",
  },
  calenderSize: { width: "20px", height: "20px" },
  cancelBtn: {
    color: colors.black,
    fontWeight: "700",
    fontSize: "14px",
  },
  addBtn: { borderRadius: "20px" },
  editIcon: (color = colors.black) => ({
    fontSize: "15px",
    color,
  }),
  editText: (color = colors.black) => ({
    color,
    fontWeight: "600",
    fontSize: "16px",
  }),
};
