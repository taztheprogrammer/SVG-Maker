function updateValue(sliderName) {
    const slider = document.getElementById(`${sliderName}`);
    const valueParagraph = document.getElementById(`${sliderName}-val`);
    valueParagraph.innerHTML = slider.value;
}