import React from 'react';
import { Link } from 'react-router-dom';
import kenanganImg from '../../assets/Kenangan.svg';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const Kenangan = () => {
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
              Kenangan.com
            </h1>
            <p className="text-lg leading-relaxed">
              A first-of-its-kind gift registry experience in Indonesia crafted to
              make meaningful celebrations effortless for families and friends.
            </p>
            <a
              href="https://kenangan.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              Visit
            </a>
          </div>
          <div className="rounded-2xl overflow-hidden border border-gray-800/60 bg-gray-800/40">
            <img
              src={kenanganImg}
              alt="Kenangan.com hero screen"
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
                <span className="text-gray-500">Timeline:</span> 12 Weeks
              </li>
              <li>
                <span className="text-gray-500">Role:</span> UI/UX Designer
              </li>
              <li>
                <span className="text-gray-500">Platforms:</span> Mobile
              </li>
            </ul>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Challenge
              </h3>
              <p>
                Kenangan.com have a slight problem in the UX of their platform. We're trying to change that to make a better and easier flows for the users, focusing on the gifting and moments aspect of the platform.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Outcome
              </h3>
              <p>
                New and revamped "Make it easy" flow for the users.
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
              <li>Contributed in the revamp of the app "Make it easy"</li>
              <li>Created low-to-high fidelity wireframes and flows.</li>
              <li>Collaborated with other UI/UX Designers to iterate on gifting and shopping flows.</li>
            </ul>
          </div>

          <div className="space-y-5">
            <h3 className="text-xl font-semibold text-white">
              Highlights
            </h3>
            <ul className="space-y-3 list-disc list-inside">
              <li>Better UX for users in general</li>
              <li>Focusing in the gifting aspect of the app</li>
              <li>Gifting flow and UX</li>
            </ul>
          </div>
        </section>
      </div>
    </article>
  );
};

export default Kenangan;
