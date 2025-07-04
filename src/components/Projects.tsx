'use client';

import { useEffect } from 'react';
import { Octokit } from '@octokit/rest';

export function Projects() {

  useEffect(() => {
    const fetchRepos = async () => {
      const octokit = new Octokit();
      const response = await octokit.repos.listForUser({
        username: 's4r14k',
        sort: 'updated',
        per_page: 6
      });
      if (!response) {
        return;
      }
    };
    fetchRepos();
  }, []);

  return (
      <section id="projects" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Latest Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          </div>
        </div>
      </section>
  );
}