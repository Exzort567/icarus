"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { BackgroundBeams } from "./ui/background_beams";

export function Partners() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        <div className="text-center mt-10 mb-10 text-4xl">
            <h2>Partners and Events</h2>
        </div>
      
      </AnimatePresence>
      
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={600}
                  height={300}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-medium text-neutral-700 dark:text-neutral-200 text-base"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-base"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-blue-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-start gap-4">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col  hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col  w-full">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={300}
                  height={300}
                  src={card.src}
                  alt={card.title}
                  className="h-60 w-full  rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="flex justify-center items-center flex-col">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left text-base"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left text-base"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
          
        ))}
        
      </ul>
      
    </>
    
  );
}



export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "SINGAPORE TOKEN2049, the world's largest crypto event.",
    title: "Icarus x TOKEN2049 | The Premier Crypto Event",
    src: "https://cdn.beacons.ai/user_content/8sWdAP9RcBcMieKOQtz8sTkoO2L2/referenced_images/dca0714f-c083-4a54-8289-fbb02c9b0485__link-in-bio__links-block__home__87d3db4d-02ee-4f1e-bd3b-e618372365e7__024965c1-451a-4cac-833c-2893117d00f9__1d9af5ef-8aa0-41bb-89db-731f1ca715cb.webp?t=1722968745919",
    ctaText: "Visit",
    ctaLink: "https://www.token2049.com/",
    content: () => {
      return (
        <p>
         SINGAPORE TOKEN2049, the world&lsquo;s largest crypto event. You can get 15% discount by using &lsquo;Icarus15&lsquo; during ticket payments.
        </p>
      );
    },
  },
  {
    description: "Fill out this form if you want to purchase the Icarus book.",
    title: "The Icarus Paradox: Beyond The Burn",
    src: "https://cdn.beacons.ai/user_content/8sWdAP9RcBcMieKOQtz8sTkoO2L2/referenced_images/ac02afde-2cda-4db7-a4cd-02288f03ffc8__link-in-bio__links-block__home__87d3db4d-02ee-4f1e-bd3b-e618372365e7__e5b3ef42-a81f-4807-94f9-ec360c3f084b__b5f4268b-d79e-41c4-a995-c2ab9c281502.jpg?t=1722337283725",
    ctaText: "Visit",
    ctaLink: "https://tally.so/r/3xZOJv",
    content: () => {
      return (
        <p>
          Fill out this form if you want to purchase the Icarus book. You will also receive free recorded videos and a live session with Bozo.
        </p>
      );
    },
  },

  {
    description: "At Blue Guardian, we're constantly evolving.  ",
    title: "Cart - Blue Guardian Checkout",
    src: "https://cdn.beacons.ai/user_content/8sWdAP9RcBcMieKOQtz8sTkoO2L2/referenced_images/d0c5e309-9a49-4c1b-a394-11219e97c6a4__link-in-bio__links-block__home__87d3db4d-02ee-4f1e-bd3b-e618372365e7__7f51b964-00ae-4cd7-ada6-f1c6b4afcd34__0bccd5e5-bb24-49f0-a621-e9325d377a76.jpg?t=1722340207346",
    ctaText: "Visit",
    ctaLink: "http://checkout.blueguardian.com/ref/140/",
    content: () => {
      return (
        <p>
        
        </p>
      );
    },
  },
  {
    description: "Join me using this link to get a 20% fee discount on BingX.",
    title: "Discover a new world of trading opportunities.",
    src: "https://cdn.beacons.ai/user_content/8sWdAP9RcBcMieKOQtz8sTkoO2L2/referenced_images/925bd041-9d34-4d86-9f86-f7566dc6e305__link-in-bio__links-block__home__87d3db4d-02ee-4f1e-bd3b-e618372365e7__9522862d-aa51-4747-800f-1c1b4f6e6c7d__62ea79e3-50ad-4683-bd5d-d38884a50367.webp?t=1722337342753",
    ctaText: "Visit",
    ctaLink: "https://bingx.com/en/partner/IcarusCronos/",
    content: () => {
      return (
        <p>
         
        </p>
      );
    },
  },
  {
    description: "Sign up and log in to the OKX app to get exciting rewards.",
    title: "Trade  with OKX",
    src: "https://cdn.beacons.ai/user_content/8sWdAP9RcBcMieKOQtz8sTkoO2L2/referenced_images/09e244f4-b834-4680-b190-4f7a52a30baf__link-in-bio__links-block__home__87d3db4d-02ee-4f1e-bd3b-e618372365e7__899cf094-8257-4c08-8406-c4210a5450a7__d5a6d83c-bce7-4650-a40c-b8d31d18b145.webp?t=1722337386960 ",
    ctaText: "Visit",
    ctaLink: "https://www.okx.com/join/34752328",
    content: () => {
      return (
        <p>
         
        </p>
      );
    },
  },
  {
    description: "Join our Discord for FREE signals, insights, and trading knowledge!",
    title: "Join the Icarus Falls Discord Server!",
    src: "https://cdn.beacons.ai/user_content/8sWdAP9RcBcMieKOQtz8sTkoO2L2/referenced_images/8cfa8b12-cd40-40f0-aef8-115cc516edf2__link-in-bio__links-block__home__87d3db4d-02ee-4f1e-bd3b-e618372365e7__e2055501-ec35-4408-828f-6f97c78808ec__68900408-06ab-401f-a9cc-9ec8da63eadc.webp?t=1722337662804",
    ctaText: "Visit",
    ctaLink: "https://discord.com/invite/icarusfalls",
    content: () => {
      return (
        <p>
         
        </p>
      );
    },
  },
];
