// App.js

import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./App.css"; 

function App() {
  const [formData, setFormData] = useState({
    tedbir: "",
    ad: "",
    soyad: "",
    sirket: "",
    vezife: "",
    email: "",
    nomre: "",
    unvan: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePhoneChange = (value) => {
    setFormData({
      ...formData,
      nomre: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form məlumatları:", formData);
  };

  return (
    <div className="form-container">
      <h2>İştirakçı Əlavə et</h2>

      <form onSubmit={handleSubmit}>
        {/* Tədbir Seç dropdown */}
        <div className="form-group">
          <label>Tədbir Seç:</label>
          <select
            name="tedbir"
            value={formData.tedbir}
            onChange={handleChange}
            required
          >
            <option value="">Tədbir Seç</option>
            <option value="tedbir1">Sənaye Təhlükəsizliyi Zirvəsi 2024</option>
            <option value="tedbir2">Kitab Sərgisi</option>
            <option value="tedbir3">MEET POİNT 1 </option>
            <option value="tedbir4">COP29 Human Capital Forum</option>
            <option value="tedbir5">TEST FORUM</option>
            <option value="tedbir6">DigiFest</option>
          </select>
        </div>

        <div className="form-group">
          <label>Adı:</label>
          <input
            type="text"
            name="ad"
            value={formData.ad}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Soyadı:</label>
          <input
            type="text"
            name="soyad"
            value={formData.soyad}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>İşlədiyi Şirkət:</label>
          <input
            type="text"
            name="sirket"
            value={formData.sirket}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Vəzifəsi:</label>
          <input
            type="text"
            name="vezife"
            value={formData.vezife}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            //  pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
            // title="Doğru email formatı daxil edin"
            required
          />
        </div>

        {/* Telefon Nömrəsi seçimi */}
        <div className="form-group">
          <label>Mobil Nömrəsi:</label>
          <PhoneInput
            country={"az"} 
            value={formData.nomre}
            onChange={handlePhoneChange}
            inputStyle={{ width: "100%" }}
            dropdownStyle={{ zIndex: 1000 }}
            required
          />
        </div>

        <div className="form-group">
          <label>Biletin çatdırılacağı ünvan:</label>
          <input
            type="text"
            name="unvan"
            value={formData.unvan}
            onChange={handleChange}
          />
        </div>

        <button type="submit" >Əlavə Et</button>
      </form>
    </div>
  );
}

export default App;
