import React from 'react';
import { motion } from 'framer-motion';
import { Problem } from '../types';
import { ChevronRight } from 'lucide-react';

interface ProblemRowProps {
  problem: Problem;
  index: number;
}

const ProblemRow: React.FC<ProblemRowProps> = ({ problem, index }) => {
  const getDifficultyColor = (difficulty: string): string => {
    switch(difficulty) {
      case 'Easy': return 'text-green-600';
      case 'Medium': return 'text-yellow-600';
      case 'Hard': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <motion.tr
      className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.3,
        delay: index * 0.05,
        ease: "easeOut"
      }}
      // whileHover={{ transition: { duration: 0.1 } }}
    >
      <td className="py-4 px-3 sm:px-6 whitespace-nowrap font-medium text-gray-700 text-center">
        {problem.id}
      </td>
      <td className="py-4 px-3 sm:px-6">
        <a href={`/problem/${problem.slug}`} className="font-medium text-blue-600 hover:text-blue-800 transition-colors">
          {problem.title}
        </a>
      </td>
      <td className="py-4 px-3 sm:px-6">
        <span className={`font-medium ${getDifficultyColor(problem.difficulty)}`}>
          {problem.difficulty}
        </span>
      </td>
      <td className="py-4 px-3 sm:px-6 hidden md:table-cell">
        <div className="flex flex-wrap gap-1">
          {problem.tags.map((tag) => (
            <span
              key={`${problem.id}-${tag}`}
              className="inline-block px-2 py-1 text-xs rounded-md bg-gray-100 text-gray-800"
            >
              {tag}
            </span>
          ))}
        </div>
      </td>
      <td className="py-4 px-3 sm:px-6 text-right">
        <a
          href={`/problem/${problem.slug}`}
          className="p-2 inline-flex items-center text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
        >
          <ChevronRight className="h-5 w-5" />
        </a>
      </td>
    </motion.tr>
  );
};

export default ProblemRow;