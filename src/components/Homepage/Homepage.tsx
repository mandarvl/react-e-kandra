import { Box, Button, makeStyles, TextField } from "@material-ui/core";
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
                        <form className={searchForm+" flex-container stretch" }>
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
                        </form>
                    </Box>
                </div>
            </div>
        </div>
    ) ;
}