import React, { useRef, useState } from "react";
import { HiDownload } from "react-icons/hi";
import html2canvas from "html2canvas";
import { Tooltip } from "@mui/material";
import "./App.css";

function App() {
  const printDiv = useRef();
  const [fontFamily, setFontFamily] = useState("Arial, sans-serif");
  const [textColor, setTextColor] = useState("#FF0000");

  async function handleDownload() {
    const sheetContent = document.getElementById(`print`);
    const width = sheetContent.offsetWidth;
    const height = sheetContent.offsetHeight;
    const canvas = await html2canvas(sheetContent, { dpi: 300, width, height });
    const ctx = canvas.getContext("2d");
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixels = imageData.data;

    let pixelColors = "";

    for (let i = 0; i < pixels.length; i += 4) {
      const r = pixels[i];
      const g = pixels[i + 1];
      const b = pixels[i + 2];
      const color = rgbToHex(r, g, b);
      pixelColors += color + "\n";
    }

    const blob = new Blob([pixelColors], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = "pixel_colors.txt";
    link.href = url;
    link.click();
    URL.revokeObjectURL(url);
  }

  function rgbToHex(r, g, b) {
    return "#" + ((r << 16) | (g << 8) | b).toString(16).padStart(6, "0");
  }

  return (
    <div className="app-container">
      <div
        className="writing-box"
        ref={printDiv}
        id="print"
        contentEditable="true"
        suppressContentEditableWarning={true}
        style={{
          fontFamily: fontFamily,
          color: textColor,
          border: "1px solid #ccc",
          padding: "10px",
          minHeight: "100px",
        }}
      ></div>

      <label>
        Font Family:
        <select
          value={fontFamily}
          onChange={(e) => setFontFamily(e.target.value)}
        >
          <option value="Arial, sans-serif">Arial</option>
          <option value="cursive">Cursive</option>
          <option value="Verdana, sans-serif">Verdana</option>
          <option value="Georgia, serif">Georgia</option>
        </select>
      </label>

      <label>
        Text Color:
        <input
          type="color"
          value={textColor}
          onChange={(e) => setTextColor(e.target.value)}
        />
      </label>

      <Tooltip title="Download" placement="top">
        <div className="download-btn" onClick={handleDownload}>
          <HiDownload />
        </div>
      </Tooltip>
    </div>
  );
}

export default App;
