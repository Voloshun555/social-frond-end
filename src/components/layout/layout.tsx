import React, { PropsWithChildren } from 'react'
import { SideBar } from '../sidebar/side-bar';
import s from "./layout.module.scss"

export const Layout = ({children}: PropsWithChildren) => {
    return (
      <main className={s.layout}>
        <SideBar />
        <section>{children}</section>
      </main>
    );
}
