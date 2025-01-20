export default function Header() {
  return (
    <section className="bg-background text-foreground">
      <div className="container mx-auto flex flex-col items-center px-4 pt-12 text-center md:px-10 lg:px-32 xl:max-w-3xl">
        <h1 className="text-4xl font-bold leading-none sm:text-5xl">
          Quisquam necessita vel
          <span className="dark:text-teal-600">laborum doloribus</span>
          delectus
        </h1>
        <p className="px-8 mt-8 mb-12 text-lg">
          Cupiditate minima voluptate temporibus quia? Architecto beatae esse ab
          amet vero eaque explicabo!
        </p>
      </div>
    </section>
  );
}
