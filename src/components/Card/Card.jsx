import MuiCard from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import { useMediaQuery } from "hooks";

import styles from "./CardStyles";

const Card = ({ title, subtitle, imageSrc, content, footer, Avatar }) => {
  const { isMobileScreen } = useMediaQuery();

  return (
    <MuiCard style={{ maxWidth: 600 }}>
      <CardHeader
        avatar={Avatar}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
        subheader={subtitle}
      />

      <CardMedia
        component="img"
        height="194"
        image={imageSrc}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
      {footer && isMobileScreen && (
        <CardActions disableSpacing sx={styles.footer}>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      )}
    </MuiCard>
  );
};

export default Card;
