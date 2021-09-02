import { AppBar, Button, IconButton, makeStyles, Toolbar, Typography, Drawer, Link, MenuItem } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu' ;
import { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles(() => ({
    header: {
        backgroundColor: "primary",
        paddingRight: "79px",
        paddingLeft: "118px",
        position: "sticky",
        marginBottom: "20px",
        "@media (max-width: 900px)": {
            paddingLeft: 0,
        }
    },
    menuBar: {
        display: "flex",
        justifyContent: "space-between"
    },
    logo: {
        fontFamily: "Work Sans, sans-serif",
        fontWeight: 600,
        color: "#FFFEFE",
        textAlign: "left",
    },
    menuButton: {
        fontFamily: "Open Sans, sans-serif",
        fontWeight: 700,
        size: "18px",
        marginLeft: "25px",
    },
    drawerContainer: {
        padding: "20px 30px"
    }
})) ;

const headersData = [
    {
        label: "Emplois",
        href: "/emploi",
    },
    {
        label: "Contact",
        href: "/contact"
    },
    {
        label: "Se connecter",
        href: "/login"
    },
    {
        label: "Creer un compte",
        href: "/signup"
    }
] ;

export default function Header() {
    const { header, logo, menuButton, menuBar, drawerContainer } = useStyles() ;

    const [state, setState] = useState({
        mobileView: false,
        drawerOpen: false
    });
    
    const { mobileView, drawerOpen } = state;

    useEffect(() => {
        const setResponsiveness = () => {
          return window.innerWidth < 900
            ? setState((prevState) => ({ ...prevState, mobileView: true }))
            : setState((prevState) => ({ ...prevState, mobileView: false }));
        };
    
        setResponsiveness();
        window.addEventListener("resize", () => setResponsiveness());
    
        return () => {
          window.removeEventListener("resize", () => setResponsiveness());
        }
    }, []);

    const displayDesktop = () => {
        return (
            <Toolbar className={menuBar}>
                {logoComp}
                <div>{ getMenuButtons() }</div>
            </Toolbar>
        );
    };

    const displayMobile = () => {
        const handleDrawerOpen = () => 
            setState((prevState) => ({ ...prevState, drawerOpen: true }));
        const handleDrawerClose = () =>
            setState((prevState) => ({ ...prevState, drawerOpen: false }));

        return (
          <Toolbar>
            <IconButton
              {...{
                edge: "start",
                color: "inherit",
                "aria-label": "menu",
                "aria-haspopup": "true",
                onClick: handleDrawerOpen
              }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
            {...{
                anchor: "left",
                open: drawerOpen,
                onClose: handleDrawerClose,
                className: drawerContainer
            }}
            >
                <div>{getDrawerChoices()}</div>
            </Drawer>
            <div>{logoComp}</div>
            </Toolbar>
        );
    };

    const logoComp = (
        <Typography className={logo} variant="h6" component="h1">
            <RouterLink to="/">E-Kandra</RouterLink>
        </Typography>
    );

    const getDrawerChoices = () => {
        return headersData.map(({ label, href }) => {
          return (
            <Link
              {...{
                component: RouterLink,
                to: href,
                color: "inherit",
                style: { textDecoration: "none" },
                key: label,
              }}
            >
              <MenuItem>{label}</MenuItem>
            </Link>
          );
        });
    };

    const getMenuButtons = () => {
        return headersData.map(({ label, href }) => {
          return (
            <Button
              {...{
                key: label,
                color: "inherit",
                to: href,
                component: RouterLink,
                className: menuButton
              }}
            >
              {label}
            </Button>
          );
        });
    };

    return (
        <AppBar className={header}>{mobileView ? displayMobile() : displayDesktop()}</AppBar>
    );
}