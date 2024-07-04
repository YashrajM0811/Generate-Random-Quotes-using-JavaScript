const btn = document.getElementById("btn");
const output = document.querySelector(".output");

let quote= [
"In the post-pandemic world, Indian startups are not just surviving; they're thriving by embracing innovation and resilience",

"Adaptability has become the hallmark of Indian startups, transforming challenges into opportunities for unprecedented growth",

"The spirit of collaboration and digital innovation is driving India's startup ecosystem to new heights in the post-pandemic era",

"Indian startups have redefined the meaning of agility, proving that with the right mindset, every setback is a setup for a comeback",

"From adversity to advantage, Indian startups are leveraging technology to build a more inclusive and resilient future",

"The pandemic ignited a wave of entrepreneurship in India, where startups are now the torchbearers of economic revival and societal progress",

"Resilience, innovation, and community spirit are the cornerstones of India's startup culture in the new normal",

"Indian startups are pioneering a future where disruption is not a threat but a catalyst for growth and transformation",

"Post-pandemic, the startup culture in India is characterized by a renewed focus on sustainability, scalability, and social impact",

"The pandemic was a catalyst for change, and Indian startups are leading the way with bold ideas and relentless execution",

"In the face of uncertainty, Indian startups have shown that the greatest asset is an unwavering commitment to innovation and excellence",

"The rise of digital-first solutions in India is a testament to the ingenuity and resilience of our startup ecosystem post-pandemic",

"Indian startups are setting global benchmarks, proving that with vision and tenacity, we can navigate any storm",

"The post-pandemic era has seen Indian startups emerge stronger, more resilient, and more focused on creating lasting impact",

"In India's startup culture, the only constant is change, and the only direction is forward, fueled by creativity and innovation",
];

btn.addEventListener("click", () =>{
    console.log("Clicked to generate random quote");

    let random = Math.floor(Math.random()*quote.length);
    output.textContent = quote[random];
})