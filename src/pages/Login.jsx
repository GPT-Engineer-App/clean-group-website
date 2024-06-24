import { useState, useEffect } from "react";
import { Container, VStack, Input, Button, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userId, setUserId] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      navigate("/data-input");
    }
  }, [navigate]);

  const handleLogin = () => {
    const data = {
      id: userId,
      name: "John Doe",
      email: "john.doe@example.com",
      age: 30,
      status: "active",
      identicalNumber: Date.now(), // Automatically assign a unique number
    };
    localStorage.setItem("userData", JSON.stringify(data));
    navigate("/data-input");
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
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
    </Container>
  );
};

export default Login;