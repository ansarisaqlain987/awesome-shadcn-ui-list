export default function Header() {
  return (
    <section className="bg-background text-primary">
      <div className="container mx-auto flex flex-col items-center px-4 pt-12 text-center md:px-10 lg:px-32">
        <h1 className="text-4xl leading-none">
          Build Smarter with the Best
          <span className="my-2 font-bold mx-4 ">Shadcn/UI</span>
          Resources
        </h1>
        <p className="px-8 mt-4 mb-12 text-lg">
          One Stop for Shadcn/UI Components and Utilities
        </p>
      </div>
    </section>
  );
}
