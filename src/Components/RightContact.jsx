import React from 'react'

const RightContact = () => {
  return (
    <div className="p-1 w-full xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full">
      <form action="" className="w-full p-1 flex flex-col gap-3">
        <input
          type="text"
          placeholder="Fullname"
          className="w-full text-base px-8 p-4 rounded-2xl border-none outline-none bg-slate-200"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full text-base px-8 p-4 rounded-2xl border-none outline-none bg-slate-200"
        />
        <input
          type="number"
          placeholder="Phone number"
          className="w-full text-base px-8 p-4 rounded-2xl border-none outline-none bg-slate-200"
        />
        <textarea
          type="text"
          placeholder="Message"
          className="w-full text-base px-8 p-4 rounded-2xl border-none outline-none bg-slate-200"
          cols="30"
          rows="5"
        >
          Message
        </textarea>
        <input
          type="submit"
          value="Send your message"
          className="w-full text-base px-8 p-4 rounded-2xl bg-blue-500 text-slate-100 "
        />
      </form>
    </div>
  );
}

export default RightContact