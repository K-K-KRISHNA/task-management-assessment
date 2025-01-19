import { Add, ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import React from "react";
import { commonStyles } from "../../utils/commonStyles.ts";
import { colors } from "../../utils/theme.ts";
import Header from "../header/Header.tsx";
import { styles } from "./styles.ts";

const Todos = () => {
  return (
    <Box p={{ xs: 0, md: 1.5 }} pt={{ xs: 0, md: 2.5 }}>
      <Header />
      <Box p={{ xs: 1, md: 0 }}>
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
            sx={styles.accordionSummary(colors.pink)}
          >
            <Typography
              fontSize={"14px"}
              fontWeight={"600"}
              color={colors.black}
              component="span"
            >
              Todos (3)
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={styles.accordionDetails}>
            <Accordion
              elevation={0}
              sx={{
                ...commonStyles.addBg("transparent"),
                ...commonStyles.hideInSmall,
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
            </Accordion>
            <Box height={"200px"} sx={commonStyles.centeredFlex}>
              <Typography
                color={colors.black2}
                fontSize={"15px"}
                fontWeight={"500"}
              >
                No Tasks in To-Do
              </Typography>
            </Box>
          </AccordionDetails>
        </Accordion>
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
            sx={styles.accordionSummary(colors.blue)}
          >
            <Typography
              fontSize={"14px"}
              fontWeight={"600"}
              color={colors.black}
              component="span"
            >
              In-Progress (3)
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={styles.accordionDetails}>
            <Box height={"200px"} sx={commonStyles.centeredFlex}>
              <Typography
                color={colors.black2}
                fontSize={"15px"}
                fontWeight={"500"}
              >
                No Tasks In Progress
              </Typography>
            </Box>
          </AccordionDetails>
        </Accordion>
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
            sx={styles.accordionSummary(colors.lemon)}
          >
            <Typography
              fontSize={"14px"}
              fontWeight={"600"}
              color={colors.black}
              component="span"
            >
              Completed (3)
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={styles.accordionDetails}>
            <Box height={"200px"} sx={commonStyles.centeredFlex}>
              <Typography
                color={colors.black2}
                fontSize={"15px"}
                fontWeight={"500"}
              >
                No Tasks in Completed
              </Typography>
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
};
export default Todos;
