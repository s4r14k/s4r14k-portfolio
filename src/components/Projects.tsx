'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Octokit } from '@octokit/rest';

interface Repository {
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  language: string;
}

export default function Projects() {
  const [repos, setRepos] = useState<Repository[]>([]);

  useEffect(() => {
    const fetchRepos = async () => {
      const octokit = new Octokit();
      const response = await octokit.repos.listForUser({
        username: 's4r14k',
        sort: 'updated',
        per_page: 6
      });
      setRepos(response.data);
    };
    fetchRepos();
  }, []);

  return (
    <section id="projects" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Latest Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo) => (
            <motion.a
              key={repo.name}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <h3 className="text-xl font-semibold mb-2">{repo.name}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {repo.description || 'No description available'}
              </p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-blue-600 dark:text-blue-400">{repo.language}</span>
                <span>⭐ {repo.stargazers_count}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}