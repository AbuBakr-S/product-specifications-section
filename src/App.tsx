import productImageMobile from './assets/product-img-main-mobile.jpg';
import productImageTablet from './assets/product-img-main-tablet.jpg';
import productImageDesktop from './assets/product-img-main-desktop.jpg';
import vectorIcon from './assets/vectorIcon.png';
import paintIcon from './assets/paintIcon.png';
import plantIcon from './assets/plantIcon.png';
import waterFlashIcon from './assets/waterFlashIcon.png';

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
            className="flex overflow-x-auto whitespace-nowrap space-x-6 border-b text-base"
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
          className="mt-8 md:flex md:flex-col lg:flex-row lg:gap-6"
        >

          <img
            src={productImageMobile}
            alt="Mobile"
            className="block md:hidden w-full aspect-[311/180]"
          />

          <img
            src={productImageTablet}
            alt="Tablet"
            className="hidden lg:hidden md:block w-full aspect-[704/384]"
          />

          <img
            src={productImageDesktop}
            // src="https://placehold.co/367x256"
            alt="Tablet"
            className="lg:block hidden w-[367px] h-auto aspect-[367/256]"
          />

          <div className="flex flex-col">
            <h2 className="text-2xl font-medium lg:mt-0 mt-8">Eco-Friendly Choice</h2>
            <p className="mt-2 text-base">With our sustainable approach, we curate clothing that makes a statement of care—care for the planet, and for the art of fashion.</p>
            <ul className="mt-8 w-[259px] md:w-full text-base flex flex-col gap-y-4 md:grid md:grid-cols-2 md:gap-y-8 md:gap-x-12 lg:gap-8 md:space-y-0">
              <li className="flex h-12 gap-2 items-center">
                <span className="w-12 flex items-center justify-center shadow-soft h-12 rounded-full">
                  <img src={vectorIcon} height="24" width="24" />
                </span>
                <span>Recycled Materials</span>
              </li>
              <li className="flex h-12 gap-2 items-center">
                <span className="w-12 flex items-center justify-center shadow-soft h-12 rounded-full">
                  <img src={paintIcon} height="24" width="24" />
                </span>
                <span>Low Impact Dye</span>
              </li>
              <li className="flex h-12 gap-2 items-center">
                <span className="w-12 flex items-center justify-center shadow-soft h-12 rounded-full">
                  <img src={plantIcon} height="24" width="24" />
                </span>
                <span>Carbon Neutral</span>
              </li>
              <li className="flex h-12 gap-2 items-center">
                <span className="w-12 flex items-center justify-center shadow-soft h-12 rounded-full">
                  <img src={waterFlashIcon} height="24" width="24" />
                </span>
                <span>Water Conservation</span>
              </li>
            </ul>
          </div>

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
