function changeColor(color) {
    showLoading(); // Show loading overlay
    hideUmbrella(); // Hide the umbrella

    // Simulate some delay before changing the color (replace with actual logic)
    setTimeout(() => {
        const umbrella = document.getElementById('umbrella');
        umbrella.style.filter = `hue-rotate(${getHueRotation(color)}deg)`; // Change umbrella color
        document.body.style.backgroundColor = lightenColor(color); // Change background color

        hideLoading(); // Hide loading overlay after the color change
        showUmbrella(); // Show the umbrella after the color change
    }, 4000); // Show the umbrella after 5 seconds
}

function getHueRotation(color) {
    const hueValues = {
        '#FF5733': 150,
        '#FFC300': 215,
        '#FFFF66': 225,
        '#66FF66': 274,
        '#66FFFF': 357,
        '#3366FF': 22,
        '#FF66FF': 65,
        '#C0C0C0': 315
    };
    return hueValues[color] || 0;
}

function lightenColor(color) {
    const hex = color.replace('#', '');
    const rgb = parseInt(hex, 16);
    const r = (rgb >> 16) & 0xff;
    const g = (rgb >>  8) & 0xff;
    const b = (rgb >>  0) & 0xff;

    const factor = 0.5; // Lighten factor

    const newR = Math.round(r + (255 - r) * factor);
    const newG = Math.round(g + (255 - g) * factor);
    const newB = Math.round(b + (255 - b) * factor);

    return `rgb(${newR}, ${newG}, ${newB})`;
}

// select handler
function handleLogoChange(event) {
    showLoading(); // Show loading overlay
    hideUmbrella(); // Hide the umbrella

    const file = event.target.files[0];
    const reader = new FileReader();

   setTimeout(()=>{
    reader.onload = function(e) {
        const logoUrl = e.target.result;
        const existingPreview = document.querySelector('.logo-preview');
        if (existingPreview) {
            existingPreview.remove();
        }
        const logoPreview = document.createElement('img');
        logoPreview.src = logoUrl;
        logoPreview.className = 'logo-preview'; 

        const umbrellaContainer = document.querySelector('.box-1');
        umbrellaContainer.appendChild(logoPreview);

       
    };
    hideLoading(); 
        showUmbrella(); 
        reader.readAsDataURL(file);
        document.getElementById('selected-file-name').textContent = file.name;
        document.getElementById("File_name").innerHTML=""
   },4000)

   
}

function removeLogo() {
    const logoPreview = document.querySelector('.logo-preview');
    if (logoPreview) {
        logoPreview.remove();
        document.getElementById('selected-file-name').textContent = "";
        document.getElementById("File_name").innerHTML="upload_icon"
    }
}

function showLoading() {
    const loadingOverlay = document.getElementById('loading');
    loadingOverlay.style.display = 'block'; // Show the loading overlay
}

function hideLoading() {
    const loadingOverlay = document.getElementById('loading');
    loadingOverlay.style.display = 'none'; // Hide the loading overlay
}

function hideUmbrella() {
    document.getElementById('umbrella').style.display = 'none';
}

function showUmbrella() {
    document.getElementById('umbrella').style.display = 'block';
}