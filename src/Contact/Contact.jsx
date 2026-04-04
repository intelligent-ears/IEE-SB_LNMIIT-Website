import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const INFO_ITEMS = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "Address",
    value: "LNMIIT, Rupa ki Nangal, Post Sumel, Via Jamdoli, Jaipur",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "Office Hours",
    value: "Monday – Friday: 09:00 am – 05:00 pm",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Follow us",
    value: "@ieee_lnmiit",
  },
];

const FIELDS = [
  { id: "name",    name: "name",    type: "text",  label: "Your Name",  rules: {} },
  { id: "email",   name: "email",   type: "email", label: "Email Address", rules: { required: true } },
  { id: "subject", name: "subject", type: "text",  label: "Subject",    rules: {} },
];

const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const form = useRef();
  const [sending, setSending] = useState(false);

  const onSubmit = (data, e) => {
    e.preventDefault();
    data.reply_to = data.email;
    setSending(true);
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMP_ID,
        form.current,
        { publicKey: import.meta.env.VITE_API_KEY }
      )
      .then(() => {
        toast.success("Message sent! We'll get back to you soon. 🎉");
        reset();
      })
      .catch((error) => {
        toast.error("Failed to send message. Please try again.");
        console.log("FAILED...", error.text);
      })
      .finally(() => setSending(false));
  };

  useEffect(() => { window.scrollTo(0, 0); });

  return (
    <>
      <ToastContainer position="top-right" />

      {/* Hero */}
      <div className="bg-gradient-to-br from-[#0f1c4d] to-[#1e3a8a] pt-36 pb-16 px-6 text-center text-white">
        <p className="text-blue-300 text-sm font-semibold tracking-widest uppercase mb-3">Get In Touch</p>
        <h1 className="font-extrabold text-4xl md:text-5xl mb-4 animate-fadeInUp">Contact Us</h1>
        <p className="text-white/70 max-w-xl mx-auto animate-fadeInUp delay-200">
          Have a question or want to collaborate? We'd love to hear from you.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-5 gap-12">

        {/* Info panel */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">Let's talk</h2>
            <div className="h-1 w-10 bg-gradient-to-r from-blue-600 to-indigo-500 rounded mb-4" />
            <p className="text-gray-500 text-sm leading-relaxed">
              For more details and answers to your queries, feel free to reach out through the
              form or visit us at the address below.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            {INFO_ITEMS.map(({ icon, label, value }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
                  {icon}
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{label}</p>
                  <p className="text-gray-700 text-sm mt-0.5">{value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-4 pt-2">
            <a href="https://www.instagram.com/ieee_lnmiit/" target="_blank" rel="noreferrer"
              className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-pink-500 to-orange-400
                text-white rounded-lg hover:opacity-90 transition">
              Instagram
            </a>
            <a href="https://www.linkedin.com/company/ieee-sb-lnmiit/mycompany/" target="_blank" rel="noreferrer"
              className="px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              LinkedIn
            </a>
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-3 bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
          <form ref={form} onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
            {FIELDS.map(({ id, name, type, label, rules }) => (
              <div key={id} className="flex flex-col gap-1.5">
                <label htmlFor={id} className="text-sm font-semibold text-gray-700">{label}</label>
                <input
                  id={id}
                  name={name}
                  type={type}
                  {...register(name, rules)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50
                    text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500
                    focus:border-transparent transition-all text-sm"
                  placeholder={label}
                />
                {name === "email" && errors.email && (
                  <p className="text-red-500 text-xs">Email is required</p>
                )}
              </div>
            ))}

            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-sm font-semibold text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                {...register("message")}
                placeholder="Tell us how we can help..."
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50
                  text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500
                  focus:border-transparent transition-all text-sm resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              className="w-full py-3.5 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white
                font-semibold rounded-xl hover:opacity-90 transition-all duration-200
                shadow-md shadow-blue-900/20 disabled:opacity-60"
            >
              {sending ? "Sending…" : "Send Message →"}
            </button>

            <p className="text-center text-xs text-gray-400">
              This site is protected by reCAPTCHA and the Google{" "}
              <a href="https://policies.google.com/privacy" className="underline">Privacy Policy</a>{" "}
              and{" "}
              <a href="https://policies.google.com/terms" className="underline">Terms of Service</a>{" "}
              apply.
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
