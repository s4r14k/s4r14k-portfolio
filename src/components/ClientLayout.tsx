'use client';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastProvider } from "@/context/ToastContext";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <GoogleReCaptchaProvider
        reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
        scriptProps={{
          async: true,
          defer: true,
          appendTo: "head",
        }}
      >
        <ToastProvider>
          {children}
          <Footer />
          <ToastContainer 
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </ToastProvider>
      </GoogleReCaptchaProvider>
      <SpeedInsights/>
    </>
  );
}