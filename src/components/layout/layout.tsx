import React, { Suspense } from 'react'
import { SideBar } from '../sidebar/side-bar';
import s from "./layout.module.scss"
import { Outlet } from 'react-router-dom';

export const Layout = () => {
    return (
      <main className={s.layout}>
        <SideBar />
        <Suspense fallback="Завантаження...">
          <Outlet />
        </Suspense>
      </main>
    );
}
