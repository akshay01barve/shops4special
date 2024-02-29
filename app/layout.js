"use client";
import "./globals.css";
import * as React from "react";

import { ThemeProvider } from "@material-tailwind/react";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <div className="">
          <div className="">
            <div className="">
              <main>
                <div className="">
                  <ThemeProvider>
                    {children}
                  </ThemeProvider>
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
