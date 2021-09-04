import { AppBar, Container, Toolbar, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    root: {
        height: "max-content",
        display: "flex",
        flexDirection: "column",
        marginTop: "25px",
        "& .MuiGrid-item>*": {
            height: "100%"
        }
    }
})) ;

export default function Footer() {
    const classes = useStyles() ;
    return (
        <AppBar component="footer" position="static" className={classes.root} color="primary">
          <Container maxWidth="md">
            <Toolbar>
              <Typography variant="body1" color="inherit"> 
                © 2021 E-Kandra - Ravalison Manda Jerisoa IMTICIA5
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
    )
}