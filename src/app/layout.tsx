import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";

import ClientLayout from "./ClientLayout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ClientLayout>{children}</ClientLayout>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
