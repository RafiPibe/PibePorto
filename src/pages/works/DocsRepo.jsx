import React from 'react';
import { Link } from 'react-router-dom';
import docsRepoImg from '../../assets/DocsRepo.svg';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const DocsRepo = () => {
  const [headerRef, headerVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [snapshotRef, snapshotVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [detailsRef, detailsVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <article className="min-h-screen bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 pt-28 pb-20">
        <Link
          to="/#work"
          className="inline-flex items-center text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors duration-300 mb-12"
        >
          ← Back to Works
        </Link>

        <header
          ref={headerRef}
          className={`grid gap-10 md:grid-cols-2 md:items-center mb-16 fade-in-section ${headerVisible ? 'is-visible' : ''}`}
        >
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Document Repository
            </h1>
            <p className="text-lg leading-relaxed">
              A centralized, searchable repository designed to keep cross-team documentation organised, discoverable, and secure.
            </p>
            <a
              href="https://github.com/RafiPibe"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              Visit
            </a>
          </div>
          <div className="rounded-2xl overflow-hidden border border-gray-800/60 bg-gray-800/40">
            <img
              src={docsRepoImg}
              alt="Document Repository dashboard preview"
              className="w-full h-full object-cover"
            />
          </div>
        </header>

        <section
          ref={snapshotRef}
          className={`grid gap-12 md:grid-cols-[1fr_1.5fr] mb-16 fade-in-section ${snapshotVisible ? 'is-visible' : ''}`}
        >
          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Project Snapshot
            </h2>
            <ul className="space-y-2 text-sm uppercase tracking-wide text-gray-400">
              <li>
                <span className="text-gray-500">Timeline:</span> 8 Weeks
              </li>
              <li>
                <span className="text-gray-500">Role:</span> UI/UX Designer
              </li>
              <li>
                <span className="text-gray-500">Platforms:</span> Desktop Web App
              </li>
            </ul>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Challenge
              </h3>
              <p>
                Distributed teams struggled to locate the latest documentation across multiple tools. We needed a single source of truth that kept documents up to date and permissions aligned with project needs without needing to search on scrambled places.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Outcome
              </h3>
              <p>
                Delivering a smart repository with easy access, kanban board, and role-based requests shortened search time and made knowledge handoff painless. Focusing on Board director and Employee for v1.0.
              </p>
            </div>
          </div>
        </section>

        <section
          ref={detailsRef}
          className={`grid gap-12 md:grid-cols-2 fade-in-section ${detailsVisible ? 'is-visible' : ''}`}
        >
          <div className="space-y-5">
            <h3 className="text-xl font-semibold text-white">
              Responsibilities
            </h3>
            <ul className="space-y-3 list-disc list-inside">
              <li>Designed the barebones of v1.0 of the platform.</li>
              <li>Created the UX of Master, Board Director, Editor, and Viewer (staff).</li>
              <li>Delivered 1.0 with the required features for repository.</li>
            </ul>
          </div>

          <div className="space-y-5">
            <h3 className="text-xl font-semibold text-white">
              Highlights
            </h3>
            <ul className="space-y-3 list-disc list-inside">
              <li>Designed project update using kanban based on role and projects</li>
              <li>Delivered the feature of Issue tracking for streamline workflows.</li>
            </ul>
          </div>
        </section>
      </div>
    </article>
  );
};

export default DocsRepo;
