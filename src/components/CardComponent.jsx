import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  CardActionArea,
  CardMedia,
  Divider,
  IconButton,
  Box,
} from "@mui/material";
import {
  useNavigate,
} from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeIcon from "@mui/icons-material/Mode";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PropTypes from "prop-types";
import { Link } from "@mui/icons-material";
import ROUTES from "../routes/ROUTES";



const CardComponent = ({
  title,
  subtitle,
  img,
  phone,
  address,
  cardNumber,
  idCard,
  onDelete,
  onChange,
  onLoved
}) => {
  const navigate = useNavigate();

  const handleDeleteClick = () => {
    console.log("Children: on delete", idCard);
    onDelete(idCard);
  };

  const handleChangeClick = (e) => {
    console.log('chldren: Change', idCard);
    e.preventDefault();
    navigate(`${ROUTES.EDITCARD}/${idCard}`);
    onChange(idCard);
  }

  const handlePhoneClick = () => {
    console.log('children: Phone ', phone);
  }

  const handleLovedClick = () => {
    console.log('chldren: love', idCard);
    onLoved(idCard);
  }

  return (
    <Card square raised>
      <CardActionArea>
        <CardMedia
          component="img"
          image={img}
          alt="american massle car"
          height={500}
        />
      </CardActionArea>
      <CardHeader title={title} subheader={subtitle}></CardHeader>
      <Divider></Divider>
      <CardContent>
        <Typography>
          <Typography component="span" fontWeight={700}>
            Phone:
          </Typography>
          {phone}
        </Typography>
        <Typography>
          <Typography component="span" fontWeight={700}>
            Address:
          </Typography>
          {address.city}
        </Typography>
        <Typography>
          <Typography component="span" fontWeight={700}>
            Card number:
          </Typography>
          {cardNumber}
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <IconButton onClick={handleDeleteClick}>
              <DeleteIcon />
            </IconButton>

            <IconButton onClick={handleChangeClick}>
              <ModeIcon />
            </IconButton>
          </Box>

          <Box>
            <IconButton onClick={handlePhoneClick}>
              <LocalPhoneIcon />
            </IconButton>

            <IconButton onClick={handleLovedClick}>
              <FavoriteIcon />
            </IconButton>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

CardComponent.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  img: PropTypes.string,
  phone: PropTypes.string.isRequired,
  address: PropTypes.shape({
    city: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    houseNumber: PropTypes.number.isRequired,
  }).isRequired,
  cardNumber: PropTypes.number.isRequired,
  idCard: PropTypes.any.isRequired
};

CardComponent.defaultProps = {
  img: '/assets/images/car 1.jpg',
  subtitle: "subtitle default",
};

export default CardComponent;
