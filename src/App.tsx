import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import TagFilter from './components/TagFilter';
import DifficultyFilter from './components/DifficultyFilter';
import ProblemsTable from './components/ProblemsTable';
import { problems, getAllTags } from './data/problems';
import { Difficulty } from './types';

function App() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty>('All');
  
  const allTags = useMemo(() => getAllTags(), []);
  
  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag) 
        : [...prev, tag]
    );
  };
  
  const filteredProblems = useMemo(() => {
    return problems.filter(problem => {
      // Filter by search query
      const matchesSearch = problem.title.toLowerCase().includes(searchQuery.toLowerCase());
      
      // Filter by selected tags
      const matchesTags = selectedTags.length === 0 || 
        selectedTags.every(tag => problem.tags.includes(tag));
      
      // Filter by difficulty
      const matchesDifficulty = selectedDifficulty === 'All' || 
        problem.difficulty === selectedDifficulty;
      
      return matchesSearch && matchesTags && matchesDifficulty;
    });
  }, [searchQuery, selectedTags, selectedDifficulty]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="bg-white rounded-xl shadow-sm p-6 mb-8"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <DifficultyFilter
                selectedDifficulty={selectedDifficulty}
                setSelectedDifficulty={setSelectedDifficulty}
              />
              <TagFilter 
                allTags={allTags} 
                selectedTags={selectedTags} 
                toggleTag={toggleTag} 
              />
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-white rounded-xl shadow-sm overflow-hidden"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold text-gray-800">
                  Problems 
                  <span className="ml-2 text-sm font-medium text-gray-500">
                    ({filteredProblems.length} of {problems.length})
                  </span>
                </h2>
                <div className="flex space-x-2">
                  <select className="border border-gray-300 rounded-md text-sm py-1.5 px-3 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer">
                    <option>Sort by ID</option>
                    <option>Sort by Title</option>
                    <option>Sort by Difficulty</option>
                  </select>
                </div>
              </div>
            </div>
            <ProblemsTable problems={filteredProblems} />
          </motion.div>
          
          <motion.div 
            className="mt-8 bg-blue-50 border border-blue-100 rounded-lg p-6 text-blue-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <h3 className="font-medium mb-2">Future Features</h3>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Problem submission and evaluation</li>
              <li>User progress tracking with localStorage</li>
              <li>Bookmarks for favorite problems</li>
              <li>Dark mode support</li>
            </ul>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}

export default App;