import React, { Component } from "react";

export default class CartItem extends Component {
  state = {
    soluong: 0,
  };
  xuLyNutGiamCard = () => {
    let giam = this.state.soluong;
    giam--;
    this.setState({
      soluong: giam,
    });
  };
  render() {
    console.log(this.props);
    return (
      <tr className="card-item">
        <td>{this.props.card.maSP}</td>
        <td>{this.props.card.tenSP}</td>
        <td>
          <img src={this.props.card.hinhAnh} width={50} alt />
        </td>
        <td>
          <button onClick={this.xuLyNutGiamCard}>-</button> {this.state.soluong}{" "}
          <button>+</button>
        </td>
        <td>{this.props.card.giaBan}</td>
        <td>{this.props.card.giaBan * this.props.card.soLuong}</td>
        <td>
          <button className="btn btn-danger">Delete</button>
        </td>
      </tr>
    );
  }
}
