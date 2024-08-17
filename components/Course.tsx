"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";

export function Course() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Course: Bozo Core Content
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          This is a free course offering various topics about trading. The course is free, accessing the content.
        </CardItem>
        <CardItem translateZ="100" className="w-full h-full mt-4">
          <Image
            src="https://cdn.beacons.ai/user_content/8sWdAP9RcBcMieKOQtz8sTkoO2L2/referenced_images/50b3c68f-fbc0-4a86-a64b-0a6b7b73b594__store__product-image__4d78f868-4d94-4176-a8a1-5b6ab0005259__067f751c-262a-4cbf-af35-f51ff87a0149.jpg?t=1722338623952"
            height="1000"
            width="1000"
            className="h-100 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href="https://shop.beacons.ai/tradericarus/4d78f868-4d94-4176-a8a1-5b6ab0005259?pageViewSource=lib_view&referrer=https%3A%2F%2Fbeacons.ai%2Ftradericarus&show_back_button=true"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Get for free →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            $0
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
