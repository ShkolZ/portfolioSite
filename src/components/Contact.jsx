import React from "react";
import ContactLogo from "../assets/contact/mailbox.svg";
import TelegramLogo from "../assets/contact/telegram.svg";
import LinkedInLogo from "../assets/contact/linkedin.svg";
import MailLogo from "../assets/contact/mail.svg";

function Contact() {
  return (
    <div className="card flex flex-col items-center gap-2">
      <div className="py-5 px-6 rounded-full bg-[#0C0D0C] border-[#1E1E1F] border-1">
        <img src={ContactLogo} className="w-[80px] h-[80px]" alt="mail" />
      </div>
      <h2 className="text-center font-bold text-xl">Contact Me Here</h2>
      <div className="flex justify-center gap-2">
        <a
          href="mailto:victorbertuch@gmail.com"
          className="bg-[#0D0C0D] rounded-xl border-1 border-[#1E1E1F] hover:bg-[#0D0C0D]/30"
        >
          <div className="px-4 py-1 ">
            <img src={MailLogo} alt="Gmail" className="w-[30px] h-[30px]" />
          </div>
        </a>
        <a
          href="https://t.me/berrtych"
          className="bg-[#0D0C0D] rounded-xl border-1 border-[#1E1E1F] hover:bg-[#0D0C0D]/30"
        >
          <div className="px-4 py-1 ">
            <img
              src={TelegramLogo}
              className="w-[30px] h-[30px]"
              alt="Telegram"
            />
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/viktor-bertych-27205829a/"
          className="bg-[#0D0C0D] rounded-xl border-1 border-[#1E1E1F] hover:bg-[#0D0C0D]/30"
        >
          <div className="px-4 py-1 ">
            <img
              src={LinkedInLogo}
              className="w-[30px] h-[30px]"
              alt="LinkedIn"
            />
          </div>
        </a>
      </div>
    </div>
  );
}

export default Contact;
