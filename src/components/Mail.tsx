"use client";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Mail() {
  const form = useRef<HTMLFormElement>(null!);

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phNo, setPhNo] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_pmaeg8v",
        "template_en5gr2k",
        form.current,
        "xbZzt6V4t69qmvYff"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message send");
        },
        (error) => {
          console.log(error.text);
        }
      );
    setName("");
    setEmail("");
    setPhNo("");
    setSubject("");
    setMessage("");
  };
  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="input-box">
        <input
          type="text"
          placeholder="Full Name"
          name="user_name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email Address"
          name="user_email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input-box">
        <input
          type="text"
          placeholder="Phone Number"
          name="ph_no"
          required
          value={phNo}
          onChange={(e) => setPhNo(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email Subject"
          name="email_sub"
          required
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </div>
      <textarea
        placeholder="Your Message"
        name="message"
        required
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <input type="submit" value="Send Message" className="btn" />
    </form>
  );
}
