import React from 'react';
import { Search } from 'lucide-react';
import { motion } from 'framer-motion';

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="w-full mb-6">
      <motion.div 
        className="relative"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500 text-sm md:text-base"
          placeholder="Search problems by title..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </motion.div>
    </div>
  );
};

export default SearchBar;