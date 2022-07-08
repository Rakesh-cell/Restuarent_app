import React from "react";
import { Box, Heading, AspectRatio, Image, Text, Center, HStack, Stack, NativeBaseProvider ,View} from "native-base";

const Card = ({item}) => {
console.log('item', item.images[0].url)
var img=`${item.images[0].url}`
    return <View style={{margin:5}}>
    <Box justifyContent="center" maxH="xl" >
        <Box  rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
            borderColor: "coolGray.600",
            backgroundColor: "gray.700"
        }} _web={{
            shadow: 2,
            borderWidth: 0
        }} _light={{
            backgroundColor: "gray.50"
        }}>
            <Box>
                <AspectRatio w="100%" ratio={16/ 9}>
                    <Image source={{
                        uri:img
                    }} alt="image" />
                    {/* <Image source={{
                        uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
                    }} alt="image" /> */}
                    
                </AspectRatio>

                <Center bg="violet.500" _dark={{
                    bg: "violet.400"
                }} _text={{
                    color: "warmGray.50",
                    fontWeight: "700",
                    fontSize: "xs"
                }} position="absolute" bottom="0" px="3" py="1.5">
                    PHOTO
                </Center>
            </Box>
            <Stack p="3"  space={2}>
                <Stack space={1}>
                    <Heading size="md" ml="-1">
                        {item.title}
                    </Heading>
                    <Text fontSize="xs" _light={{
                        color: "violet.500"
                    }} _dark={{
                        color: "violet.400"
                    }} fontWeight="500" ml="-0.5" mt="-1">
                        {item.address}
                    </Text>
                </Stack>
                <Text noOfLines={2} fontWeight="400">
                    {/* Bengaluru (also called Bangalore) is the center of India's high-tech
                    industry. The city is also known for its parks and nightlife. */}{item.description}
                </Text>
                <HStack alignItems="center" space={2} justifyContent="space-between">
                    <HStack alignItems="center">
                        <Text color="coolGray.600" _dark={{
                            color: "warmGray.200"
                        }} fontWeight="400">
                            Reviews({item.total_review})
                        </Text>
                        
                    </HStack>
                    <HStack alignItems="center">
                        <Text color="coolGray.600" _dark={{
                            color: "warmGray.200"
                        }} fontWeight="400">
                            Rating({item.rating})
                        </Text>
                        
                    </HStack>
                </HStack>
            </Stack>
        </Box>
    </Box>
    </View>
};
export default Card;
