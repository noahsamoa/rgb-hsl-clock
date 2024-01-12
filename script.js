function updateColor() {
  const currentDate = new Date();
  const millisecondsInDay = 24 * 60 * 60 * 1000;
  var progress = (currentDate % millisecondsInDay) / millisecondsInDay;
  
  const hue = (progress * 360).toFixed(3);
  const saturation = 100;
  const lightness = 50;

  const color = `hsl(${hue},${saturation}%,${lightness}%)`;
  const hexCode = hslToHex(parseFloat(hue), saturation, lightness);
  const invertedColor = invertColor(hexCode);

  document.body.style.backgroundColor = color;

  const colorInfo = document.getElementById("colorInfo");
  colorInfo.innerHTML = `<div>HSL: ${hue}, ${saturation}%, ${lightness}%</div><div style="margin-top: 1em; text-align:center;">${hexCode}</div>`;
  colorInfo.style.color = invertedColor;
}

function hslToHex(h, s, l) {
  const rgbColor = hslToRgb(h / 360, s / 100, l / 100);
  return rgbToHex(rgbColor[0], rgbColor[1], rgbColor[2]);
}

function hslToRgb(h, s, l) {
  let r, g, b;

  if (s === 0) {
    r = g = b = l; // achromatic
  } else {
    const hue2rgb = function hue2rgb(p, q, t) {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;

    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

function rgbToHex(r, g, b) {
  const toHex = function (value) {
    const hex = value.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

function invertColor(hex) {
  const invertedHex = '#' + (0xFFFFFF ^ parseInt(hex.slice(1), 16)).toString(16).padStart(6, '0');
  return invertedHex;
}

// Update the color every second
setInterval(updateColor, 1000);

// Initial update
updateColor();
