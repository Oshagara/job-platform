import React from 'react'

const  Footer = () => {
  return (
    <div>
         <footer className="relative pt-8 pb-6 mt-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center md:justify-between justify-center">
              <div className="w-full md:w-6/12 px-4 mx-auto text-center">
                <div className="text-sm text-blue font-semibold py-1">
                  Created{" "}
                  <a
                    href="https://www.creative-tim.com/product/notus-js"
                    className="text-blue/40 hover:text-blue"
                    target="_blank"
                  >
                    
                  </a>{" "}
                  by: {" "}
                  <a
                    href="https://www.creative-tim.com"
                    className="text-blue/50 hover:text-blue"
                    target="_blank"
                  >Israel Oshagara
                    {" "}
                    
                  </a>
                  ICC &copy; 2024.
                </div>
              </div>
            </div>
          </div>
        </footer>
    </div>
  )
}

export default Footer