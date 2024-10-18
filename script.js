let mobnav = document.querySelector(".mobNav");
let menubar = document.querySelector(".menuBar");

menubar.addEventListener("click", () => {
  mobnav.classList.toggle("hidden");
  menubar.classList.toggle("fa-xmark");
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

function sendMessage() {
  const email = document.querySelector(".email").value;
  const subject = document.querySelector(".subject").value;
  const name = document.querySelector(".name").value;
  const mobNumber = document.querySelector(".mobNumber").value;
  const message = document.querySelector(".msg").value;

  if (!email || !subject || !name || !mobNumber || !message) {
    alert("Please fill in all the fields");
    return;
  }

  let bodyMsg = `
      Name: ${name},
      Email: ${email},
      Mobile: ${mobNumber},
      Subject: ${subject},
      Message: ${message}
    `;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "ng6397100896@gmail.com", 
    Password: "DE3410DE24923BAF2B611D6C91D0832D6738",
    To: "tushar410@gmail.com",
    From: email, 
    Subject: subject,
    Body:bodyMsg
  })
  .then(() => {
    alert("Email sent successfully!");
  })
  .catch((error) => {
    alert("Failed to send email: " + error);
  });
}

document.querySelector(".btn").addEventListener("click", (e) => {
  e.preventDefault();
  sendMessage();
});
