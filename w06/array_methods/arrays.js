const steps = ["one", "two", "three"];
function listTemplate(step) {
  return ["<li>", step, "</li>"].join("");
}
const stepsHtml = steps.map(listTemplate);
// use map to convert the list from strings to HTML
console.log(stepsHtml); //["<li>one</li>","<li>two</li>","<li>three</li>"]

const grades = ['A', 'B', 'A'];