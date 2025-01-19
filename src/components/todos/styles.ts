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
};
