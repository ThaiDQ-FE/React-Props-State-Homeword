import React, { Component } from "react";

export default class Product extends Component {
  handleDetail = () => {
    const currentProduct = this.props.sanPham;
    this.props.xuLyChiTiet(currentProduct);
  };
  render() {
    return (
      <div className="card">
        <img className="card-img-top" src={this.props.sanPham.hinhAnh} alt />
        <div className="card-body">
          <h4 className="card-title">{this.props.sanPham.tenSP}</h4>
          <button className="btn btn-success" onClick={this.handleDetail}>
            Chi tiết
          </button>
          <button
            className="btn btn-danger"
            onClick={() => {
              const currentProduct = this.props.sanPham;
              this.props.handleCardList(currentProduct);
            }}
          >
            Thêm giỏ hàng
          </button>
        </div>
      </div>
    );
  }
}
