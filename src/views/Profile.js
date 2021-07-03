import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import { makeStyles, createMuiTheme } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
// import View from '@material-ui/core/View

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: '#CCC',
	},
    profile: {
        backgroundColor: '#FFF',
        margin: '16px',
        padding: '24px',
        borderRadius: '24px',
    },
    tagcontainer: {
        margin: 'auto',
    }
}));  

export default function AddressForm() {
    const classes = useStyles();
    return (
	<div className={classes.root}>
        <div className={classes.profile}>
            <React.Fragment>
                <Grid container justify="center">
                    <Typography variant="h4"  style={{color: "#000"}} gutterBottom>
                        <AccountCircleIcon /> Profile
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={12}>
                            <TextField
                                required
                                id="Username"
                                name="Username"
                                label="Username"
                                autoComplete="Username"
                                style={{ float: "left", width: "79%" }}
                            />
                            <TextField
                                id="TimeAvailable"
                                name="TimeAvailable"
                                label="Time Available"
                                type="number"
	                        helperText="Available number of hours for this sprint"
                                autoComplete="Time Available"
                                style={{ float: "right", width: "19%" }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="FirstName"
                                name="FirstName"
                                label="First Name"
                                autoComplete="FirstName"
                                style={{ float: "left", width: "49%" }}
                            />
                            <TextField
                                id="LastName"
                                name="LastName"
                                label="Last Name"
                                autoComplete="LastName"
                                style={{ float: "right", width: "49%" }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <Typography variant="h6" gutterBottom align="center" style={{color: "#000"}}>
                                <LocalOfferIcon /> Tags
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={8} lg={6} align="center" className={classes.tagcontainer}>
                            <FormControlLabel
                                control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                                label="GoogleAnalytics"
                                style={{ marginRight: "36px", color: "#000"}}
                            />
                            <FormControlLabel
                                control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                                label="Documentation"
                                style={{ marginRight: "36px", color: "#000" }}
                            />
                            <FormControlLabel
                                control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                                label="Email"
                                style={{ marginRight: "36px", color: "#000" }}
                            />
                            <FormControlLabel
                                control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                                label="Frontend"
                                style={{ marginRight: "36px", color: "#000" }}
                            />
                            <FormControlLabel
                                control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                                label="Backend"
                                style={{ marginRight: "36px", color: "#000" }}
                            />
                            <FormControlLabel
                                control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                                label="Firebase"
                                style={{ marginRight: "36px", color: "#000" }}
                            />
                            <FormControlLabel
                                control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                                label="Firestore"
                                style={{ marginRight: "36px", color: "#000" }}
                            />
                            <FormControlLabel
                                control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                                label="In-House"
                                style={{ marginRight: "36px", color: "#000" }}
                            />
                            <FormControlLabel
                                control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                                label="Figma"
                                style={{ marginRight: "36px", color: "#000" }}
                            />
                            <FormControlLabel
                                control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                                label="MySQLWorkbench"
                                style={{ marginRight: "36px", color: "#000" }}
                            />
                            <FormControlLabel
                                control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                                label="Python"
                                style={{ marginRight: "36px", color: "#000" }}
                            />
                            <FormControlLabel
                                control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                                label="MySQL"
                                style={{ marginRight: "36px", color: "#000" }}
                            />
                            <FormControlLabel
                                control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                                label="JavaScript"
                                style={{ marginRight: "36px", color: "#000" }}
                            />
                            <FormControlLabel
                                control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                                label="JQuery"
                                style={{ marginRight: "36px", color: "#000" }}
                            />
                            <FormControlLabel
                                control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                                label="React"
                                style={{ marginRight: "36px", color: "#000" }}
                            />
                            <FormControlLabel
                                control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                                label="Django"
                                style={{ marginRight: "36px", color: "#000" }}
                            />
                            <FormControlLabel
                                control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                                label="Flask"
                                style={{ marginRight: "36px", color: "#000" }}
                            />
                            <FormControlLabel
                                control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                                label="WTForms"
                                style={{ marginRight: "36px", color: "#000" }}
                            />
                        </Grid>
                        {/* <View> */}
                        <Grid container justify="flex-end">
                            <Button variant="contained" style={{ alignSelf: 'flex-end', margin: "5px" }}>
                                Cancel
                            </Button>
                            <Button variant="contained" color="primary" style={{ backgroundColor: "#357a38", alignSelf: 'flex-end', margin: "5px", paddingLeft: "28px", paddingRight: "28px" }}>
                                Save
                            </Button>
                        </Grid>

                        {/* </View> */}

                    </Grid>
                </Grid>
            </React.Fragment>
        </div>
	</div>
    );
}