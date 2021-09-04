import { makeStyles, Grid } from "@material-ui/core";
import CardEmploi from "./CardEmploi";

const useStyles = makeStyles({
    root: {
        "& .MuiGrid-item>*":{
            height: "100%"
        }
    }
});

export default function ListEmploiDisplay(props:any) {
    const classes = useStyles() ;
    return (
        <Grid
            className={classes.root}
            container
            spacing={3}
            alignItems="stretch"
        >
            {
                props.lists.map((item:any) => 
                    <Grid item xs={6} key={item.id}>
                        <CardEmploi emploi={item} />
                    </Grid>
                )
            }
        </Grid>
    ) ;
}