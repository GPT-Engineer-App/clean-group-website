import { useState } from "react";
import { Container, VStack, Input, Button, Text, Box } from "@chakra-ui/react";

const Index = () => {
  const [userId, setUserId] = useState("");
  const [userData, setUserData] = useState(null);

  const handleLogin = () => {
    // Simulate fetching user data
    const data = {
      id: userId,
      name: "John Doe",
      email: "john.doe@example.com",
      age: 30,
    };
    setUserData(data);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      {!userData ? (
        <VStack spacing={4}>
          <Text fontSize="2xl">Login</Text>
          <Input
            placeholder="Enter your ID"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
          <Button onClick={handleLogin} colorScheme="blue">
            Login
          </Button>
        </VStack>
      ) : (
        <Box p={4} borderWidth={1} borderRadius="md" boxShadow="md">
          <Text fontSize="2xl" mb={4}>User Data</Text>
          <Text><strong>ID:</strong> {userData.id}</Text>
          <Text><strong>Name:</strong> {userData.name}</Text>
          <Text><strong>Email:</strong> {userData.email}</Text>
          <Text><strong>Age:</strong> {userData.age}</Text>
        </Box>
      )}
    </Container>
  );
};

export default Index;