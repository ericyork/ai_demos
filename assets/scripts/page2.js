import { HfInference } from 'https://cdn.jsdelivr.net/npm/@huggingface/inference@2.6.4/+esm';

document.getElementById('translate-form').addEventListener('submit', function(event) {
  event.preventDefault();
  let textInput = document.getElementById('text-translate').value;
  processText(textInput);
});

async function processText(textInput) {
  const inference = new HfInference("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");
  const model = 't5-base';
  const result = await inference.translation({
  model: model,
  inputs: textInput,
});

  let textOut = document.getElementById('translation');
  textOut.innerText = result.translation_text;

  console.log(result.translation_text);
}