"use client";

import { useState } from 'react';

import dynamic from 'next/dynamic'
import Loading from '@/components/Loading'

import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";

import sidebarConfig from './config/sidebar';
import type { SidebarItem } from "@/app/Docs/config/typeSidebar";

const Docs = () => {
    const [curPage, setCurPage] = useState("Preface.mdx")
    const prefixPath = "./content/"
    const getContentPath = (subPath: string) => {
        const DynamicComponent = dynamic(() => import(`${prefixPath}${subPath}`), {
            loading: () => <Loading />,
        })
        return <DynamicComponent />;
    }
    return (
        <Stack
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={2}
            className="w-full"
        >
            <Card className="w-1/4">
                <CardBody>
                    {
                        sidebarConfig.map((item: SidebarItem, index: number) => (
                            <Button
                                variant="text"
                                key={index}
                                onClick={() => setCurPage(item.path)}
                            >
                                {item.title}
                            </Button>
                        ))
                    }
                </CardBody>
            </Card>
            <Card className="w-3/4">
                <CardBody>
                    {getContentPath(curPage)}
                </CardBody>
            </Card>
        </Stack>
    )
}

export default Docs;