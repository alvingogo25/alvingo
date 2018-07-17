import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const styles = theme => ({
  root: {
    width: "100%",
    color: "#DEE5E5",
    fontFamily: "'Quicksand', sans-serif",
    paddingTop: "10px"
  },
  heading: {
    fontSize: theme.typography.pxToRem(25),
    flexBasis: "33.33%",
    flexShrink: 0
  },
  content: {
    fontSize: theme.typography.pxToRem(20)
  },
  panel: {
    backgroundColor: "#F4F7F500"
  },
  column: {
    display: "flex",
    justifyContent: "space-around",
    maxWidth: "900px"
  }
});

class Resume extends React.Component {
  state = {
    expanded: null
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false
    });
  };

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

    return (
      <div className={classes.root}>
        <ExpansionPanel
          expanded={expanded === "panel1"}
          onChange={this.handleChange("panel1")}
          className={classes.panel}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <span className={classes.heading}>Skills</span>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.content}>
            <ul>
              <li>HTML/CSS</li>
              <li>Javascript</li>
              <li>jQuery</li>
              <li>Node</li>
              <li>Express</li>
            </ul>
            <ul style={{ marginLeft: "10%" }}>
              <li>React</li>
              <li>Git</li>
              <li>SQL</li>
              <li>MongoDB</li>
            </ul>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === "panel2"}
          onChange={this.handleChange("panel2")}
          className={classes.panel}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <span className={classes.heading}>Employment</span>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.content}>
            <ul style={{width:"100%"}}>
              <li>
                <div className="row">
                  <span className={classNames(classes.heading, "col s12 m4")}>
                    ParkMe
                  </span>
                  <span className="col s12 m4">
                    Data Operations & Drive Tester
                  </span>
                  <span className="col s12 m4">Feb 2016-Present</span>
                </div>
              </li>
              <li>
                <div className="row">
                  <span className={classNames(classes.heading, "col s12 m4")}>
                    Sasco
                  </span>
                  <span className="col s12 m4">Field Auditor</span>
                  <span className="col s12 m4">July 2014-Feb 2016</span>
                </div>
              </li>
              <li>
                <div className="row">
                  <span className={classNames(classes.heading, "col s12 m4")}>
                    UDC
                  </span>
                  <span className="col s12 m4">Field Data Technician & QA</span>
                  <span className="col s12 m4">Jan 2013-Jul 2014</span>
                </div>
              </li>
              <li>
                <div className="row">
                  <span className={classNames(classes.heading, "col s12 m4")}>
                    Geodigital
                  </span>
                  <span className="col s12 m4">Image Analyst</span>
                  <span className="col s12 m4">Aug 2011-Nov 2013</span>
                </div>
              </li>
            </ul>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === "panel3"}
          onChange={this.handleChange("panel3")}
          className={classes.panel}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <span className={classes.heading}>Education</span>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.content}>
            <ul>
              <li>
                <h5>UCLA Extension</h5>
                <span>Full Stack Web Development</span>
              </li>
              <li>
                <h5>University of California, Santa Barbara</h5>
                <span>BS Geography with Emphasis in Geography</span>
              </li>
            </ul>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

Resume.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Resume);
