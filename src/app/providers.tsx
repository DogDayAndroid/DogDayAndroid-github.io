"use client";

import React, { useState } from "react";

// NextUI Provider
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

// Mui Privider
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';

// i18n
import { i18nScope } from "@/languages"
import { VoerkaI18nProvider } from "@voerkai18n/react"
import Loading from "@/components/Loading";

// My components
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export function Providers({ children }: { children: React.ReactNode }) {
    const [muiMode, setMuiMode] = useState<'light' | 'dark'>('dark');
    const muiTheme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode: muiMode
                },
            }),
        [muiMode],
    );
    return (
        <NextUIProvider>
            <NextThemesProvider attribute="class" defaultTheme="dark">
                <MuiThemeProvider theme={muiTheme}>
                    <VoerkaI18nProvider fallback={<Loading />} scope={i18nScope}>
                        <Navbar setMuiMode={setMuiMode} />
                        {children}
                        <Footer />
                    </VoerkaI18nProvider>
                </MuiThemeProvider>
            </NextThemesProvider>
        </NextUIProvider>
    );
}
