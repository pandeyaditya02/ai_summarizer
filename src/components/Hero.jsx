import React from "react";
import { logo } from "../assets/index";

const Hero = () => {
  return (
    <header className="w-full flex flex-col justify-center items-center">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <div className="flex items-center">
          <img src={logo} alt="sumz_logo" className="w-16 object-contain" />

          <h3 className=" font-extrabold leading-[1.15] text-black sm:text-4xl ">
            Text
            <span className="orange_gradient">Whisper</span>
          </h3>
        </div>
        <button
          type="button"
          onClick={() =>
            window.open("https://github.com/pandeyaditya02/ai_summarizer")
          }
          className="black_btn"
        >
          GitHub
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>

      <h2 className="desc">
        Simplify your reading with TextWhisper, an open-source article
        summarizer that transforms lengthy articles into clear and concise
        summaries
      </h2>
    </header>
  );
};

export default Hero;
