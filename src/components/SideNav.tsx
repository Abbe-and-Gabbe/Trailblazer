import React from 'react';
import Link from 'next/link';
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from './ui/card';
import {DividerHorizontalIcon} from "@radix-ui/react-icons";
import { Separator } from '@/components/ui/separator';

      const SideNav = () => {
        return (
          <Card className={"h-screen w-72 rounded-none" }>
            <CardHeader>
             <CardTitle>
               Trailblazer
             </CardTitle>
            </CardHeader>
            <Separator/>
            <CardContent className={"flex flex-col"}>
              <Link className={"py-3 font-semibold hover:text-blue-500 border-b"} href={"/home"} >Home</Link>
              <Link className={"py-3 font-semibold hover:text-blue-500 border-b"} href={"/about"} >About</Link>
              <Link className={"py-3 font-semibold hover:text-blue-500 border-b"} href={"/contact"} >Contact</Link>
              <Link className={"py-3 font-semibold hover:text-blue-500 border-b"} href={"/services"} >Services</Link>
            </CardContent>
          </Card>
  );
};

export default SideNav;