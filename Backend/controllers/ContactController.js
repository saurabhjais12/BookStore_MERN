import Contact from "../models/Contact.js";

const ContactController = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    const newContact = new Contact({ name, email, phone, message });

    await newContact.save();

    res.status(201).json({
      message: "Message sent successfully",
      contact: newContact, 
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error saving contact",
    });
  }
};

export default ContactController;
