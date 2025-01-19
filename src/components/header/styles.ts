import { colors } from "../../utils/theme.ts";

export const styles = {
  container: {
    borderBottom: { xs: "none", md: "solid 1.25px #0000001A" },
    pb: { xs: 0, md: 3 },
  },
  mainHeader: {
    height: "60px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    px: 2,
    background: { xs: "#FAEEFC", md: "none" },
    boxShadow: { xs: "0px 0px 4px 0px #00000040", md: "none" },
  },
  avatarSize: { width: "35px", height: "35px" },
  logoutMenu: { display: { xs: "block", md: "none" } },
  listViewInactiveBtn: { color: "#231F20D1", fontWeight: "700" },
  listViewIconSize: { width: "20x", height: "20px" },
  listViewActiveBtn: {
    color: colors.black,
    fontWeight: "700",
    borderBottom: "solid 2px black",
    borderRadius: 0,
  },
  logoutBtn: {
    background: "#FFF9F9",
    color: colors.black,
    border: "solid 1.5px #7B198426",
    width: "108px",
    fontWeight: "600",
  },
  selectContainer: { m: 1, minWidth: 100 },
  textField: {
    "& .MuiInputBase-root": {
      border: "solid 1.5px #0000006B",
      borderRadius: "30px",
      pl: "5px !important",
      width: { xs: "90vw", sm: "204px" },
      height: "36px",
      fieldset: {
        display: "none",
      },
    },
  },
  addTaskBtn: (width = "152px", height = "48px", fontSize = "14px") => ({
    width,
    height,
    fontSize,
    borderRadius: "20px",
    fontWeight: "700",
  }),
};
