'use client';

import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react";
import { useVoerkaI18n } from "@voerkai18n/react"

export default function Home() {
  const { t } = useVoerkaI18n()
  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src="https://github.com/DogDayAndroid/Android-Kernel-Builder/raw/main/.assets/DogDayAndroid.png"
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md">{t("Android Kernel Builder")}</p>
          <p className="text-small text-default-500">by easterNday</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>{t("This Github Action helps you build kernels. It reads multiple kernel sources from a configuration file and builds them using different toolchains. Additionally, it supports patching the kernel with KernelSU and uploading the built kernel image.")}</p>
      </CardBody>
      <Divider />
      <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          href="https://github.com/DogDayAndroid/Android-Kernel-Builder"
        >
          {t("Visit source code on GitHub.")}
        </Link>
      </CardFooter>
    </Card>
  );
}
