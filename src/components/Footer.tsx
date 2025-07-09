'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-6 bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="">© {currentYear} s4r14k. All rights reserved.</span>
          </div>
          <div className="flex space-x-4">
            <a href="https://github.com/s4r14k" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/sariak-rafanomezantsoa-81a9a4134/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400">
              LinkedIn
            </a>
            <a href="/privacy-policy" className="hover:text-blue-600 dark:hover:text-blue-400">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
