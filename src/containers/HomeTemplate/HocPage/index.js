import React, { Component } from "react";
import NhanVien from "./NhanVien";
import SanPham from "./SanPham";
import WithModal from "./WithModal";

const ModalForm = WithModal(SanPham);

export default class HocPage extends Component {
  render() {
    return (
      <div>
        <h1>Hoc page</h1>
        {/* <NhanVien /> */}
        {/* <SanPham /> */}
        <ModalForm />
      </div>
    );
  }
}
