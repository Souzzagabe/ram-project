import { Box, Grid, ImageList, ImageListItem } from "@mui/material";
import { styled } from "@mui/system";
import fotoDeMorty from "@/assets/rick22.png";
import fotoDeRick from "@/assets/morty22.jpg";
import Footer from "../footer/Footer";

const StyledImageListItem = styled(ImageListItem)({
  borderRadius: "5px",
  overflow: "hidden",
  transition: "opacity 0.3s ease-in-out",
  "&:hover": {
    opacity: 0.8,
  },
  border: "1px solid white",
  "& img": {
    objectFit: "contain", // Alteração para 'contain'
    width: "100%",
    height: "100%",
    maxWidth: "100%",
  },
});

const Home = () => {
  return (
    <Box
      maxWidth="1000px"
      margin="auto"
      bgcolor="#E1B15C"
      minWidth="dvh"
      minHeight=""
    >
      <Grid container spacing={0} minHeight="100%">
        <Grid item xs={12} sm={6}>
          <ImageList cols={1} rowHeight={555}>
            <StyledImageListItem>
              <img src={fotoDeMorty} alt="Morty" />
            </StyledImageListItem>
          </ImageList>
        </Grid>
        <Grid item xs={12} sm={6}>
          <ImageList cols={1} rowHeight={555}>
            <StyledImageListItem>
              <img src={fotoDeRick} alt="Rick" />
            </StyledImageListItem>
          </ImageList>
        </Grid>
      </Grid>
      <Box paddingTop="62px">
        <Footer />
      </Box>
    </Box>
  );
};

export default Home;
