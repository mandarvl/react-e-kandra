import { makeStyles, Box, Typography } from "@material-ui/core";
import EmploiService from "../services/emploi-service";
import ListEmploiDisplay from "./ListEmploiDisplay";

const emploiService = new EmploiService() ;

const useStyles = makeStyles({
    root: {
        width: "90%"
    }
});

export default function Emploi() {
    const classes = useStyles() ;
    return (
    <Box my={3} mx="auto" className={classes.root}>
        <Box my={3}>
            <Typography variant="h5" component="h1">Offres d'emplois </Typography>
            <Typography variant="body1">De nombreux entreprises recherchent un employé comme vous. Choisissez une offre et obtenez votre job de rêves!</Typography>
        </Box>
        <ListEmploiDisplay lists={emploiService.getEmplois()} />
    </Box>
    ) ;
}