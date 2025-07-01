import React from 'react';
import { motion } from 'framer-motion';
import { Tag } from 'lucide-react';

interface TagFilterProps {
  allTags: string[];
  selectedTags: string[];
  toggleTag: (tag: string) => void;
}

const TagFilter: React.FC<TagFilterProps> = ({ allTags, selectedTags, toggleTag }) => {
  return (
    <div className="mb-6">
      <div className="flex items-center mb-3">
        <Tag className="h-5 w-5 text-gray-700 mr-2" />
        <h3 className="text-lg font-semibold text-gray-800">Filter by Tags</h3>
      </div>
      <motion.div 
        className="flex flex-wrap gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.05, delayChildren: 0.1 }}
      >
        {allTags.map((tag) => (
          <motion.button
            key={tag}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
              selectedTags.includes(tag)
                ? 'bg-blue-100 text-blue-700 border-blue-300 shadow-sm'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border-gray-200'
            } border`}
            onClick={() => toggleTag(tag)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {tag}
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
};

export default TagFilter;