// src/components/Stories.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Flex } from '@chakra-ui/react';
import StoryHeader from './StoryHeader';
import StoryContent from './StoryContent';

const Stories = () => {
  const [stories, setStories] = useState([]);
  const [currentStory, setCurrentStory] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:5000/stories')
      .then(response => {
        setStories(response.data);
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    let interval;
    if (currentStory !== null) {
      interval = setInterval(() => {
        const currentImages = stories[currentStory].img;
        if (currentImage + 1 < currentImages.length) {
          setCurrentImage(currentImage + 1);
        } else {
          setCurrentStory((prevStory) => (prevStory + 1) % stories.length);
          setCurrentImage(0);
        }
        setProgress(0);
      }, 5000);
    }

    return () => clearInterval(interval);
  }, [currentStory, currentImage, stories]);

  useEffect(() => {
    if (currentStory !== null) {
      const progressInterval = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 100) {
            return 0;
          }
          return prevProgress + 0.5;
        });
      }, 25);
      return () => clearInterval(progressInterval);
    }
  }, [currentStory, currentImage]);

  const handleNext = () => {
    if (currentStory !== null) {
      const currentImages = stories[currentStory].img;
      if (currentImage + 1 < currentImages.length) {
        setCurrentImage(currentImage + 1);
      } else {
        setCurrentStory((prevStory) => (prevStory + 1) % stories.length);
        setCurrentImage(0);
      }
      setProgress(0);
    }
  };

  const handlePrev = () => {
    if (currentStory !== null) {
      const currentImages = stories[currentStory].img;
      if (currentImage > 0) {
        setCurrentImage(currentImage - 1);
      } else {
        setCurrentStory((prevStory) => (prevStory - 1 + stories.length) % stories.length);
        setCurrentImage(stories[currentStory].img.length - 1);
      }
      setProgress(0);
    }
  };

  const handleSelectStory = (index) => {
    setCurrentStory(index);
    setCurrentImage(0);
    setProgress(0);
  };

  return (
    <Flex direction="column" align="center" w="100vw" h="100vh" bg="gray.800" color="white">
      <StoryHeader stories={stories} currentStory={currentStory} onSelectStory={handleSelectStory} />
      <StoryContent
        stories={stories}
        currentStory={currentStory}
        currentImage={currentImage}
        onNext={handleNext}
        onPrev={handlePrev}
        progress={progress}
      />
    </Flex>
  );
};

export default Stories;
