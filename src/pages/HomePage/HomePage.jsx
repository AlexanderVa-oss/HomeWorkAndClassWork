import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CardComponent from "../../components/CardComponent";

const initialDataFromServer = [
  {
    idCard: "sdlfkjgn1",
    title: "title1",
    subtitle: "subtitle1",
    body: "body1",
    img: "/assets/images/car 1.jpg",
    phone: '051'
  },
  {
    idCard: "sdlfkjgn2",
    title: "title2",
    subtitle: "subtitle2",
    body: "body2",
    img: "/assets/images/car 2.jpg",
    phone: '052'
  },
  {
    idCard: "sdlfkjgn3",
    title: "title3",
    subtitle: "subtitle3",
    body: "body3",
    img: "/assets/images/car 3.jpg",
    phone: '053'
  },
  {
    idCard: "sdlfkjgn4",
    title: "title4",
    subtitle: "subtitle4",
    body: "body4",
    img: "/assets/images/car 4.jpg",
    phone: '054'
  },
  {
    idCard: "sdlfkjgn5",
    title: "title5",
    subtitle: "subtitle5",
    body: "body5",
    img: "/assets/images/car 5.png",
    phone: '055'
  },
];

// const initialDataFromServer = [];

const handleDeleteCard = (idCard) => {
  console.log("father: card to delete", idCard);
};

const handleChangeClick = (idCard) => {
  console.log('Father: you presed on button in-', idCard);
}

const handleLovedClick = (idCard) => {
  console.log('Father: You love', idCard);
}

const HomePage = () => {
  if (!initialDataFromServer || !initialDataFromServer.length) {
    return <Typography>Could not find any items</Typography>;
  }
  return (
    <Grid container spacing={2}>
      {initialDataFromServer.map((item, index) => (
        <Grid item lg={3} md={6} xs={12} key={"carsCard" + index}>
          <CardComponent
            idCard={item.idCard}
            title={item.title}
            subtitle={item.subtitle}
            img={item.img}
            phone={item.phone}
            address={{
              city: "South park",
              street: "Hogwarts",
              houseNumber: 123,
              zipCode: 12345,
            }}
            cardNumber={12345}
            onDelete={handleDeleteCard}
            onChange={handleChangeClick}
            onLoved={handleLovedClick}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default HomePage;
