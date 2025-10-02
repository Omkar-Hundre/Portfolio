"use client";
import React, { useState, useEffect } from "react";
import CREATIVE_PROJECTS from "../data/Creative";
import BlurFade from "./magicui/blur-fade";

const CreativeCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Slideshow state for gallery type
  const [galleryIndex, setGalleryIndex] = useState(0);

  useEffect(() => {
    if (project.media.type === "gallery" && project.media.images.length > 1) {
      const interval = setInterval(() => {
        setGalleryIndex((prev) => (prev + 1) % project.media.images.length);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [project.media]);

  const getTypeColor = (type) => {
    switch (type) {
      case "Film Production": return "bg-red-100 text-red-700 border-red-200";
      case "Graphic Design": return "bg-blue-100 text-blue-700 border-blue-200";
      case "Visual Effects": return "bg-purple-100 text-purple-700 border-purple-200";
      default: return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  const renderMedia = () => {
    if (project.media.type === "video") {
      return (
        <a
          href={project.media.videoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group block"
        >
          <img
            src={project.media.thumbnail}
            alt={project.title}
            className="w-full h-48 object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-white bg-opacity-90 rounded-full p-3">
              <svg className="w-8 h-8 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
          <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
            {project.media.duration}
          </div>
        </a>
      );
    } else if (project.media.type === "gallery") {
      return (
        <div className="relative min-h-48 h-48"> {/* Add min-h-48 or h-48 here */}
          {project.media.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={project.title}
              className={`w-full h-48 object-cover rounded-lg absolute inset-0 transition-opacity duration-700 ${galleryIndex === idx ? "opacity-100" : "opacity-0"}`}
              style={{ zIndex: galleryIndex === idx ? 2 : 1 }}
            />
          ))}
          <div className="absolute top-2 right-2 bg-white bg-opacity-90 text-gray-800 text-xs px-2 py-1 rounded">
            {project.media.images.length} images
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div 
      className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-gray-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Media Section */}
      {renderMedia()}
      
      {/* Content Section */}
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 text-lg mb-1">
              {project.title}
            </h3>
            <p className="text-sm text-gray-600 mb-2">
              {project.role} • {project.year}
            </p>
          </div>
          <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getTypeColor(project.type)}`}>
            {project.type}
          </span>
        </div>
        
        <p className="text-sm text-gray-700 mb-3 leading-relaxed">
          {project.description}
        </p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-1 mb-3">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Highlights */}
        <div className="space-y-1">
          {project.highlights.slice(0, 2).map((highlight, index) => (
            <div key={index} className="flex items-center text-xs text-gray-600">
              <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span>
              {highlight}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const Creative = () => {
  return (
    <BlurFade>
      <div className="w-full my-10">
        <div className="mb-6">
          <h2 className="font-calistoga text-gray-900 text-2xl mb-2">
            When I'm Not Coding... 🎬
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed max-w-3xl">
            Beyond the world of code, I explore my creative side through film, design, and storytelling. 
            These projects help me think differently and bring unique perspectives to my technical work.
          </p>
        </div>
        
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CREATIVE_PROJECTS.map((project) => (
            <CreativeCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      
      </div>
    </BlurFade>
  );
};
