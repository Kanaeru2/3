"use client";
const Contact = () => {
  return (
    <>
      <div className="contact-container">
        <h1>Hubungi Kami</h1>
        <p>Jika Anda memiliki pertanyaan, silakan hubungi kami!</p>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Nama:</label>
            <input type="text" id="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Pesan:</label>
            <textarea id="message" rows="4" required></textarea>
          </div>
          <button type="submit">Kirim Pesan</button>
        </form>
        <div className="contact-info">
          <h2>Alamat Kami</h2>
          <p>123 Jalan Utama, Kota, Negara</p>
          <h2>Telepon</h2>
          <p>(123) 456-7890</p>
        </div>
      </div>

      <style jsx>{`
        .contact-container {
          max-width: 600px;
          margin: 50px auto;
          padding: 20px;
          background-color: #fff;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        h1 {
          text-align: center;
          color: #333;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
        }

        .form-group {
          margin-bottom: 15px;
        }

        label {
          margin-bottom: 5px;
          font-weight: bold;
        }

        input,
        textarea {
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 4px;
          font-size: 16px;
        }

        button {
          padding: 10px;
          background-color: #0070f3;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 16px;
        }

        button:hover {
          background-color: #005bb5;
        }

        .contact-info {
          margin-top: 20px;
          border-top: 1px solid #ccc;
          padding-top: 15px;
        }
      `}</style>
    </>
  );
};

export default Contact;
