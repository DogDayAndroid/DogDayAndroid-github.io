import React from 'react';

import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";

import { useVoerkaI18n } from "@voerkai18n/react"

export function LangSwitcher() {
    const { t, activeLanguage, changeLanguage, languages } = useVoerkaI18n()


    return (

        <Dropdown>

            <DropdownTrigger>
                <Button
                    variant="bordered"
                    className="capitalize"
                >
                    {t("Current language") + ':' + activeLanguage}
                </Button>
            </DropdownTrigger>
            <DropdownMenu
                aria-label="Single selection example"
                variant="flat"
                disallowEmptySelection
                selectionMode="single"
            >
                {
                    languages.map(lang => (

                        <DropdownItem
                            key={lang.name}
                            onPress={
                                () => changeLanguage(lang.name)

                            }>
                            {lang.title}
                        </DropdownItem>
                    ))
                }
            </DropdownMenu>
        </Dropdown>
    )
};