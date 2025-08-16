export default function Contact() {
  return (
    <section id="contact" className="bg-slate-800 py-20 px-4">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Contact Me</h2>
        <form 
  action="https://formsubmit.co/ibadmughal@gmail.com" 
  method="POST"
  className="space-y-4"
>
  <input type="hidden" name="_captcha" value="false" />
  <input type="text" name="name" placeholder="Name" className="w-full p-3 rounded bg-slate-700 text-white" required />
  <input type="email" name="email" placeholder="Email" className="w-full p-3 rounded bg-slate-700 text-white" required />
  <textarea name="message" rows="5" placeholder="Message" className="w-full p-3 rounded bg-slate-700 text-white" required></textarea>
  <button type="submit" className="bg-indigo-600 hover:bg-indigo-500 px-6 py-2 rounded text-white">Send</button>
</form>

      </div>
    </section>
  );
}


// 📁 src/components/Footer.jsx

