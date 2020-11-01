import React, { Component } from "react";
import Movie from "../../../components/Movie";
import { connect } from "react-redux";
import { actListMovieApi } from "./modules/action";
import Loader from "../../../components/Loader";

class ListMoviePage extends Component {
  componentDidMount() {
    this.props.listMovieApi();
  }

  renderHTML = () => {
    const { listMovie } = this.props;
    if (listMovie && listMovie.length > 0) {
      return listMovie.map((movie) => {
        return <Movie key={movie.maPhim} movie={movie} />;
      });
    }
  };

  render() {
    const { loading } = this.props;
    if (loading) {
      return <Loader />;
    }
    return (
      <div>
        <h1>ListMoviePage</h1>
        <div className="container">
          <div className="row text-center">{this.renderHTML()}</div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    listMovieApi: () => {
      dispatch(actListMovieApi());
    },
  };
};

const mapStateToProps = (state) => {
  return {
    listMovie: state.listMovieReducer.data,
    loading: state.listMovieReducer.loading,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListMoviePage);
