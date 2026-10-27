import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header / Profile */}
        <section className="text-center mb-8 sm:mb-12">
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-gray-200 bg-gray-100">
              <Image
                src="/Profile.png"
                alt="Sachini Poruwadanda"
                width={160}
                height={160}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">Sachini Poruwadanda</h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-2 sm:mb-4">Professional Script Writer</p>
          <p className="text-gray-600 mb-6">Based in Indonesia</p>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <div className="text-2xl sm:text-3xl font-bold text-gray-900">13+</div>
              <div className="text-sm text-gray-600">Years of Experience</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <div className="text-2xl sm:text-3xl font-bold text-gray-900">120+</div>
              <div className="text-sm text-gray-600">Success Projects</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <div className="text-2xl sm:text-3xl font-bold text-gray-900">80+</div>
              <div className="text-sm text-gray-600">Happy Clients</div>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 border-b-2 border-gray-300 pb-2">
            About
          </h2>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            Professional Script Writer based in Indonesia with extensive experience
            in media production, television presenting, and freelance script writing.
            Skilled in crafting engaging scripts for various platforms and audiences.
          </p>
        </section>

        {/* Work Experience */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 border-b-2 border-gray-300 pb-2">
            Work Experience
          </h2>
          <div className="space-y-4 sm:space-y-6">
            <div className="flex gap-3 sm:gap-4 items-start">
              <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 rounded bg-gray-100 overflow-hidden flex items-center justify-center">
                <Image
                  src="/content suppy.com"
                  alt="Content Supply.com"
                  width={48}
                  height={48}
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:flex-wrap mb-1 gap-1">
                  <h3 className="text-base sm:text-lg font-semibold">Content Supply.com</h3>
                  <span className="text-sm sm:text-base text-gray-600">2025 - Present</span>
                </div>
                <p className="text-sm sm:text-base text-gray-700">Script Writer - Indonesia</p>
              </div>
            </div>

            <div className="flex gap-3 sm:gap-4 items-start">
              <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 rounded bg-gray-100 overflow-hidden flex items-center justify-center">
                <Image
                  src="/fiverr.png"
                  alt="Fiverr"
                  width={48}
                  height={48}
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:flex-wrap mb-1 gap-1">
                  <h3 className="text-base sm:text-lg font-semibold">Freelance Script Writer</h3>
                  <span className="text-sm sm:text-base text-gray-600">2019 - 2024</span>
                </div>
                <p className="text-sm sm:text-base text-gray-700">Fiverr (Remote)</p>
              </div>
            </div>

            <div className="flex gap-3 sm:gap-4 items-start">
              <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 rounded bg-gray-100 overflow-hidden flex items-center justify-center">
                <Image
                  src="/hiru news.png"
                  alt="Hiru News"
                  width={48}
                  height={48}
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:flex-wrap mb-1 gap-1">
                  <h3 className="text-base sm:text-lg font-semibold">Presenter</h3>
                  <span className="text-sm sm:text-base text-gray-600">2015 - 2016</span>
                </div>
                <p className="text-sm sm:text-base text-gray-700">Hiru News</p>
              </div>
            </div>

            <div className="flex gap-3 sm:gap-4 items-start">
              <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 rounded bg-gray-100 overflow-hidden flex items-center justify-center">
                <Image
                  src="/swarnawahini.png"
                  alt="Swarnawahini"
                  width={48}
                  height={48}
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:flex-wrap mb-1 gap-1">
                  <h3 className="text-base sm:text-lg font-semibold">Swarnawahini Mas Media</h3>
                  <span className="text-sm sm:text-base text-gray-600">2011 - 2014</span>
                </div>
                <p className="text-sm sm:text-base text-gray-700">Media Production</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 border-b-2 border-gray-300 pb-2">
            Contact
          </h2>
          <p className="text-sm sm:text-base text-gray-700 break-words">
            Email:{" "}
            <a
              href="mailto:sachiniporuwadanda@gmail.com"
              className="text-blue-600 hover:underline"
            >
              sachiniporuwadanda@gmail.com
            </a>
          </p>
        </section>

        <footer className="text-center text-gray-600 text-xs sm:text-sm pt-6 sm:pt-8 border-t border-gray-200">
          <p>© {new Date().getFullYear()} Sachini Poruwadanda. All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
}
