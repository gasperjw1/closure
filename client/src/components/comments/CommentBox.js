import React from "react";
import axios from "axios";
import { makeStyles, Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const CommentBox = ({
  auth,
  postComment,
  value,
  handleChange,
  handleCancel,
  inputRef,
}) => {
  const classes = useStyles();

  return (
    <Paper>
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField
            label="Enter Public Comment"
            multiline
            onChange={handleChange}
            style={{ width: "100%" }}
            value={value}
            inputRef={inputRef}
          />
        </div>
        <div style={{ display: "flex" }}>
          <Button
            variant="contained"
            color="secondary"
            style={{ marginLeft: "auto" }}
            onClick={handleCancel}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={postComment}
            disabled={value === ""}
          >
            Submit
          </Button>
        </div>
      </form>
    </Paper>
  );
};

CommentBox.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(CommentBox);
