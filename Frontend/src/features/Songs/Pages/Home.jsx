import React from "react";
import FaceExpression from "../../Expression/components/Expression";
import useSongs from "../hooks/Songhook";
import Playlist from "../components/Playlist";
import { motion } from "framer-motion";

export const Home = () => {
  const { songs, loading, playlistType, handleSongs } = useSongs();

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.15,
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <motion.div 
      className="min-h-screen p-4 md:p-6 lg:p-8 bg-[#090909] text-gray-200"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      <div className="max-w-7xl mx-auto mb-8 pl-2">
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl font-black text-white"
        >
          Your Soundtrack <span className="text-orange-500">Live</span>
        </motion.h1>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[minmax(320px,420px)_1fr] gap-6 lg:gap-8 items-start"
      >
        
        {/* Left Column: Face Expression */}
        <motion.div 
          variants={itemVariants}
          className="w-full bg-[#151515] rounded-[1.5rem] shadow-[0_15px_40px_rgba(0,0,0,0.5)] border border-white/5 p-4 md:p-6 transition-all duration-300 hover:border-orange-500/30 hover:shadow-[0_15px_40px_rgba(234,88,12,0.1)] relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl" />
          
          <div className="relative z-10 flex items-center justify-between mb-4">
             <h2 className="text-sm font-bold uppercase tracking-wider text-orange-400">Mood Scanner</h2>
             <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></div>
          </div>
          
          <div className="relative z-10">
            <FaceExpression
              compact
              onClick={(expression) => {
                handleSongs({ mood: expression });
              }}
            />
          </div>
        </motion.div>

        {/* Right Column: Playlist */}
        <motion.div 
          variants={itemVariants}
          className="w-full bg-[#151515] rounded-[1.5rem] shadow-[0_15px_40px_rgba(0,0,0,0.5)] border border-white/5 p-4 md:p-6 min-h-[500px] transition-all duration-300 hover:border-orange-500/30 hover:shadow-[0_15px_40px_rgba(234,88,12,0.1)] relative overflow-hidden flex flex-col"
        >
          <div className="absolute top-0 left-1/2 w-64 h-32 bg-orange-500/5 rounded-full blur-3xl -translate-x-1/2" />
          
          <div className="relative z-10 flex-1">
            <div className="flex items-center justify-between mb-2">
               <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-400">Active Queue</h2>
            </div>
            <Playlist
              playlistType={playlistType}
              songs={songs}
              loading={loading}
            />
          </div>
        </motion.div>

      </motion.div>
    </motion.div>
  );
};

export default Home;