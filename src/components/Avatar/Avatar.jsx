import MuiAvatar from "@mui/material/Avatar";

const Avatar = ({ src, letter, bgColor, lettered }) => (
  <MuiAvatar sx={{ bgcolor: bgColor }} src={lettered ? src : null}>
    {letter}
  </MuiAvatar>
);

export default Avatar;
