import { Box, Button, Checkbox, FormControlLabel, Paper, Grid, makeStyles, TextField } from "@material-ui/core";
import React from "react" ;
import { withRouter } from "react-router-dom";
import coverImg from '../assets/images/cover-home.jpg' ;

const useStyles = makeStyles(() => ({
    mainContainer: {
        padding: "160px",
        width: "100%",
        backgroundImage: "url("+coverImg+")",
        backgroundSize: "cover",
        backgroundPosition: "50% 50%"
    },
    searchBox: {
        backgroundColor: "#fff",
        width: "100%"
    },
    searchForm: {
        marginTop: "25px",
        "& .MuiGrid-item *": {
            width: "100%",
            height: "100%"
        }
    }
})) ;

function Homepage(props:any) {
    const { mainContainer, searchBox,searchForm } = useStyles() ;
    const emploiRef = React.createRef() ;
    const performSearch = () => {
        console.log(emploiRef.current) ;
        if(emploiRef == null)
            return ;
        props.history.push("/search/"+(emploiRef.current as HTMLInputElement).value) ;
    }

    return (
        <div>
            <Grid 
                container 
                className={mainContainer}
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Paper className={searchBox}>
                    <Box p={10}>
                        <h3>Rechercher un emploi</h3>
                        <form onSubmit={performSearch} className={searchForm }>
                            <div>
                                <FormControlLabel control={<Checkbox name="checkedCDI" />} label="CDI" />
                                <FormControlLabel control={<Checkbox name="checkedCDD" />} label="CDD" />
                                <FormControlLabel control={<Checkbox name="checkedStage" />} label="Stage" />
                            </div>
                            <Grid 
                                container 
                                direction="row"
                                spacing={2}
                                justify-content="flex-start"
                                alignItems="stretch"
                                style={{marginTop: "10px"}}
                            >
                                <Grid item xs>
                                    <TextField inputRef={emploiRef} label="Quel emploi recherchez-vous?" variant="filled" />
                                </Grid>
                                <Grid item xs={2}>
                                    <Button onClick={performSearch} variant="contained" color="secondary">
                                        Rechercher
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Box>
                </Paper>
            </Grid>
        </div>
    ) ;
}

export default withRouter(Homepage) ;