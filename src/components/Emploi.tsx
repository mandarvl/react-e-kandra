import { makeStyles, Container, Grid } from "@material-ui/core";
import CardEmploi from "./CardEmploi";
import EmploiService from "../services/emploi-service";

const emploiService = new EmploiService() ;

const useStyles = makeStyles({
    root: {
        width: "90%",
        marginTop: "20px"
    }
});

export default function Emploi() {
    const classes = useStyles() ;
    return (
    <Container className={classes.root}>
        <Grid
            container
            spacing={3}
            alignItems="stretch"
        >
            {
                emploiService.getEmplois().map((item:any) => 
                    <Grid item xs={6} key={item.id}>
                        <CardEmploi emploi={item} />
                    </Grid>
                )
            }
        </Grid>
    </Container>
    ) ;
}