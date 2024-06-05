import { Container, Text, VStack, Heading, Box, Image, Link } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to My Personal Blog</Heading>
        <Text fontSize="lg" textAlign="center">
          Hi there! I'm [Your Name], a passionate writer and blogger. Here you'll find my thoughts on various topics, from technology to lifestyle.
        </Text>
        <Box boxSize="sm">
          <Image src="/path/to/your/profile-picture.jpg" alt="Profile Picture" borderRadius="full" boxSize="150px" />
        </Box>
        <Text fontSize="md" textAlign="center">
          Stay tuned for my latest posts and feel free to connect with me on <Link href="https://twitter.com/yourprofile" color="teal.500">Twitter</Link> and <Link href="https://linkedin.com/in/yourprofile" color="teal.500">LinkedIn</Link>.
        </Text>
      </VStack>
    </Container>
  );
};

export default Index;