import { Container } from '@chakra-ui/react'

export default function chaker(){
    
return(
<VStack>
  <Container maxW='md' bg='blue.600' color='white'>
    "md" Container
  </Container>
  <Container maxW='550px' bg='purple.600' color='white'>
    "550px" Container
  </Container>
  <Container maxW='container.sm' bg='green.400' color='#262626'>
    "container.sm" Container
  </Container>
</VStack>
);
}