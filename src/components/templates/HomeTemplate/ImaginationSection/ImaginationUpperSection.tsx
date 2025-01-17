import {Box, Heading, Image, Text, VStack} from '@chakra-ui/react'
import {Field} from '@snek-at/jaen'
import {FC} from 'react'

interface IImaginationUpperSectionProps {}

const ImaginationUpperSection: FC<IImaginationUpperSectionProps> = () => {
  return (
    <VStack id="testo">
      <Heading
        mb={{base: '48', md: '0'}}
        textAlign="center"
        fontSize={{base: 'md', md: 'xl', lg: '2xl'}}>
        <Field.Text
          name="imaginationHeading"
          label="Heading"
          defaultValue="Was man mit Ballons alles machen kann...<br/>Mit ein wenig Phatansie...?"
        />
      </Heading>
      <Box
        pos="relative"
        pt={{base: '8', md: '12'}}
        px={{base: 4, md: '6', lg: '8'}}>
        <Text
          lineHeight={{base: '3.75rem', lg: '6.25rem'}}
          variant="cursive"
          fontSize={{base: '4xl', md: '6xl', lg: '8xl'}}
          as="span">
          <Field.Text
            name="imaginationText"
            label="Text"
            defaultValue="Alles"
          />
        </Text>
        <Image
          pos="absolute"
          bottom="0"
          src="/images/home/imagination/underline.svg"
          alt="underline"
        />
      </Box>
    </VStack>
  )
}
export default ImaginationUpperSection
