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
    let description = props.emploi.description ;
    const max = 100 ;
    
    if(description.length > max){
        description = description.substring(0, max).trimEnd().concat("...") ;
    }
    return (
    <Card className={classes.root} variant="outlined">
        <CardActionArea>
            <CardMedia
            className={classes.media}
            image={process.env.PUBLIC_URL+"/"+props.emploi.image}
            title={props.emploi.titre}
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="h2">
                {props.emploi.titre}
                </Typography>
                <Typography gutterBottom variant="subtitle2" component="h3">
                    <WorkIcon className={classes.smallIcon} /> {props.emploi.entreprise}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                {description}
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