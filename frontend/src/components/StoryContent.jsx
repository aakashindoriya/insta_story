import React from 'react';
import { Flex, Image, Text } from '@chakra-ui/react';
import ProgressBar from "./ProgressBar"

const StoryContent = ({ stories, currentStory, currentImage, onNext, onPrev, progress }) => {
  return (
    <Flex
      flex={1}
      justify="center"
      align="center"
      w="full"
      position="relative"
      onClick={(e) => {
        if (e.clientX < window.innerWidth / 2) {
          onPrev();
        } else {
          onNext();
        }
      }}
    >
      {stories.length>0 ? (
        <>
        <ProgressBar progress={progress} />
          <Image
            src={stories[currentStory]?.img[currentImage]}
            maxW="90%"
            maxH="90%"
            objectFit="contain"
            borderRadius="md"
            boxShadow="lg"
          />
        </>
      ) : (
        <Text fontSize="2xl" color="white">Stories</Text>
      )}
    </Flex>
  );
};

export default StoryContent;
