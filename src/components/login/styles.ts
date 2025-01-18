import { circles } from "../../assets/assets.ts";
import { colors, fontFamily } from "../../utils/theme.ts";

export const styles = {
  mainBg: {
    height: "100vh",
    width: "100vw",
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    boxSizing: "border-box",
  },
  signInButton: {
    background: "black",
    p: 2,
    px: 4,
    color: colors.white,
    fontWeight: "700",
    fontFamily: fontFamily.urbanist,
    textTransform: "capitalize",
    fontSize: "16px",
    borderRadius: "25px",
    mt: 5,
  },
  webBg: {
    backgroundImage: `url(${circles})`,
    height: "100vh",
    width: "50vw",
    backgroundSize: "cover",
    py: "20px",
    display: "flex",
    justifyContent: "right",
    alignItems: "center",
  },
};
