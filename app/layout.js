"use client";
import "./globals.css";
import * as React from "react";

import { ThemeProvider } from "@material-tailwind/react";
import {NextUIProvider} from "@nextui-org/react";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <div className="">
          <div className="">
            <div className="">
              <main>
                <div className="">
                <NextUIProvider>
                  <ThemeProvider>
                    {children}
                  </ThemeProvider>
                  </NextUIProvider>
                </div>
              </main>
            </div>
          </div>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/tw-elements.umd.min.js"></script>
      </body>
    </html>
  );
}
