import { useRef, useState } from "react";
import { animated, useSpring } from "react-spring";

const Test = () => {
  return (
    <main className="ease-out-in-out xl:ml-68.5 relative h-full max-h-screen rounded-xl transition-all- duration-200">
      <nav className="relative flex flex-wrap items-center justify-between px-0 py-2 mx-6 transition-all shadow-none duration-250 easy-soft-in rounded-2xl lg:flex-nowrap lg:justify-start"></nav>
      <div className="w-full px-6 py-6 mx-auto">
        <div className="flex flex-wrap -mx-3">
          <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4 border-solid border-2 border-sky-500">
            <div className="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
              <div className="flex-auto p-4">
                <div className="flex flex-row -mx-3">
                  <div className="flex-none w-2/3 max-w-full px-3">
                    <p class="mb-0 font-sans font-semibold leading-normal text-sm">
                      Fundings Proposals
                    </p>
                    <h3 className="mb-0 font-bold">68</h3>
                  </div>

                  <div className="px-3 text-right basis-1/3">
                    <div className="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500">
                      <i className="ni leading-none ni-money-coins text-lg relative top-3.5 text-white">
                        Icon
                      </i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4 border-solid border-2 border-sky-500">
            <div className="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
              <div className="flex-auto p-4">
                <div className="flex flex-row -mx-3">
                  <div className="flex-none w-2/3 max-w-full px-3">
                    <p class="mb-0 font-sans font-semibold leading-normal text-sm">
                      Beneficiaries
                    </p>
                    <h3 className="mb-0 font-bold">38</h3>
                  </div>

                  <div className="px-3 text-right basis-1/3">
                    <div className="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500">
                      <i className="ni leading-none ni-money-coins text-lg relative top-3.5 text-white">
                        Icon
                      </i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4 border-solid border-2 border-sky-500">
            <div className="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
              <div className="flex-auto p-4">
                <div className="flex flex-row -mx-3">
                  <div className="flex-none w-2/3 max-w-full px-3">
                    <p class="mb-0 font-sans font-semibold leading-normal text-sm">
                      Contributors
                    </p>
                    <h3 className="mb-0 font-bold">78</h3>
                  </div>

                  <div className="px-3 text-right basis-1/3">
                    <div className="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500">
                      <i className="ni leading-none ni-money-coins text-lg relative top-3.5 text-white">
                        Icon
                      </i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4 border-solid border-2 border-sky-500">
            <div className="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
              <div className="flex-auto p-4">
                <div className="flex flex-row -mx-3">
                  <div className="flex-none w-2/3 max-w-full px-3">
                    <p class="mb-0 font-sans font-semibold leading-normal text-sm">
                      Total HNY for Fundings
                    </p>
                    <h3 className="mb-0 font-bold">6812</h3>
                  </div>

                  <div className="px-3 text-right basis-1/3">
                    <div className="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500">
                      <i className="ni leading-none ni-money-coins text-lg relative top-3.5 text-white">
                        Icon
                      </i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Test;
