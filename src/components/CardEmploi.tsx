import { Card, CardActionArea, CardActions, Button, CardMedia, CardContent, Typography, makeStyles } from '@material-ui/core' ;
import WorkIcon from '@material-ui/icons/Work';

const useStyles = makeStyles({
    root: {
        width: "100%"
    },
    media: {
        height: 160,
    },
    smallIcon: {
        fontSize: "1em",
        verticalAlign: "middle"
    }
})

export default function CardEmploi(props:{emploi:any}){
    const classes = useStyles() ;
    return (
    <Card className={classes.root} variant="outlined">
        <CardActionArea>
            <CardMedia
            className={classes.media}
            image={props.emploi.image}
            title={props.emploi.titre}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                {props.emploi.titre}
                </Typography>
                <Typography gutterBottom variant="subtitle2" component="h3">
                    <WorkIcon className={classes.smallIcon} /> {props.emploi.entreprise}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                {props.emploi.description}
                </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="secondary">
            Voir les détails
            </Button>
            <Button size="small" color="secondary">
            Contacter
            </Button>
        </CardActions>
    </Card>
    );
}