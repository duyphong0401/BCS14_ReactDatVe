import React, { useState } from "react";
import "../style.css";

const initialData = [
  
  {
    hang: "A",
    danhSachGhe: [
      { soGhe: "A1", gia: 75000, daDat: false },
      { soGhe: "A2", gia: 75000, daDat: false },
      { soGhe: "A3", gia: 75000, daDat: false },
      { soGhe: "A4", gia: 75000, daDat: false },
      { soGhe: "A5", gia: 75000, daDat: false },
      { soGhe: "A6", gia: 75000, daDat: false },
      { soGhe: "A7", gia: 75000, daDat: false },
      { soGhe: "A8", gia: 75000, daDat: false },
      { soGhe: "A9", gia: 75000, daDat: false },
      { soGhe: "A10", gia: 75000, daDat: false },
      { soGhe: "A11", gia: 0, daDat: true },
      { soGhe: "A12", gia: 0, daDat: true }
    ]
  },
  {
    "hang": "B",
    "danhSachGhe": [
      { "soGhe": "B1", "gia": 75000, "daDat": false },
      { "soGhe": "B2", "gia": 75000, "daDat": false },
      { "soGhe": "B3", "gia": 75000, "daDat": false },
      { "soGhe": "B4", "gia": 75000, "daDat": false },
      { "soGhe": "B5", "gia": 75000, "daDat": false },
      { "soGhe": "B6", "gia": 75000, "daDat": false },
      { "soGhe": "B7", "gia": 75000, "daDat": false },
      { "soGhe": "B8", "gia": 75000, "daDat": false },
      { "soGhe": "B9", "gia": 75000, "daDat": false },
      { "soGhe": "B10", "gia": 75000, "daDat": false },
      { "soGhe": "B11", "gia": 75000, "daDat": false },
      { "soGhe": "B12", "gia": 75000, "daDat": false }
    ]
  },
  {
    "hang": "C",
    "danhSachGhe": [
      { "soGhe": "C1", "gia": 75000, "daDat": false },
      { "soGhe": "C2", "gia": 75000, "daDat": false },
      { "soGhe": "C3", "gia": 75000, "daDat": false },
      { "soGhe": "C4", "gia": 75000, "daDat": false },
      { "soGhe": "C5", "gia": 75000, "daDat": false },
      { "soGhe": "C6", "gia": 75000, "daDat": false },
      { "soGhe": "C7", "gia": 75000, "daDat": false },
      { "soGhe": "C8", "gia": 75000, "daDat": false },
      { "soGhe": "C9", "gia": 75000, "daDat": false },
      { "soGhe": "C10", "gia": 75000, "daDat": false },
      { "soGhe": "C11", "gia": 75000, "daDat": false },
      { "soGhe": "C12", "gia": 75000, "daDat": false }
    ]
  }, {
    "hang": "D",
    "danhSachGhe": [
      { "soGhe": "D1", "gia": 75000, "daDat": false },
      { "soGhe": "D2", "gia": 75000, "daDat": false },
      { "soGhe": "D3", "gia": 75000, "daDat": false },
      { "soGhe": "D4", "gia": 75000, "daDat": false },
      { "soGhe": "D5", "gia": 75000, "daDat": false },
      { "soGhe": "D6", "gia": 75000, "daDat": false },
      { "soGhe": "D7", "gia": 75000, "daDat": false },
      { "soGhe": "D8", "gia": 75000, "daDat": false },
      { "soGhe": "D9", "gia": 75000, "daDat": false },
      { "soGhe": "D10", "gia": 75000, "daDat": false },
      { "soGhe": "D11", "gia": 75000, "daDat": false },
      { "soGhe": "D12", "gia": 75000, "daDat": false }
    ]
  }, {
    "hang": "E",
    "danhSachGhe": [
      { "soGhe": "E1", "gia": 75000, "daDat": false },
      { "soGhe": "E2", "gia": 75000, "daDat": false },
      { "soGhe": "E3", "gia": 75000, "daDat": false },
      { "soGhe": "E4", "gia": 75000, "daDat": false },
      { "soGhe": "E5", "gia": 75000, "daDat": false },
      { "soGhe": "E6", "gia": 75000, "daDat": false },
      { "soGhe": "E7", "gia": 75000, "daDat": false },
      { "soGhe": "E8", "gia": 75000, "daDat": false },
      { "soGhe": "E9", "gia": 75000, "daDat": false },
      { "soGhe": "E10", "gia": 75000, "daDat": false },
      { "soGhe": "E11", "gia": 75000, "daDat": false },
      { "soGhe": "E12", "gia": 75000, "daDat": false }
    ]
  }, {
    "hang": "F",
    "danhSachGhe": [
      { "soGhe": "F1", "gia": 75000, "daDat": false },
      { "soGhe": "F2", "gia": 75000, "daDat": false },
      { "soGhe": "F3", "gia": 75000, "daDat": false },
      { "soGhe": "F4", "gia": 75000, "daDat": false },
      { "soGhe": "F5", "gia": 75000, "daDat": false },
      { "soGhe": "F6", "gia": 75000, "daDat": false },
      { "soGhe": "F7", "gia": 75000, "daDat": false },
      { "soGhe": "F8", "gia": 75000, "daDat": false },
      { "soGhe": "F9", "gia": 75000, "daDat": false },
      { "soGhe": "F10", "gia": 75000, "daDat": false },
      { "soGhe": "F11", "gia": 75000, "daDat": false },
      { "soGhe": "F12", "gia": 75000, "daDat": false }
    ]
  }
  , {
    "hang": "G",
    "danhSachGhe": [
      { "soGhe": "G1", "gia": 75000, "daDat": false },
      { "soGhe": "G2", "gia": 75000, "daDat": false },
      { "soGhe": "G3", "gia": 75000, "daDat": false },
      { "soGhe": "G4", "gia": 75000, "daDat": false },
      { "soGhe": "G5", "gia": 75000, "daDat": false },
      { "soGhe": "G6", "gia": 75000, "daDat": false },
      { "soGhe": "G7", "gia": 75000, "daDat": false },
      { "soGhe": "G8", "gia": 75000, "daDat": false },
      { "soGhe": "G9", "gia": 75000, "daDat": false },
      { "soGhe": "G10", "gia": 75000, "daDat": false },
      { "soGhe": "G11", "gia": 75000, "daDat": false },
      { "soGhe": "G12", "gia": 75000, "daDat": false }
    ]
  },{
    "hang": "H", 
    "danhSachGhe": [
      {"soGhe":"H1","gia":75000,"daDat":false},
      {"soGhe":"H2","gia":75000,"daDat":false},
      {"soGhe":"H3","gia":75000,"daDat":false},
      {"soGhe":"H4","gia":75000,"daDat":false},
      {"soGhe":"H5","gia":75000,"daDat":false},
      {"soGhe":"H6","gia":75000,"daDat":false},
      {"soGhe":"H7","gia":75000,"daDat":false},
      {"soGhe":"H8","gia":75000,"daDat":false},
      {"soGhe":"H9","gia":75000,"daDat":false},
      {"soGhe":"H10","gia":75000,"daDat":false},
      {"soGhe":"H11","gia":75000,"daDat":false},
      {"soGhe":"H12","gia":75000,"daDat":false}
    ] 
  }
];

