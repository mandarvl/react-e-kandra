import { Box, Button, Checkbox, FormControlLabel, makeStyles, TextField } from "@material-ui/core";
import React from "react";
import coverImg from '../../assets/images/cover-home.jpg' ;

const useStyles = makeStyles(() => ({
    mainContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "180px",
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
        marginTop: "25px"
    }
})) ;

export default function Homepage() {
    const { mainContainer, searchBox,searchForm } = useStyles() ;
    return (
        <div>
            <div className={mainContainer}>
                <div className={searchBox}>
                    <Box p={10}>
                        <h3>Rechercher un emploi</h3>
                        <form className={searchForm }>
                            <div>
                                <FormControlLabel control={<Checkbox name="checkedCDI" />} label="CDI" />
                                <FormControlLabel control={<Checkbox name="checkedCDD" />} label="CDD" />
                                <FormControlLabel control={<Checkbox name="checkedStage" />} label="Stage" />
                            </div>
                            <div className="flex-container stretch">
                                <div className="flex-item flex-grow">
                                    <TextField label="Quel emploi recherchez-vous?" variant="filled" />
                                </div>
                                <div className="flex-item flex-grow">
                                    <TextField label="Où?" variant="filled" />
                                </div>
                                <div className="flex-item">
                                    <Button variant="contained" color="secondary">
                                        Rechercher
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </Box>
                </div>
            </div>
        </div>
    ) ;
}