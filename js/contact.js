document.getElementById("contactForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const formData = {
    name: this.name.value,
    email: this.email.value,
    subject: this.subject.value,
    message: this.message.value,
  };

  try {
    const res = await fetch("https://somukstew.vercel.app/api/send-mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!res.ok) {
      throw new Error("Server error");
    }

    alert("Message sent successfully!");
    this.reset();
  } catch (error) {
    console.error(error);
    alert("Server error");
  }
});
