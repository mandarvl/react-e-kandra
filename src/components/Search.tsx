import { makeStyles, Container, Grid } from "@material-ui/core";
import CardEmploi from "./CardEmploi";
import EmploiService from "../services/emploi-service";
import { withRouter } from "react-router-dom" ;

const emploiService = new EmploiService() ;

const useStyles = makeStyles({
    root: {
        width: "90%",
        marginTop: "20px"
    }
});

function Search(props:{match?: any}){
    const classes = useStyles() ;
    const keyword = props.match.params.keyword.toString() ;

    return (
    <Container className={classes.root}>
        <Grid
            container
            spacing={3}
            alignItems="stretch"
        >
            {
                emploiService.searchEmplois(keyword).map((item:any) => 
                    <Grid item xs={6} key={item.id}>
                        <CardEmploi emploi={item} />
                    </Grid>
                )
            }
        </Grid>
    </Container>
    ) ;
}

export default withRouter(Search) ;