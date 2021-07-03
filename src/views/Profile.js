import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
// import View from '@material-ui/core/View


export default function AddressForm() {
    return (
        <React.Fragment>
            <Grid>
                <Typography variant="h4" gutterBottom>
                    Profile
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12}>
                        <TextField
                            required
                            id="Username"
                            name="Username"
                            label="Username"
                            fullWidth
                            autoComplete="Username"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="TimeAvailable"
                            name="TimeAvailable"
                            label="Time Available"
                            fullWidth
                            autoComplete="Time Available"
                        />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <Typography variant="h6" gutterBottom align="left">
                            Tags
                        </Typography>
                    </Grid>
                    <Grid item xs={12} align="left">
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                            label="GoogleAnalytics"
                            style={{ marginRight: "36px" }}
                        />
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                            label="Documentation"
                            style={{ marginRight: "36px" }}
                        />
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                            label="Email"
                            style={{ marginRight: "36px" }}
                        />
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                            label="Frontend"
                            style={{ marginRight: "36px" }}
                        />
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                            label="Backend"
                            style={{ marginRight: "36px" }}
                        />
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                            label="Firebase"
                            style={{ marginRight: "36px" }}
                        />
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                            label="Firestore"
                            style={{ marginRight: "36px" }}
                        />
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                            label="In-House"
                            style={{ marginRight: "36px" }}
                        />
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                            label="Figma"
                            style={{ marginRight: "36px" }}
                        />
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                            label="MySQLWorkbench"
                            style={{ marginRight: "36px" }}
                        />
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                            label="Python"
                            style={{ marginRight: "36px" }}
                        />
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                            label="MySQL"
                            style={{ marginRight: "36px" }}
                        />
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                            label="JavaScript"
                            style={{ marginRight: "36px" }}
                        />
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                            label="JQuery"
                            style={{ marginRight: "36px" }}
                        />
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                            label="React"
                            style={{ marginRight: "36px" }}
                        />
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                            label="Django"
                            style={{ marginRight: "36px" }}
                        />
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                            label="Flask"
                            style={{ marginRight: "36px" }}
                        />
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                            label="WTForms"
                            style={{ marginRight: "36px" }}
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
    );
}