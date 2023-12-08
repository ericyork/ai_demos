
import { HfInference } from 'https://cdn.jsdelivr.net/npm/@huggingface/inference@2.6.4/+esm';


document.getElementById('caption-form').addEventListener('submit', function(event) {
  event.preventDefault();
  let imageUrl = document.getElementById('image-url').value;
  processImageUrl(imageUrl);
});

async function processImageUrl(url) {
  const inference = new HfInference("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");
  const model = "nlpconnect/vit-gpt2-image-captioning";
  const response = await fetch(url);
  const imageBlob = await response.blob();
  const result = await inference.imageToText({
    data: imageBlob,
    model: model,
  });

  let displayImage = document.getElementById('display');
  let caption = document.getElementById('caption');
  displayImage.src = url;
  // const outText = JSON.stringify(result); 
  const outText = result.generated_text;
  caption.innerText = outText;
  console.log(outText);
}

