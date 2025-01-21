import { colors } from "../../utils/theme.ts";

export const styles = {
  modal: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    bgcolor: "background.paper",
    boxShadow: 24,
    outline: "none",
    maxHeight: "95vh",
    overflow: "scroll",
    p: 4,
  },
  modalForWeb: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    borderRadius: 10,
    bgcolor: "background.paper",
    boxShadow: 24,
    outline: "none",
    p: 4,
  },
  createTask: {
    color: colors.black,
    fontWeight: "600",
    fontSize: "20px",
  },
  taskTitleField: {
    "& .MuiInputBase-root": {
      borderRadius: "15px",
      backgroundColor: "#F1F1F15C",
    },
  },
  multilineField: {
    "& .MuiInputBase-root": {
      borderRadius: "15px",
      backgroundColor: "#F1F1F15C",
      pb: 9,
    },
  },
  formCategoryBtn: (width = "79px", height = "30px") => ({
    width,
    height,
    borderRadius: "20px",
    fontSize: "10px",
  }),
  formCategoryInactiveBtn: (width = "79px", height = "30px") => ({
    width,
    height,
    borderRadius: "20px",
    fontSize: "10px",
    color: "#090909",
    borderColor: "#00000030",
    fontWeight: "700",
    background: "transparent",
  }),
  dueDateText: {
    fontSize: "12px",
    color: "#00000099",
    fontWeight: "600",
    mb: 1,
  },
  createDisabled: {
    "&.Mui-disabled": {
      backgroundColor: colors.primary,
      color: colors.white,
      opacity: 0.5,
      cursor: "no-drop",
      pointerEvents: "all",
    },
  },
  calendarImg: { width: "25px", height: "25px" },
  closeIcon: { position: "absolute", top: 25, right: 15 },
};
