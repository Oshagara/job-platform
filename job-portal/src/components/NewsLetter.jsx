import React from 'react';
import {FaEnvelopeOpenText, FaRocket} from "react-icons/fa6";


const NewsLetter = () => {
  return (
    <div>
      <div>
        <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
          <FaEnvelopeOpenText /> Email me for Jobs
        </h3>
        <p className="text-primary/75 text-based mb-4">
          Email me when you got a job for me as soon as possible
        </p>
        <div className="w-full space-y-4">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="name@mail.com"
            className="w-full block py-2
            pl-3 border focus:outline-none"
          />
          <input type="submit" value={"Subscribe"} className="w-full block py-2
            pl-3 border focus:outline-none bg-blue rounded-sm text-white cursor-pointer font-semibold" />
        </div>
      </div>

      {/* second part */}

      <div className="mt-5">
        <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
          <FaRocket /> Get notified!
        </h3>
        <p className="text-primary/75 text-based mb-4">
          Email me when you got a job for me as soon as possible
        </p>
        <div className="w-full space-y-4">
          <input type="submit" value={"Upload your Resume"} className="w-full block py-2
            pl-3 border focus:outline-none bg-blue rounded-sm text-white cursor-pointer font-semibold" />
        </div>
      </div>
    </div>
  );
}

export default NewsLetter