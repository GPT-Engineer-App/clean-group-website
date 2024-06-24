import { Container, VStack, Input, Button, Text, FormControl, FormLabel, Select } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DataInput = () => {
  const [userData, setUserData] = useState(null);
  const [fixedData, setFixedData] = useState({
    modelName: "",
    phoneNumber: "",
  });
  const [file, setFile] = useState(null);
  const [contractStatus, setContractStatus] = useState("");
  const [contractPeriod, setContractPeriod] = useState("");
  const navigate = useNavigate();

  const modelOptions = ["Model A", "Model B", "Model C"]; // Predefined model data
  const contractStatusOptions = ["Active", "Pending", "Terminated"];
  const contractPeriodOptions = ["3 years", "4 years", "5 years", "6 years"];

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
      contractStatus,
      contractPeriod,
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
            <FormLabel>Contract Status</FormLabel>
            <Select
              placeholder="Select contract status"
              value={contractStatus}
              onChange={(e) => setContractStatus(e.target.value)}
            >
              {contractStatusOptions.map((status, index) => (
                <option key={index} value={status}>
                  {status}
                </option>
              ))}
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>Contract Period</FormLabel>
            <Select
              placeholder="Select contract period"
              value={contractPeriod}
              onChange={(e) => setContractPeriod(e.target.value)}
            >
              {contractPeriodOptions.map((period, index) => (
                <option key={index} value={period}>
                  {period}
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