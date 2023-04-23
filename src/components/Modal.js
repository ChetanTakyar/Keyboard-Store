import React from "react";

import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Modal,
  Typography,
} from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const BasicModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        variant="text"
        color="inherit"
        onClick={handleOpen}>
        Favourites
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2">
            Favourites
          </Typography>
          <Card sx={{ p: 2 }}>
            <CardHeader title="Top Tier Keeb" />
            <CardContent>
              <CardMedia
                component="img"
                height="194"
                image="https://m.media-amazon.com/images/I/61GnUc9e7VL._AC_SL1500_.jpg"
                alt="Keyboard"
              />
              <Typography sx={{ fontSize: 12 }}>
                This is an item I am totally selling and it is very nice
              </Typography>
              <Typography justifySelf={"right"}>$50,000</Typography>
            </CardContent>

            <CardActions>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>

              <Button
                size="medium"
                fullWidth
                variant="contained">
                Add to cart
              </Button>
            </CardActions>
          </Card>
        </Box>
      </Modal>
    </div>
  );
};

export default BasicModal;
