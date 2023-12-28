import React from "react";
import {
    Card,
    CardHeader,
    CardMedia,
    Paper,
    BottomNavigation,
    BottomNavigationAction,
} from "@mui/material"
import {
    Twitter,
} from "@mui/icons-material";

const CardComponent = () => {
    let cardImage = "https://cdn.leonardo.ai/users/c8403bf4-a2b8-4f9b-8979-5a052f8cdd72/generations/22d89031-3379-47a7-aadc-10ac51303a4b/variations/alchemyrefiner_alchemymagic_1_22d89031-3379-47a7-aadc-10ac51303a4b_0.jpg"
    return (
        <Card sx={{ width: 250, m: 2 }}>
            <CardMedia component="img" height="500" image={cardImage}></CardMedia>
            <CardHeader title='Card Header' subheader='Card Subheader' />
            <Paper>
                <BottomNavigation >
                    <BottomNavigationAction label='twitter' icon={<Twitter />}></BottomNavigationAction>
                </BottomNavigation>
            </Paper>
        </Card>
    );
};

export default CardComponent