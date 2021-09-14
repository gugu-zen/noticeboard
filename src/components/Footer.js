import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';

export default function Footer(){
    return <Footer>
        <Box
         px={{xs: 3, sm: 10}} 
         py={{xs: 5, sm: 10}} 
         bgcolor="text.secondary"
         color="white">
            <Container maxWidth={240}>
                <Grid container spacing={5}>
                    <Grid items xs={12} sm={4}>
                        <Box borderBottom={1}>Help</Box> 
                        <Box>
                             <Link href="/" color="inherit">
                                 Contact
                             </Link>
                        </Box>
                        <Box>
                             <Link href="/" color="inherit">
                             Support
                             </Link>
                        </Box>
                        <Box>
                             <Link href="/" color="inherit">
                                Privacy policy
                             </Link>
                        </Box>
                        
                    </Grid>

                    <Grid items xs={12} sm={4}>
                        <Box borderBottom={1}>About developers</Box> 
                        <Box>
                             <Link href="/" color="inherit">
                                 jimmy
                             </Link>
                        </Box>
                        <Box>
                             <Link href="/" color="inherit">
                             elvis
                             </Link>
                        </Box>
                        <Box>
                             <Link href="/" color="inherit">
                              edna
                             </Link>
                             
                        </Box>
                        <Box>
                             <Link href="/" color="inherit">
                             weston
                             </Link>
                             
                        </Box>
                        
                    </Grid>
                    <Grid items xs={12} sm={4}>
                        <Box borderBottom={1}>Help</Box> 
                        <Box>
                             <Link href="/" color="inherit">
                                 Contact
                             </Link>
                        </Box>
                        <Box>
                             <Link href="/" color="inherit">
                             Support
                             </Link>
                        </Box>
                        <Box>
                             <Link href="/" color="inherit">
                                Privacy policy
                             </Link>
                        </Box>
                        
                    </Grid>

                </Grid>
   <Box textAlign="center" pt={{xs: 5, sm: 10}} pb={{sx: 5, sm: 0}}>
       Unima Online Board &reg; {new Date().getFullYear()}
   </Box>
            </Container>
        </Box>
    </Footer>
}