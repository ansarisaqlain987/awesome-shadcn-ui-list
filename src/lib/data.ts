export interface ISectionItem {
  name: string;
  description: string;
  link: string;
}
export interface IData {
  sectionName: string;
  items: ISectionItem[];
}
export const SiteData: IData[] = [
  {
    sectionName: "Section 1",
    items: [
      {
        name: "Item 1",
        description: "Description 1",
        link: "https://www.google.com",
      },
      {
        name: "Item 2",
        description: "Some here",
        link: "https://www.google.com",
      },
    ],
  },
  {
    sectionName: "Section 2",
    items: [
      {
        name: "Item 1",
        description: "Description 1",
        link: "https://www.google.com",
      },
    ],
  },
];
