import React, { Component } from "react";
import "./home.css";
import Header from "../../common/Header/Header";
import { withStyles } from "@material-ui/core/styles";
import moviesData from "../../common/moviesData";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
const styles = (theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  upcomingMoviesHeading: {
    textAlign: "center",
    background: "#ff9999",
    padding: "8px",
    fontSize: "1rem",
  },
  gridListUpcomingMovies: {
    flexWrap: "nowrap",
    transform: "translateZ(0)",
    width: "100%",
  },
  gridListMain: {
    transform: "translateZ(0)",
    cursor: "pointer",
  },
});

class Home extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        {/* <Header /> */}
        <div className={classes.upcomingMoviesHeading}>
          <span>Upcoming Movies</span>
        </div>
        <GridList cols={6} className={classes.gridListUpcomingMovies}>
          {moviesData.map((moviesData) => (
            <GridListTile key={moviesData.id}>
              <img
                src={moviesData.poster_url}
                className="movie-poster"
                alt={moviesData.title}
              />
              <GridListTileBar title={moviesData.title} />
            </GridListTile>
          ))}
        </GridList>

        <div className="flex-container">
          <div className="left">
            <GridList
              cellHeight={350}
              cols={4}
              className={classes.gridListMain}
            >
              {moviesData.map((moviesData) => (
                <GridListTile
                  className="released-movie-grid-item"
                  key={"grid" + moviesData.id}
                >
                  <img
                    src={moviesData.poster_url}
                    className="movie-poster"
                    alt={moviesData.title}
                  />
                  <GridListTileBar
                    title={moviesData.title}
                    subtitle={
                      <span>
                        Release Date:{" "}
                        {new Date(moviesData.release_date).toDateString()}
                      </span>
                    }
                  />
                </GridListTile>
              ))}
            </GridList>
          </div>
          <div className="right"></div>
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(Home);