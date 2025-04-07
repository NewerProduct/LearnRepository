import path from 'path'

let path1 = 'https://raw.githubusercontent.com/CompVis/stable-diffusion/main/data/inpainting_examples/overture-creations-5sI6fQgYIuo.png'

const p = path.basename(path1)
console.log(p);