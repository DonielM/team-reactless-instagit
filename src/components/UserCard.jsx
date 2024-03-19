import {
  Box,
  Image,
  HStack,
  Tag,
  Heading,
  Text,
  Center,
  Button,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";

function UserCard() {
  const userURL = "https://api.github.com/users/";
  const reposURL = "https://api.github.com/users/";
  const [userData, setUserData] = useState(null);
  const [reposData, setReposData] = useState([]);
  const [userName, setUserName] = useState("FilipPaskalev");
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    fetchData(userName);
    fetchRepos(userName);
  }, [userName]);

  const fetchData = async (user) => {
    try {
      const response = await fetch(userURL + user);
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error("Error fetching user data: ", error);
    }
  };

  const fetchRepos = async (user) => {
    try {
      const response = await fetch(reposURL + user + "/repos");
      const data = await response.json();
      setReposData(data);
    } catch (error) {
      console.error("Error fetching repositories data: ", error);
    }
  };

  const handleSearch = () => {
    if (inputValue.trim() !== "") {
      setUserName(inputValue.trim());
    }
  };

  return (
    <>
      {userData && reposData && (
        <Box maxw="sm" bg="black.100" h="100vh" width="100vh">
          <Box maxW="420px" bg="" white p="6">
            <Image
              src={userData.avatar_url}
              alt="A place holder image for the user profile"
              borderRadius="xl"
              objectFit="cover"
              mx="auto"
            />
            <HStack mt="5" spacing="3">
              <Tag variant="outline">Repos {reposData.length}</Tag>
              <Tag variant="outline">Following {userData.following}</Tag>
              <Tag variant="outline">Followers {userData.followers}</Tag>
            </HStack>
            <Heading my="4" size="lg">
              {userData.name}
            </Heading>
            <Text>{userData.bio}</Text>
            <Center my="6" />
            <Button colorScheme="blue" onClick={handleSearch}>
              More info
            </Button>
            <Box />
          </Box>
        </Box>
      )}
    </>
  );
}

export default UserCard;
