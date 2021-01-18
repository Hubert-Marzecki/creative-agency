const sgMail = require("@sendgrid/mail");

export default async function (req, res) {
    sgMail.setApiKey(process.env.SENGRIND_API_KEY_2);
    const { email, message } = req.body;

    const content = {
        to: "hubert.marzecki@gmail.com",
        from: "hubert@marzecki.pl",
        subject: `New Message From - ${email}`,
        text: message,
        html: `<p>${message}</p>`,
    };

    try {
        await sgMail.send(content);
        res.status(200).send("Wiadomość wysłana!");
    } catch (error) {
        console.log("ERROR", JSON.stringify(error.response.body.errors));
        res.status(400).send("Nie można wysłać wiadomości");
    }
}