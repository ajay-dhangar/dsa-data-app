import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3 } from 'lucide-react';
import { Difficulty } from '../types';

interface DifficultyFilterProps {
  selectedDifficulty: Difficulty;
  setSelectedDifficulty: (difficulty: Difficulty) => void;
}

const DifficultyFilter: React.FC<DifficultyFilterProps> = ({ 
  selectedDifficulty, 
  setSelectedDifficulty 
}) => {
  const difficulties: Difficulty[] = ['All', 'Easy', 'Medium', 'Hard'];
  
  const getDifficultyColor = (difficulty: Difficulty): string => {
    switch(difficulty) {
      case 'Easy': return 'bg-green-100 text-green-700 border-green-300';
      case 'Medium': return 'bg-yellow-100 text-yellow-700 border-yellow-300';
      case 'Hard': return 'bg-red-100 text-red-700 border-red-300';
      default: return 'bg-gray-100 text-gray-700 border-gray-300';
    }
  };

  return (
    <div className="mb-6">
      <div className="flex items-center mb-3">
        <BarChart3 className="h-5 w-5 text-gray-700 mr-2" />
        <h3 className="text-lg font-semibold text-gray-800">Filter by Difficulty</h3>
      </div>
      <motion.div 
        className="flex flex-wrap gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
      >
        {difficulties.map((difficulty) => (
          <motion.button
            key={difficulty}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 border ${
              selectedDifficulty === difficulty
                ? getDifficultyColor(difficulty) + ' shadow-sm'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border-gray-200'
            }`}
            onClick={() => setSelectedDifficulty(difficulty)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {difficulty}
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
};

export default DifficultyFilter;