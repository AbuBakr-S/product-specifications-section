function App() {

  return (
    <main className="p-4 min-w-[375px]">
  <section className="mt-12 mx-4">
    <header>
      <h1 className="text-3xl">Discover timeless elegance</h1>
    </header>
    <p className="text-lg mt-6 text-secondary font-sans font-normal">
      Step into a world where quality meets quintessential charm with our collection. Every thread weaves a promise of unparalleled quality, ensuring that each garment is not just a part of your wardrobe, but a piece of art. Here's the essence of what makes our apparel the hallmark for those with an eye for excellence and a heart for the environment.
    </p>
  </section>

  <section className="mt-16 mx-4">
    <div className="relative">
      <nav
        role="tablist"
        aria-label="product-categories"
        className="flex overflow-x-auto whitespace-nowrap space-x-6 border-b"
      >
        <button
          role="tab"
          aria-selected="true"
          aria-controls="tab-panel-1"
          id="tab-1"
          className="px-2 pb-3 min-w-max border-b-2 h-9 border-current text-indigo-700"
        >
          Sustainability
        </button>
        <button
          role="tab"
          aria-selected="false"
          aria-controls="tab-panel-2"
          id="tab-2"
          className="px-2 pb-3 min-w-max"
        >
          Comfort
        </button>
        <button
          role="tab"
          aria-selected="false"
          aria-controls="tab-panel-3"
          id="tab-3"
          className="px-2 pb-3 min-w-max"
        >
          Durability
        </button>
        <button
          role="tab"
          aria-selected="false"
          aria-controls="tab-panel-4"
          id="tab-4"
          className="px-2 pb-3 min-w-max"
        >
          Versatility
        </button>
      </nav>
      {/* Right edge gradient passthrough effect */}
      <div className="pointer-events-none absolute top-0 right-0 h-full w-[17px] bg-gradient-to-l from-white to-transparent" />
    </div>

    <section
      role="tabpanel"
      id="tab-panel-1"
      aria-labelledby="tab-1"
      className="mt-4"
    >
      <h2 className="text-xl font-semibold">Sustainability</h2>
      <p>Tab 1 content goes here.</p>
    </section>

    <section
      role="tabpanel"
      id="tab-panel-2"
      aria-labelledby="tab-2"
      className="mt-4 hidden"
    >
      <h2 className="text-xl font-semibold">Comfort</h2>
      <p>Tab 2 content goes here.</p>
    </section>

    <section
      role="tabpanel"
      id="tab-panel-3"
      aria-labelledby="tab-3"
      className="mt-4 hidden"
    >
      <h2 className="text-xl font-semibold">Durability</h2>
      <p>Tab 3 content goes here.</p>
    </section>

    <section
      role="tabpanel"
      id="tab-panel-4"
      aria-labelledby="tab-4"
      className="mt-4 hidden"
    >
      <h2 className="text-xl font-semibold">Versatility</h2>
      <p>Tab 4 content goes here.</p>
    </section>
  </section>
</main>
  )
}

export default App
