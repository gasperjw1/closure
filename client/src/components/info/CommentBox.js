import React from "react";
import { makeStyles, Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function MultilineTextFields() {
  const classes = useStyles();
  const [value, setValue] = React.useState("Controlled");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <h2>Leave A Comment</h2>
      </div>
      <div>
        <TextField
          id="outlined-multiline-static"
          label="Enter Your Comment"
          multiline
          rows={4}
          defaultValue="Wow I really miss this place..."
          variant="outlined"
        />
      </div>
      <div>
        <Button variant="outlined">Submit</Button>
      </div>
    </form>
  );
}
