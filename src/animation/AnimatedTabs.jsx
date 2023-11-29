import { motion } from "framer-motion";
import { useState } from "react";
export default function AnimatedTabs() {
  const tabs = [
    { id: "world", label: "World" },
    { id: "ny", label: "N.Y" },
    { id: "business", label: "Business" },
    { id: "arts", label: "Arts" },
    { id: "science", label: "Science" },
  ];
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-800">
      <div className="flex gap-16 rounded-full bg-gray-800 text-white ">
        {tabs.map((tab) => {
          return (
            
            <button
              className="relative px-5 py-1"
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
            >
              <span className="relative z-30 text-2xl mix-blend-exclusion">
                {tab.label}
              </span>
              {activeTab == tab.id && (
                <motion.div
                  layoutId="active-pill"
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-white"
                  style={{ borderRadius: "999px" }}
                ></motion.div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
