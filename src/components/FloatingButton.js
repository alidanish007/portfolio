import React from "react";

const FloatingButton = () => {
  const openPDFInNewTab = () => {
    // Assuming you have the PDF file URL
    const pdfUrl =
      "https://drive.google.com/file/d/1oVW7bwy8JGf7QTrOb16T6toYA6dT3NJp/view?usp=sharing.pdf";

    // Open the PDF URL in a new tab
    window.open(pdfUrl, "_blank");
  };

  const buttonStyle = {
    backgroundColor: "#512360",
    color: "#fff",
    border: "none",
    padding: "10px 10px",
    borderRadius: "50%", // Make the button round
    cursor: "pointer",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    transition: "background-color 0.3s, transform 0.2s",
    fontSize: 10,
    lineHeight: "18px",
    width: "70px",
    height: "70px",
  };

  const containerStyle = {
    position: "fixed",
    bottom: "20px",
    right: "20px",
  };

  return (
    <div style={containerStyle}>
      <button style={buttonStyle} onClick={openPDFInNewTab}>
        Download <br /> Resume
      </button>
    </div>
  );
};

export default FloatingButton;
