import React, { FunctionComponent, useRef } from "react";
import Section from "../Section/Section";
import { sendEmail } from "../../helpers/helpers";

const Contact: FunctionComponent = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  return (
    <Section
      id="contact"
      className=" bg-stone-100 flex flex-col sm:flex-row gap-5"
    >
      <>
        <div className="text-4xl font-bold leading-snug text-stone-300 mr-auto mb-10 sm:w-[50%]">
          {" Discuss Collaborative Opportunities with Me!"}
        </div>
        <form
          className="flex flex-col sm:w-[50%] gap-5"
          ref={formRef}
          onSubmit={(e) => sendEmail(e, formRef)}
        >
          <div className="flex flex-col gap-1">
            <label className="text-stone-500">{"Subject"}</label>
            <input
              className="py-1 outline-stone-200 p-2 text-stone-400"
              type="text"
              name="subject"
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-stone-500">{"Your email"}</label>
            <input
              className="py-1 outline-stone-200 p-2 text-stone-400"
              type="email"
              name="email"
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-stone-500">{"Message"}</label>
            <textarea
              className="outline-stone-200 p-2 text-stone-400"
              name="message"
              rows={4}
              cols={50}
              required
            />
          </div>
          <input
            className="bg-rose-500 hover:bg-rose-600 cursor-pointer text-stone-100 rounded-md py-1"
            type="submit"
            value="Send"
            required
          />
        </form>
      </>
    </Section>
  );
};

export default Contact;
