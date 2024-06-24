import { useState, useEffect } from "react";
import { Container, VStack, Input, Button, Text, Box, FormControl, FormLabel, Select } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const DataInput = () => {
  const [userData, setUserData] = useState(null);
  const [fixedData, setFixedData] = useState({
    modelName: "",
    phoneNumber: "",
  });
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const modelOptions = ["Model A", "Model B", "Model C"]; // Predefined model data

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    } else {
      navigate("/");
    }
  }, [navigate]);

  const handleLogout = () => {
    setUserData(null);
    localStorage.removeItem("userData");
    navigate("/");
  };

  const handleFileUpload = (e) => {
    setFile(e.target.files[0]);
  };

  const handleDataSubmit = () => {
    const updatedData = {
      ...userData,
      ...fixedData,
    };
    setUserData(updatedData);
    localStorage.setItem("userData", JSON.stringify(updatedData));
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      {userData ? (
        <VStack spacing={4}>
          <Text fontSize="2xl">Input Data</Text>
          <FormControl>
            <FormLabel>Model Name</FormLabel>
            <Select
              placeholder="Select model"
              value={fixedData.modelName}
              onChange={(e) => setFixedData({ ...fixedData, modelName: e.target.value })}
            >
              {modelOptions.map((model, index) => (
                <option key={index} value={model}>
                  {model}
                </option>
              ))}
            </Select>
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
          <Button onClick={handleDataSubmit} colorScheme="blue">
            Submit Data
          </Button>
          <Button onClick={handleLogout} colorScheme="red">
            Logout
          </Button>
        </VStack>
      ) : (
        <Text>Loading...</Text>
      )}
    </Container>
  );
};

export default DataInput;