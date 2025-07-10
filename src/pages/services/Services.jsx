import React from "react";
import Layout from "../../components/layout/Layout";

function Services() {
  return (
    <Layout>
      <div className="container mx-auto">
        <section class="bg-[#d9d9d9] relative isolate overflow-hidden px-2 py-2 sm:px-5 sm:py-5">
          <div class="mx-auto max-w-md lg:max-w-7xl">
            <div class="px-4 py-4 lg:px-5 lg:py-3">
              <div class="font-Poppins text-center text-2xl font-bold leading-5 tracking-widest lg:text-3xl">
                Our{" "}
                <span class="from-30% from-[#FF8E26] to-55% to-[#0163E0] inline-block bg-gradient-to-r bg-clip-text text-transparent">
                  {" "}
                  Service{" "}
                </span>
              </div>
            </div>
          </div>
          <div class="mx-auto max-w-full px-4 py-4 md:max-w-screen-lg">
            <div class="grid grid-cols-1 items-stretch justify-center gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
              <div class="shadow-custom-white shadow-gray-500 rounded-lg bg-white">
                <div class="px-4 py-4">
                  <div class="flex items-center justify-start">
                    <div class="flex h-8 w-8 items-center justify-center rounded-full bg-black">
                      <p class="text-white">I</p>
                    </div>
                    <div class="px-3 py-3">
                      <p class="font-Poppins text-sm font-semibold tracking-tight text-black md:font-bold md:tracking-wider">
                        Title
                      </p>
                    </div>
                  </div>
                  <div class="mt-4 max-w-full md:max-w-md">
                    <p class="text-[9px] font-Poppins font-medium leading-4 tracking-wider text-black">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Omnis dignissimos ratione vel minus ullam dolore debitis
                      iure, perspiciatis magnam consequatur illum. Maiores quis
                      dolorem beatae ut odit, ab magnam alias.
                    </p>
                  </div>
                </div>
              </div>
              <div class="shadow-custom-white shadow-gray-500 rounded-lg bg-white">
                <div class="px-4 py-4">
                  <div class="flex items-center justify-start">
                    <div class="flex h-8 w-8 items-center justify-center rounded-full bg-black">
                      <p class="text-white">I</p>
                    </div>
                    <div class="px-3 py-3">
                      <p class="font-Poppins text-sm font-semibold tracking-tight text-black md:font-bold md:tracking-wider">
                        Title
                      </p>
                    </div>
                  </div>
                  <div class="mt-4 max-w-full md:max-w-md">
                    <p class="text-[9px] font-Poppins font-medium leading-4 tracking-wider text-black">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Omnis dignissimos ratione vel minus ullam dolore debitis
                      iure, perspiciatis magnam consequatur illum. Maiores quis
                      dolorem beatae ut odit, ab magnam alias.
                    </p>
                  </div>
                </div>
              </div>
              <div class="shadow-custom-white shadow-gray-500 rounded-lg bg-white">
                <div class="px-4 py-4">
                  <div class="flex items-center justify-start">
                    <div class="flex h-8 w-8 items-center justify-center rounded-full bg-black">
                      <p class="text-white">I</p>
                    </div>
                    <div class="px-3 py-3">
                      <p class="font-Poppins text-sm font-semibold tracking-tight text-black md:font-bold md:tracking-wider">
                        Title
                      </p>
                    </div>
                  </div>
                  <div class="mt-4 max-w-full md:max-w-md">
                    <p class="text-[9px] font-Poppins font-medium leading-4 tracking-wider text-black">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Omnis dignissimos ratione vel minus ullam dolore debitis
                      iure, perspiciatis magnam consequatur illum. Maiores quis
                      dolorem beatae ut odit, ab magnam alias.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default Services;
