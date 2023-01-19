import { Layout } from "@/interface/interface";
import Head from "next/head";

function Layout({ title, children }: Layout) {
   return (
      <>
         <Head>
            <title>Games - {title}</title>
         </Head>
         {children}
      </>
   );
}

export default Layout;
