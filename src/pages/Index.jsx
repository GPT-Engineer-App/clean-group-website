import { useState } from "react";
import { Container, VStack, Input, Button, Text, Box, FormControl, FormLabel } from "@chakra-ui/react";

const Index = () => {
  const [userId, setUserId] = useState("");
  const [userData, setUserData] = useState(null);
  const [fixedData, setFixedData] = useState({
    identicalNumber: "",
    modelName: "",
    phoneNumber: "",
  });
  const [file, setFile] = useState(null);

  const handleLogin = () => {
    // Simulate fetching user data
    const data = {
      id: userId,
      name: "John Doe",
      email: "john.doe@example.com",
      age: 30,
      status: "active",
      ...fixedData,
    };
    setUserData(data);
  };

  const handleFileUpload = (e) => {
    setFile(e.target.files[0]);
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
          <FormControl>
            <FormLabel>Identical Number</FormLabel>
            <Input
              placeholder="Enter identical number"
              value={fixedData.identicalNumber}
              onChange={(e) => setFixedData({ ...fixedData, identicalNumber: e.target.value })}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Model Name</FormLabel>
            <Input
              placeholder="Enter model name"
              value={fixedData.modelName}
              onChange={(e) => setFixedData({ ...fixedData, modelName: e.target.value })}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Phone Number</FormLabel>
            <Input
              placeholder="Enter phone number"
              value={fixedData.phoneNumber}
              onChange={(e) => setFixedData({ ...fixedData, phoneNumber: e.target.value })}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Upload File</FormLabel>
            <Input type="file" onChange={handleFileUpload} />
          </FormControl>
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
          <Text><strong>Status:</strong> {userData.status}</Text>
          <Text><strong>Identical Number:</strong> {userData.identicalNumber}</Text>
          <Text><strong>Model Name:</strong> {userData.modelName}</Text>
          <Text><strong>Phone Number:</strong> {userData.phoneNumber}</Text>
          {file && <Text><strong>Uploaded File:</strong> {file.name}</Text>}
        </Box>
      )}
    </Container>
  );
};

export default Index;