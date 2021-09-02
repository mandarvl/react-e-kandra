import { Card, CardActionArea, CardActions, Button, CardMedia, CardContent, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
});

export default function Emploi() {
    const classes = useStyles() ;
    return (
    <div>
        <Card className={classes.root} variant="outlined">
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image="uploads/posts/front.jpg"
                title="Développeur front-end"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Développeur Front-end
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Nous sommes en recherche d'un développeur Front-end qui aura comme mission de transformer des maquettes en un site web fonctionnel.
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="secondary">
                Contacter
                </Button>
                <Button size="small" color="secondary">
                Voir plus
                </Button>
            </CardActions>
        </Card>
    </div>
    ) ;
}