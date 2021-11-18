import styles from '../styles/Login.module.css'
import {
    Box,
    Input,
    Center,
    Heading,
    Text,
    Menu,
    MenuButton,
    Image,
    Button,
    Stack,
    Divider,
    Link
} from '@chakra-ui/react'

export default function Signin() {

    return (
        <div className={styles.login}>
            <Menu>
                <div className={styles.menu}>
                    <Image src="/cryptocom-white.svg" alt="Crypto.com" />

                    <div className={styles.group}>
                        <MenuButton className={styles.menuButton}>Prices</MenuButton>
                        <MenuButton className={styles.menuButton}>Log In</MenuButton>
                        <MenuButton className={styles.menuRegister}>
                            <Button bg="#32A7FB" color="white" size="sm">Sign Up</Button>
                        </MenuButton>
                    </div>
                </div>
            </Menu>

            <Center>
                <Heading size="md" color="white" p={10}>
                    <h2>Log in to crypto.com Verification</h2>
                </Heading>
            </Center>
            <Box w="auto" maxW="440px" minH="447px" h="auto" m="auto" p={5} bg="white" borderRadius={5}>

                <Text fontSize="md" align="center" color="#979797" m={3}>Already a Crypto.com App user?</Text>
                <Button colorScheme="facebook" width="100%" leftIcon={<Image src="/logo-white.svg"></Image>}> Continue as Crypto.com App User</Button>

                <Stack direction="row" h="40%" p={4} mt={3}>
                    <Divider orientation="horizontal" variant="solid" /> 
                    <Text>Or</Text>
                    <Divider orientation="horizontal" variant="solid" />
                </Stack>
                <Box m="auto"  >

                    <Text mt={2} mb={2} fontSize="sm"> Email </Text>
                    <Input placeholder="Email" size="lg"></Input>
                    <Text mt={4} mb={2} fontSize="sm"> Password </Text>
                    <Input placeholder="Password" size="lg"></Input>
                    <Button bg="blue.300" color="#FFFFFF" width="100%" size="lg" mt={7}>Log In</Button>

                    <Link fontSize="sm" color="blue.300" decoration="none" p={3} mt={5} mb>Forget Password?</Link>

                </Box>
            </Box>
            <Text p={10} color="#FFF" align="center">Don’t have an account? <Link color="blue.500">Sign Up Now</Link></Text>
        </div>
    )
}