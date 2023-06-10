import React, { FunctionComponent, ReactElement, useRef } from "react";
import Section from "../Section/Section";
import { sendEmail } from "../../helpers/helpers";
import { personalData } from "../About/About.data";

const Contact: FunctionComponent = (): ReactElement => {
  const formRef = useRef<HTMLFormElement | null>(null);

  return (
    <Section
      id="contact"
      className="flex flex-col sm:flex-row gap-10 md:gap-5 items-center sm:mb-20"
    >
      <>
        <div className="text-gray-600 mr-auto sm:w-[50%] lg:w-[40%] flex flex-col sm:gap-5">
          <div className="text-2xl lg:text-3xl xl:text-4xl leading-snug mb-5">
            <span className="font-bold">
              {"I am super exited to talk in details about my projects"}
            </span>
            <span className="block">{"and share my experience with you!"}</span>
          </div>
          <div className="text-sm">
            {
              " Write me a message in order to arrange a meeting or find me on my "
            }
            <a className="font-bold" href={personalData.linkedIn}>
              {"LinkedIn"}
            </a>{" "}
            {"profile."}
          </div>
        </div>

        <form
          className="flex flex-col w-full sm:w-[50%] gap-3"
          ref={formRef}
          onSubmit={(e) => sendEmail(e, formRef)}
        >
          <div className="flex flex-col gap-1">
            <label className="text-gray-600 text-sm">{"Subject"}</label>
            <input
              placeholder="Write your subject"
              className="py-1 outline-gray-300 text-sm bg-gray-200 p-2 text-gray-400 h-[40px] rounded"
              type="text"
              name="subject"
              required
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-gray-600 text-sm">{"Message"}</label>
            <textarea
              placeholder="Write your message"
              className="outline-gray-300 text-sm bg-gray-200 p-2 text-gray-400"
              name="message"
              rows={4}
              cols={50}
              required
            />
          </div>

          <div className="flex flex-row items-end gap-5">
            <div className="flex flex-col gap-1 w-[70%]">
              <label className="text-gray-600 text-sm">{"Email"}</label>
              <input
                placeholder="Write your email address"
                className="py-1 outline-gray-300 text-sm bg-gray-200 p-2 text-gray-400 h-[40px] rounded"
                type="email"
                name="email"
                required
              />
            </div>
            <div className="w-[30%]">
              <input
                className="bg-orange-600 hover:bg-orange-700 cursor-pointer text-stone-100 py-1 w-full h-[40px] rounded"
                type="submit"
                value="Send"
                required
              />
            </div>
          </div>
        </form>
      </>
    </Section>
  );
};

export default Contact;
