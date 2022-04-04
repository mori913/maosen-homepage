import { Box,Link } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Ye Maosen. Theme is inspired by <Link color={"blue"} href={"https://twitter.com/craftzdog?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"}>Craftzdog</Link> . All Rights Reserved.
    </Box>
  )
}

export default Footer
