"use client";

import { FormEvent, useState } from "react";
export default function Home() {
  const [input, setInput] = useState('');
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log(input);
    setInput('');
  }

  const changeInput = (e: FormEvent<HTMLTextAreaElement>) => {
  setInput(e.currentTarget.value);
  }


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <div>
        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img alt='chatbot' src="https://randomuser.me/api/portraits/lego/7.jpg" />
            </div>
          </div>
          <div className="chat-bubble">It was said that you would, destroy the Sith, not join them.</div>
        </div>
        <div className="chat chat-end">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img alt='User' src="https://randomuser.me/api/portraits/men/81.jpg" />
            </div>
          </div>
          <div className="chat-bubble">It was you who would bring balance to the Force</div>
        </div>
        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img alt='chatbot' src="https://randomuser.me/api/portraits/lego/7.jpg" />
            </div>
          </div>
          <div className="chat-bubble">Not leave it in Darkness</div>
        </div>
      </div>


      <div className="w-full">
        <form onSubmit={handleSubmit} className="flex w-full flex-col space-y-2">
          <textarea value={input} onChange={changeInput} className="textarea textarea-bordered " placeholder="Escribe aqui"></textarea>
          <button type="submit" className="btn btn-primary">Send</button>
        </form>
      </div>
    </main>
  );
}
