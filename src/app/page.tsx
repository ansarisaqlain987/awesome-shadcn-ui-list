import { ComponentsTable } from "@/components/component-table";
import Container from "@/components/container";
import Header from "@/components/header";
import { SiteData } from "@/lib/data";
import { useMemo } from "react";

import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/footer";
export default function Home() {
  const makeData = useMemo(() => {
    const data = [];
    for (const d of SiteData) {
      for (const i of d.items) {
        data.push({
          ...i,
          sectionName: d.sectionName,
        });
      }
    }
    return data;
  }, []);

  return (
    <Container className="mb-20 max-h-[100vdh] h-[80vdh]">
      <Header />
      <ComponentsTable data={makeData} />
      <Footer />
      <Toaster />
    </Container>
  );
}
