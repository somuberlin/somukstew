const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    try {
        const res = await fetch(
          "https://somukstew.vercel.app/api/send-mail",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );
      
        if (!res.ok) {
          throw new Error("Server error");
        }
      
        await res.json();
      
        alert("Message sent successfully!");
        e.target.reset();
      } catch (error) {
        console.error(error);
        alert("Server error");
      } finally {
        setLoading(false);
      }
      
  };