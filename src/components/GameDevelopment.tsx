'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function GameDevelopment() {
  return (
    <section id="game-dev" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Game Development</h2>

        {/* FAB Store */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-center">FAB Store Plugins</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <motion.a
              href="https://www.fab.com/listings/b8d6cb0f-ad1f-4b77-b652-5de3c7bd16cf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-800 p-0 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Image 
                src="/images/2dTemplate.jpg" 
                alt="2D Platformer Template for Unreal Engine" 
                width={800} 
                height={450} 
                className="w-full mb-4 rounded-t-lg"
                priority 
              />
              <h4 className="text-xl font-semibold mb-4 px-6">2D Platformer template</h4>
              <p className="text-gray-600 dark:text-gray-300 px-6 pb-6">Elevate Your Game Development with a Comprehensive 2D Platformer Template for Unreal Engine</p>
            </motion.a>

            <motion.a
              href="https://www.fab.com/listings/2d380b91-3a6c-4f70-ae9c-dc6d88e2772d"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Image 
                src="/images/minimap.jpg" 
                alt="Minimap System for Unreal Engine" 
                width={800} 
                height={450} 
                className="w-full mb-4 rounded-t-lg" 
              />
              <h4 className="text-xl font-semibold mb-4 px-6">Minimap system</h4>
              <p className="text-gray-600 dark:text-gray-300 px-6 pb-6">Seamless Integration: Works flawlessly with your existing Unreal Engine workflow.</p>
            </motion.a>
            <motion.a
                href="https://www.fab.com/listings/06161426-776d-45bb-b939-a9f1910e0996"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
            >
              <Image 
                src="/images/dialogue.jpg" 
                alt="Dialogue Widget System for Unreal Engine" 
                width={800} 
                height={450} 
                className="w-full mb-4 rounded-t-lg" 
              />
              <h4 className="text-xl font-semibold mb-4 px-6">Dialogue Widget</h4>
              <p className="text-gray-600 dark:text-gray-300 px-6 pb-6">Unreal Dialogue System - Cinematic Conversations & Branching Narratives</p>
            </motion.a>
            <motion.a
                href="https://www.fab.com/listings/76c87cde-6269-4b3e-9da8-f7433ed0f36c"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
            >
              <Image 
                src="/images/save-game.jpg" 
                alt="Simple Save Game System for Unreal Engine" 
                width={800} 
                height={450} 
                className="w-full mb-4 rounded-t-lg" 
              />
              <h4 className="text-xl font-semibold mb-4 px-6">Simple Save Game</h4>
              <p className="text-gray-600 dark:text-gray-300 px-6 pb-6">With a few simple clicks, you can set up a system to save and load player progress, game states, and other important data.</p>
            </motion.a>
          </div>
        </div>

        {/* Udemy Course */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-6">Udemy Course</h3>
          <motion.a
            href="https://www.udemy.com/course/make-a-2d-platformer-in-unreal-engine-5-c"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <h4 className="text-xl font-semibold mb-4">2D Platformer in Unreal Engine 5</h4>
            <p className="text-gray-600 dark:text-gray-300">Learn how to create an exciting 2D platformer game using Unreal Engine 5</p>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
