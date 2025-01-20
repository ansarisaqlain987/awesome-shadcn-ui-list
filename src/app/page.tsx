import { ComponentsTable } from "@/components/component-table";
import Container from "@/components/container";
import Header from "@/components/header";
import { Input } from "@/components/ui/input";
import { SiteData } from "@/lib/data";

export default function Home() {
  return (
    <Container className="mb-20">
      <Header />
      <div className="flex items-center py-4 mb-4">
        <Input
          placeholder="Filter components..."
          // value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          // onChange={(event) =>
          //   // table.getColumn("name")?.setFilterValue(event.target.value)
          // }
        />
      </div>
      <div className="flex gap-4 flex-col">
        {SiteData.map((data, index) => {
          return (
            <section key={index}>
              <div>
                <h1 className="text-2xl font-bold py-2">{data.sectionName}</h1>
              </div>
              <ComponentsTable data={data.items} />
            </section>
          );
        })}
      </div>
    </Container>
  );
}
