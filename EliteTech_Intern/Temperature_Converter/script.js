function convertTemperature() {
    const temp = parseFloat(document.getElementById('temp').value);
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
  
    if (isNaN(temp)) {
      document.getElementById('result').innerText = "Please enter a valid temperature.";
      return;
    }
  
    let convertedTemp;
  
    if (from === to) {
      convertedTemp = temp;
    } else if (from === 'C' && to === 'F') {
      convertedTemp = (temp * 9 / 5) + 32;
    } else if (from === 'C' && to === 'K') {
      convertedTemp = temp + 273.15;
    } else if (from === 'F' && to === 'C') {  
      convertedTemp = (temp - 32) * 5 / 9;
    } else if (from === 'F' && to === 'K') {
      convertedTemp = (temp - 32) * 5 / 9 + 273.15;
    } else if (from === 'K' && to === 'C') {
      convertedTemp = temp - 273.15;
    } else if (from === 'K' && to === 'F') {
      convertedTemp = (temp - 273.15) * 9 / 5 + 32;
    }
  
    document.getElementById('result').innerText = 
      `Converted Temperature: ${convertedTemp.toFixed(2)}° ${to}`;
  }
  