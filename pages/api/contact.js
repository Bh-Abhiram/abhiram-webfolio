import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, subject, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "bheemaraju.abhiram03@gmail.com", // replace with your email
        pass: "dnmp usqb kmmq gpai",    // use Gmail App Password
      },
    });

    const mailOptions = {
      from:`"${name}" <bheemaraju.abhiram03@gmail.com>`,
      to: "bheemaraju.abhiram03@gmail.com", // replace with your email
      replyTo: email,
      subject: `New message from ${name}: ${subject}`,
      text: message,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Error sending email" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
