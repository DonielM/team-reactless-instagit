import React, { useState, useEffect } from "react";
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

function UserCard() {
  const userURL = "https://api.github.com/users/";
  const reposURL = "https://api.github.com/users/";
  const [userData, setUserData] = useState({});
  const [reposData, setReposData] = useState({});
  const token = "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";
  const [usernames] = useState(["FilipPaskalev", "vickyw0102", "Doniel","irtiza-S","Aysegulozen"]);

  useEffect(() => {
    const fetchData = async (username) => {
      try {
        const response = await fetch(userURL + username, {
          headers: {
            Authorization: `token ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const userData = await response.json();
        setUserData((prevData) => ({
          ...prevData,
          [username]: userData,
        }));
    
        const reposResponse = await fetch(reposURL + username + "/repos", {
          headers: {
            Authorization: `token ${token}`,
          },
        });
        if (!reposResponse.ok) {
          throw new Error(`HTTP error! status: ${reposResponse.status}`);
        }
        const reposData = await reposResponse.json();
        setReposData((prevData) => ({
          ...prevData,
          [username]: reposData,
        }));
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    usernames.forEach((username) => fetchData(username));
  }, [usernames]);

  return (
    <>
      <div className="usercards-container">
        {usernames.map((username) => (
          <div key={username} className="usercard">
            <Box maxW="400px" bg="" white p="6" mt="6">
              <Image
                src={userData[username]?.avatar_url}
                alt="A place holder image for the user profile"
                borderRadius="xl"
                objectFit="cover"
                mx="auto"
              />
              <HStack mt="5" spacing="3">
                <Tag variant="outline">Repos {reposData[username]?.length}</Tag>
                <Tag variant="outline">
                  Following {userData[username]?.following}
                </Tag>
                <Tag variant="outline">
                  Followers {userData[username]?.followers}
                </Tag>
              </HStack>
              <Heading my="4" size="lg">
                {userData[username]?.name}
              </Heading>
              <Text>{userData[username]?.bio}</Text>
              <Center my="6" />
              {/* You can add additional functionality here */}
              <Button colorScheme="blue">More info</Button>
              <Box />
            </Box>
          </div>
        ))}
      </div>
    </>
  );
}

export default UserCard;
