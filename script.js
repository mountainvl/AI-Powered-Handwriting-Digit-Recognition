async function predictDigit() {
    let model = await tf.loadLayersModel("mnist_model.json");
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    let imageData = ctx.getImageData(0, 0, 28, 28);
    let tensor = tf.browser.fromPixels(imageData, 1).reshape([1, 28, 28, 1]);
    
    let prediction = model.predict(tensor);
    let digit = prediction.argMax(1).dataSync()[0];
    
    document.getElementById("result").innerText = "Predicted Digit: " + digit;
}
