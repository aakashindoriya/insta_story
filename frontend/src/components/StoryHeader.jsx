import React from 'react';
import { HStack, Avatar } from '@chakra-ui/react';

const StoryHeader = ({ stories, currentStory, onSelectStory }) => {
  return (
    <HStack spacing={4} overflowX="scroll" w="full" p={4} bg="gray.900">
      {stories.map((story, index) => (
        <Avatar
          key={index}
          name={story.user}
          size="lg"
          cursor="pointer"
          border={index === currentStory ? "2px solid white" : "2px solid transparent"}
          onClick={() => onSelectStory(index)}
        />
      ))}
    </HStack>
  );
};

export default StoryHeader;
