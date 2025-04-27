import React from 'react';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <header className="p-6 bg-surface-light dark:bg-surface-dark">
        <h1 className="text-2xl font-bold text-primary-700 dark:text-primary-300">
          Design System
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400">
          Built with React, TypeScript, and TailwindCSS
        </p>
      </header>
      <main className="container mx-auto p-6">
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-neutral-800 dark:text-neutral-200">Color System</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-lg bg-surface-light dark:bg-surface-dark shadow">
              <h3 className="font-medium mb-2 text-neutral-800 dark:text-neutral-200">Primary Colors</h3>
              <div className="flex flex-col gap-2">
                <div className="h-8 rounded bg-primary-500"></div>
                <div className="h-8 rounded bg-primary-700"></div>
                <div className="h-8 rounded bg-primary-300"></div>
              </div>
            </div>
            <div className="p-4 rounded-lg bg-surface-light dark:bg-surface-dark shadow">
              <h3 className="font-medium mb-2 text-neutral-800 dark:text-neutral-200">Secondary Colors</h3>
              <div className="flex flex-col gap-2">
                <div className="h-8 rounded bg-secondary-500"></div>
                <div className="h-8 rounded bg-secondary-700"></div>
                <div className="h-8 rounded bg-secondary-300"></div>
              </div>
            </div>
            <div className="p-4 rounded-lg bg-surface-light dark:bg-surface-dark shadow">
              <h3 className="font-medium mb-2 text-neutral-800 dark:text-neutral-200">Tertiary Colors</h3>
              <div className="flex flex-col gap-2">
                <div className="h-8 rounded bg-tertiary-500"></div>
                <div className="h-8 rounded bg-tertiary-700"></div>
                <div className="h-8 rounded bg-tertiary-300"></div>
              </div>
            </div>
            <div className="p-4 rounded-lg bg-surface-light dark:bg-surface-dark shadow">
              <h3 className="font-medium mb-2 text-neutral-800 dark:text-neutral-200">Semantic Colors</h3>
              <div className="flex flex-col gap-2">
                <div className="h-8 rounded bg-success-500"></div>
                <div className="h-8 rounded bg-info-500"></div>
                <div className="h-8 rounded bg-warning-500"></div>
                <div className="h-8 rounded bg-error-500"></div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
