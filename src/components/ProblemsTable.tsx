import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Problem } from '../types';
import ProblemRow from './ProblemRow';
import Pagination from './Pagination';

interface ProblemsTableProps {
  problems: Problem[];
}

const ITEMS_PER_PAGE = 10;

const ProblemsTable: React.FC<ProblemsTableProps> = ({ problems }) => {
  const [currentPage, setCurrentPage] = React.useState(1);
  
  const totalPages = Math.ceil(problems.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const visibleProblems = problems.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
        <motion.table
          className="min-w-full divide-y divide-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="py-3.5 px-3 sm:px-6 text-center text-sm font-semibold text-gray-700 uppercase tracking-wider w-16">
                ID
              </th>
              <th scope="col" className="py-3.5 px-3 sm:px-6 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                Title
              </th>
              <th scope="col" className="py-3.5 px-3 sm:px-6 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider w-24">
                Level
              </th>
              <th scope="col" className="py-3.5 px-3 sm:px-6 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider hidden md:table-cell">
                Tags
              </th>
              <th scope="col" className="py-3.5 px-3 sm:px-6 text-right text-sm font-semibold text-gray-700 uppercase tracking-wider w-16">
                Solve
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <AnimatePresence mode="wait">
              {visibleProblems.length > 0 ? (
                visibleProblems.map((problem, index) => (
                  <ProblemRow 
                    key={problem.id} 
                    problem={problem} 
                    index={index} 
                  />
                ))
              ) : (
                <motion.tr
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <td colSpan={5} className="py-8 px-6 text-center text-gray-500 text-lg">
                    No problems found matching your filters.
                  </td>
                </motion.tr>
              )}
            </AnimatePresence>
          </tbody>
        </motion.table>
      </div>
      
      {problems.length > ITEMS_PER_PAGE && (
        <div className="mt-4">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </div>
  );
};

export default ProblemsTable;