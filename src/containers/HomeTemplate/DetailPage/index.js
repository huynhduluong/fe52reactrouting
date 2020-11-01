import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "../../../components/Loader";
import { actDetailApi } from "./modules/action";

class DetailPage extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.handleDetailMovie(id);
  }

  // renderInfo = (detailMovie) => {
  //   // if (detailMovie) {
  //   return (
  //     );
  //   // }
  // };

  renderTable = () => {
    const { detailMovie } = this.props;
    if (detailMovie) {
      return detailMovie.lichChieu
        .filter((item, index) => {
          return index < 10;
        })
        .map((item) => {
          // const ngayChieu = item.ngayChieuGioChieu
          //   .slice(0, 10)
          //   .split("-")
          //   .reverse()
          //   .join("-");
          // const gioChieu = ;
          return (
            <tr key={item.maLichChieu}>
              <td>{item.thongTinRap.tenCumRap}</td>
              <td>{item.thongTinRap.tenRap}</td>
              <td>{new Date(item.ngayChieuGioChieu).toLocaleDateString()}</td>
              <td>{new Date(item.ngayChieuGioChieu).toLocaleTimeString()}</td>
              <td>
                <Link className="btn btn-success" to="/">Booking</Link>
              </td>
            </tr>
          );
        });
    }
  };

  render() {
    const { loading, detailMovie } = this.props;
    if (loading) {
      return <Loader />;
    }
    return (
      <div>
        <div className="container">
          <h3>Detail Page</h3>
          <div className="row justify-content-between">
            <div className="col-md-4 col-12">
              <img
                src={detailMovie && detailMovie.hinhAnh}
                alt="hinh"
                // height="250px"
                className="img-fluid"
              />
            </div>
            <div className="col-md-6 col-12">
              <table className="table">
                <tbody>
                  <tr>
                    <td>Tên phim</td>
                    <td>{detailMovie && detailMovie.tenPhim}</td>
                  </tr>
                  <tr>
                    <td>Mô tả</td>
                    <td>{detailMovie && detailMovie.moTa}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <table className="table">
                <thead>
                  <tr>
                    <th>Cụm rạp</th>
                    <th>Tên rạp</th>
                    <th>Ngày chiếu</th>
                    <th>Giờ chiếu</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>{this.renderTable()}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleDetailMovie: (id) => {
      dispatch(actDetailApi(id));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    detailMovie: state.detailMovieReducer.data,
    loading: state.detailMovieReducer.loading,
    err: state.detailMovieReducer.err,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailPage);
