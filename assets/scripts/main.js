// 1. imports libraries
import { HfInference } from "@huggingface/inference"; 

// 2. initializes the class
const inference = new HfInference("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");

// 3. defines model and inputs
const model = "nlpconnect/vit-gpt2-image-captioning";
const imageUrl = "https://ericjyork.com/media/splash.webp";

// 4. fetch the response
const response = await fetch(imageUrl);
const imageBlob = await response.blob();

// 5. use the image to text function

const result = await inference.imageToText({
  data: imageBlob,
  model: model,
});

// 6. logs the results
console.log(result);

// 7. outputs the results
