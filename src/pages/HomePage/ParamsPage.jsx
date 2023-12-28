import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import ROUTES from "../../routes/ROUTES";

const ParamsPage = () => {
    return (
        <Stack>
            <Link to={`${ROUTES.EDITCARD}/asf1`}>card 1</Link>
            <Link to={`${ROUTES.EDITCARD}/asf2`}>card 2</Link>
            <Link to={`${ROUTES.EDITCARD}/asf3`}>card 3</Link>
        </Stack>
    )
};

export default ParamsPage 
