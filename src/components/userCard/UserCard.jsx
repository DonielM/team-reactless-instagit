// Hooks

// Icons
import { FaGithub, FaLinkedin } from "react-icons/fa";

// Components
import {
  Box,
  Image,
  HStack,
  Tag,
  Heading,
  Text,
  Center,
  IconButton,
} from "@chakra-ui/react";

// Data
import usersData from "../../data/users.json";

const UserCard = () => {
  const renderUserCard = (
    login,
    avatarUrl,
    reposAmount,
    followersAmount,
    followingAmount,
    bio
  ) => {
    const githubUrl = `https://github.com/${login}`;
    const linkedinUrl = `https://www.linkedin.com/in/${login}`;

    return (
      <div key={login} className="usercard">
        <Box
          maxW="400px"
          bg="gray.100" // Change background color to gray
          white
          p="6"
          mt="6"
          borderWidth="1px"
          borderRadius="lg"
          shadow="md" // Add shadow
        >
          <Image
            src={avatarUrl}
            alt="A place holder image for the user profile"
            borderRadius="xl"
            objectFit="cover"
            mx="auto"
          />
          <HStack mt="5" spacing="3">
            <Tag variant="outline">Repos {reposAmount}</Tag>
            <Tag variant="outline">Following {followingAmount}</Tag>
            <Tag variant="outline">Followers {followersAmount}</Tag>
          </HStack>
          <Heading my="4" size="lg">
            {login}
          </Heading>
          <Text>{bio}</Text>
          <Center my="6">
            {/* GitHub button */}
            <IconButton
              as="a"
              href={githubUrl}
              target="_blank"
              aria-label="GitHub"
              icon={<FaGithub />}
              colorScheme="gray"
              variant="outline"
              mr="2"
            />
            {/* LinkedIn button */}
            <IconButton
              as="a"
              href={linkedinUrl}
              target="_blank"
              aria-label="LinkedIn"
              icon={<FaLinkedin />}
              colorScheme="gray"
              variant="outline"
            />
          </Center>
        </Box>
      </div>
    );
  };

  return (
    <>
      <div className="usercards-container">
        {usersData.map((user) =>
          renderUserCard(
            user.login,
            user.avatar_url,
            user.public_repos,
            user.followers,
            user.following,
            user.bio
          )
        )}
      </div>
    </>
  );
};

export default UserCard;
