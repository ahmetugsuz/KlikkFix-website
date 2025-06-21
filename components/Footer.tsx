'use client';

import { useState } from 'react';

export default function Footer() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus('Message sent!');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('Something went wrong.');
      }
    } catch (err) {
      console.error(err);
      setStatus('Error sending message.');
    }
  }

  return (
    <footer id='contact' className="w-full text-gray-400 text-sm mt-20 border-t border-[#2a1a3a] bg-[#1a102a] bg-opacity-80 snap-start px-6 py-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Left Side */}
        <div className="space-y-4 text-center md:text-left">
          <h2 className="text-lg font-semibold text-white">KlikkFix</h2>
          <p>Created by Ahmet Tugsuz</p>
          <ul className="space-y-1">
            <li>
              <a
                href="https://www.linkedin.com/in/klikk-fix-043b4b370/"
                target="_blank"
                className="underline hover:text-purple-300"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://chromewebstore.google.com/detail/klikkfix/ofoakggookgcolmahjmnfkamcjfahala"
                target="_blank"
                className="underline hover:text-blue-400"
              >
                Download for Chrome
              </a>
            </li>
            <li>
              <a
                href="https://microsoftedge.microsoft.com/addons/Microsoft-Edge-Extensions-Home"
                target="_blank"
                className="underline hover:text-blue-300"
              >
                Download for Edge
              </a>
            </li>
          </ul>
        </div>

        {/* Right Side Contact Form */}
        <div>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="w-full px-4 py-2 bg-[#2a1a3a] text-white rounded focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="w-full px-4 py-2 bg-[#2a1a3a] text-white rounded focus:ring-2 focus:ring-purple-500"
            />
            <textarea
              placeholder="Message"
              rows={3}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              className="w-full px-4 py-2 bg-[#2a1a3a] text-white rounded focus:ring-2 focus:ring-purple-500"
            />
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded font-semibold"
            >
              Send
            </button>
            <p className="text-sm mt-1">{status}</p>
          </form>
        </div>
      </div>

{/* Bottom bar */}
<div className="mt-8 text-center border-t border-[#2a1a3a] pt-4">
  © {new Date().getFullYear()} KlikkFix. All rights reserved. |
  <a href="/contact" className="underline hover:text-purple-300 ml-1">
    Contact
  </a>{' '}
  | Built by{' '}
  <a
    href="https://ahmettu.com"
    target="_blank"
    rel="noopener noreferrer"
    className="underline hover:text-purple-300"
  >
    Ahmet Tugsuz
  </a>
</div>

    </footer>
  );
}
