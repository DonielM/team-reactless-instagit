// Hooks
import { useEffect, useState } from "react";

// Icons
import { FaGithub, FaLinkedin } from "react-icons/fa";

// Components
import GitHubCard from "../gitHubCard/GitHubCard";
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
  const gitHubUrl = `https://github.com/`;

  const [userData, setUserData] = useState(usersData);

  const usersNames = userData.map((user) => user.login);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const promises = usersNames.map((username) =>
          fetch(`${gitHubUrl}users/${username}`).then((response) =>
            response.json()
          )
        );

        const userDataFromAPI = await Promise.all(promises);
        setUserData(userDataFromAPI);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [gitHubUrl, usersNames]);

  const renderUserCard = (
    login,
    avatarUrl,
    reposAmount,
    followersAmount,
    followingAmount,
    bio
  ) => {
    const url = `$${gitHubUrl}${login}`;
    const reposUrl = `${url}?tab=repositories`;
    const followingUrl = `${url}?tab=following`;
    const followersUrl = `${url}?tab=followers`;
    const linkedinUrl = `https://www.linkedin.com/in/${login}`;

    return (
      <div key={login} className="usercard">
        <Box
          maxW="400px"
          bg="gray.100"
          // white
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
            <Tag
              variant="outline"
              onClick={() => window.open(reposUrl)}
              style={{ cursor: "pointer" }}
            >
              Repos {reposAmount}
            </Tag>
            <Tag
              variant="outline"
              onClick={() => window.open(followingUrl)}
              style={{ cursor: "pointer" }}
            >
              Following {followingAmount}
            </Tag>
            <Tag
              variant="outline"
              onClick={() => window.open(followersUrl)}
              style={{ cursor: "pointer" }}
            >
              Followers {followersAmount}
            </Tag>
          </HStack>
          <Heading my="4" size="lg">
            {login}
          </Heading>
          <Text>{bio}</Text>
          <Center my="6">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                border: "1px solid gray",
                borderRadius: "4px",
                padding: "4px",
                display: "inline-flex",
                alignItems: "center",
                marginRight: "10px",
              }}
            >
              <IconButton
                aria-label="GitHub"
                icon={<FaGithub />}
                colorScheme="gray"
                variant="outline"
                mr="2"
              />
              <span style={{ marginLeft: "5px" }}>GitHub</span>
            </a>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                border: "1px solid gray",
                borderRadius: "4px",
                padding: "4px",
                display: "inline-flex",
                alignItems: "center",
              }}
            >
              <IconButton
                aria-label="LinkedIn"
                icon={<FaLinkedin />}
                colorScheme="gray"
                variant="outline"
              />
              <span style={{ marginLeft: "5px" }}>LinkedIn</span>
            </a>
          </Center>
          <GitHubCard
            userName={login}
            style={{ width: "100%", height: "auto" }}
          />
        </Box>
      </div>
    );
  };

  return (
    <>
      <div className="usercards-container">
        {userData.map((user) =>
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
