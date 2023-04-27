import "../styles/map.css"

const map = document.createElement("div");
const iFrame = document.createElement("iframe")
iFrame.classList.add("map");
iFrame.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17377.028552705426!2d29.961784371647187!3d31.206186810513064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c4b0332896d7%3A0xe2f3115de665a2b1!2z2KzZitmG2KzYsQ!5e0!3m2!1sar!2seg!4v1682604184290!5m2!1sar!2seg"
iFrame.width = "100%"
iFrame.height = "100%"
iFrame.style="border:0;"
iFrame.loading = "lazy"
iFrame.allowfullscreen = ""
iFrame.referrerpolicy = "no-referrer-when-downgrade"
map.appendChild(iFrame);

export { map }