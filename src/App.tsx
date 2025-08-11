import { useState } from "react"
import { tabs } from "./assets/tabsData"

function App() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <main className="p-4 min-w-[375px] max-w-[1344px] mx-auto">
      {/* Intro section ... */}
      <section className="mt-12 md:mt-16 lg:mt-24 mx-4">
        <header>
          <h1 className="text-3xl md:text-5xl">Discover timeless elegance</h1>
        </header>
        <p className="text-lg mt-6 text-secondary font-sans font-normal">
          Step into a world where quality meets quintessential charm with our collection. Every thread weaves a promise of unparalleled quality, ensuring that each garment is not just a part of your wardrobe, but a piece of art. Here's the essence of what makes our apparel the hallmark for those with an eye for excellence and a heart for the environment.
        </p>
      </section>

      <section className="mt-16 mx-4">
        {/* Nav */}
        <div className="relative">
          <nav role="tablist" className="flex overflow-x-auto whitespace-nowrap space-x-6 border-b text-base">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeTab === tab.id}
                aria-controls={`tab-panel-${tab.id}`}
                id={`tab-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className={`px-2 pb-3 min-w-max h-9 ${
                  activeTab === tab.id ? 'border-b-2 border-current text-indigo-700' : ''
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
          <div className="pointer-events-none absolute top-0 right-0 h-full w-[17px] bg-gradient-to-l from-white to-transparent" />
        </div>

        {/* Panels */}
        {tabs.map((tab) => (
          <section
            key={tab.id}
            role="tabpanel"
            id={`tab-panel-${tab.id}`}
            aria-labelledby={`tab-${tab.id}`}
            hidden={activeTab !== tab.id}
            className="mt-8 md:flex md:flex-col lg:flex-row lg:gap-6"
          >
            {/* Images */}
            <img src={tab.images.mobile} alt="" className="block md:hidden w-full aspect-[311/180]" />
            <img src={tab.images.tablet} alt="" className="hidden lg:hidden md:block w-full aspect-[704/384]" />
            <img src={tab.images.desktop} alt="" className="lg:block hidden w-[367px] h-auto aspect-[367/256]" />

            {/* Text & features */}
            <div className="flex flex-col">
              <h2 className="text-2xl font-medium lg:mt-0 mt-8">{tab.title}</h2>
              <p className="mt-2 text-base">{tab.description}</p>
              <ul className="mt-8 w-[259px] md:w-full text-base flex flex-col gap-y-4 md:grid md:grid-cols-2 md:gap-y-8 md:gap-x-12 lg:gap-8">
                {tab.features.map((feat, i) => (
                  <li key={i} className="flex h-12 gap-2 items-center">
                    <span className="w-12 flex items-center justify-center shadow-soft h-12 rounded-full">
                      <img src={feat.icon} height="24" width="24" alt="" />
                    </span>
                    <span>{feat.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </section>
    </main>
  );
}


export default App
