import { HfInference } from 'https://cdn.jsdelivr.net/npm/@huggingface/inference@2.6.4/+esm';

document.getElementById('generate-form').addEventListener('submit', function(event) {
  event.preventDefault();
  let textPrompt = document.getElementById('text-prompt').value;
  generateImage(textPrompt);
});
async function generateImage(textPrompt) {
  const inference = new HfInference("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");
  const inputs = textPrompt;
  const result = await inference.textToImage({
    inputs: inputs,
    model: 'stabilityai/stable-diffusion-2',
  });
  document.getElementById('display').src = URL.createObjectURL(result)
  console.log(result);

}