const Movie = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeatSelection = (hang, soGhe, gia) => {
    setSelectedSeats((prevSeats) => {
      const isSelected = prevSeats.some(
        (seat) => seat.hang === hang && seat.soGhe === soGhe
      );
      if (isSelected) {
        return prevSeats.filter(
          (seat) => !(seat.hang === hang && seat.soGhe === soGhe)
        );
      }
      return [...prevSeats, { hang, soGhe, gia }];
    });
  };

  const renderSeats = () => {
    return initialData.map((row, index) => (
      <div key={index}>
        <div className="seats-row">
          {row.danhSachGhe.map((seat, seatIndex) => {
            const isSelected = selectedSeats.some(
              (s) => s.hang === row.hang && s.soGhe === seat.soGhe
            );
            return (
              <button
                key={seatIndex}
                className={`seat ${
                  seat.daDat ? "booked" : isSelected ? "selected" : ""
                }`}
                onClick={() =>
                  !seat.daDat && toggleSeatSelection(row.hang, seat.soGhe, seat.gia)
                }
              >
                {seat.soGhe}
              </button>
            );
          })}
        </div>
      </div>
    ));
  };

  const renderSelectedTable = () => {
    if (selectedSeats.length === 0) {
      return <p>Không có ghế nào được chọn.</p>;
    }
  
    return (
      <table className="selected-table">
        <thead>
          <tr>
            <th>Số ghế</th>
            <th>Giá (VND)</th>
          </tr>
        </thead>
        <tbody>
          {selectedSeats.map((seat, index) => (
            <tr key={index}>
              <td>{seat.soGhe}</td>
              <td>{seat.gia.toLocaleString()}</td>
            </tr>
          ))}
          <tr className="total-row">
            <td>Tổng cộng</td>
            <td>
              {selectedSeats
                .reduce((total, seat) => total + seat.gia, 0)
                .toLocaleString()}{" "}
              VND
            </td>
          </tr>
        </tbody>
      </table>
    );
  };
  
  

  return (
    <div className="movie">
      <div className="container">
        <div className="row">
          <div className="col-8">
            <h2 className="bookingMovie ms-5 text-warning">Đặt vé xem phim CyberLearn.vn</h2>
            <div className="screen text-center"> Màn hình </div>
            {renderSeats()}
          </div>
          <div className="col-4">
            <h2 className="text-center">Danh sách ghế bạn chọn</h2>
            {renderSelectedTable()}
          </div>
        </div>
      </div>
    </div>
  );
  
};

export default Movie;
