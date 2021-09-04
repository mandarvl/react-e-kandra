import { makeStyles, Typography, Box } from "@material-ui/core";
import ListEmploiDisplay from "./ListEmploiDisplay";
import EmploiService from "../services/emploi-service";
import { withRouter } from "react-router-dom" ;

const emploiService = new EmploiService() ;

const useStyles = makeStyles({
    root: {
        width: "90%",
    }
});

function Search(props:{match?: any}){
    const classes = useStyles() ;
    const keyword = props.match.params.keyword.toString() ;
    const results = emploiService.searchEmplois(keyword) ;
    const testPluriel = results.length > 1 ? "s":"" ;
    return (
    <Box my={3} mx="auto" className={classes.root}>
        <Box my={3}>
            <Typography variant="h5" component="h1">Résultats de votre recherche : </Typography>
            <Typography variant="body1"><b>{ results.length }</b> offre{testPluriel} correspondant à <b>{ keyword }</b> trouvée{testPluriel} pour vous.</Typography>
        </Box>
        <ListEmploiDisplay lists={results} />
    </Box>
    ) ;
}

export default withRouter(Search) ;