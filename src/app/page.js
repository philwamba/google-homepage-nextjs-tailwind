import { Search, Mic, Camera, Grid, ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex justify-end items-center p-4 text-sm">
        <nav className="flex items-center space-x-4">
          <a href="#" className="hover:underline">
            Gmail
          </a>
          <a href="#" className="hover:underline">
            Images
          </a>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Grid className="w-5 h-5 text-gray-600" />
          </button>
          <button className="w-8 h-8 rounded-full overflow-hidden">
            <Image
              src="/avatar.png"
              alt="Phil Wamba"
              width={32}
              height={32}
              className="w-full h-full object-cover"
            />
          </button>
        </nav>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-[272px] mb-8">
          <Image
            src="/googlelogo_color_272x92dp.png"
            alt="Google"
            width={272}
            height={92}
            className="w-full h-auto"
          />
        </div>
        <div className="w-full max-w-[584px] mb-8">
          <div className="relative">
            <input
              type="text"
              className="w-full py-3 px-12 border border-gray-200 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center space-x-3">
              <button className="focus:outline-none">
                <Mic className="w-5 h-5 text-blue-500" />
              </button>
              <button className="focus:outline-none">
                <Camera className="w-5 h-5 text-blue-500" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-gray-100 text-sm text-gray-800 rounded hover:border hover:border-gray-300 focus:outline-none">
            Google Search
          </button>
          <button className="px-4 py-2 bg-gray-100 text-sm text-gray-800 rounded hover:border hover:border-gray-300 focus:outline-none">
            I&apos;m Feeling Lucky
          </button>
        </div>
        <div className="mt-8 text-sm">
          <span className="text-gray-600">Google offered in:</span>{" "}
          <a href="#" className="text-blue-700 hover:underline">
            Kiswahili
          </a>
        </div>
      </main>

      <footer className="bg-gray-100 text-sm text-gray-600">
        <div className="px-8 py-3 border-b border-gray-300">Kenya</div>
        <div className="px-8 py-3 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-wrap justify-center md:justify-start space-x-6 mb-3 md:mb-0">
            <a href="#" className="hover:underline">
              About
            </a>
            <a href="#" className="hover:underline">
              Advertising
            </a>
            <a href="#" className="hover:underline">
              Business
            </a>
            <a href="#" className="hover:underline">
              How Search works
            </a>
          </div>
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:underline flex items-center">
              <span className="mr-2">
                Our third decade of climate action: join us
              </span>
              <ChevronDown className="w-4 h-4" />
            </a>
          </div>
          <div className="flex space-x-6 mt-3 md:mt-0">
            <a href="#" className="hover:underline">
              Privacy
            </a>
            <a href="#" className="hover:underline">
              Terms
            </a>
            <a href="#" className="hover:underline">
              Settings
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
