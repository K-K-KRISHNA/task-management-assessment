export const commonStyles = {
  addColor: (color: string) => ({
    color,
  }),
  addBg: (bgColor: string) => ({
    backgroundColor: bgColor,
  }),
  rowStartColumnCenter: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  centeredFlex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  hideInSmall: {
    display: { xs: "none", md: "flex" },
  },
  hideInWeb: {
    display: { xs: "flex", md: "none" },
  },
};
