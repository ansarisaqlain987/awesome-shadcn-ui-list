import { ComponentsTable } from "@/components/component-table";
import Container from "@/components/container";
import Header from "@/components/header";
import { SiteData } from "@/lib/data";
import { useMemo } from "react";

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
  console.log(makeData.length);

  return (
    <Container className="mb-20">
      <Header />
      <div className=" ">
        <ComponentsTable data={makeData} />
      </div>
    </Container>
  );
}
