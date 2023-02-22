import React from 'react'
import ReactImageMagnify from 'react-image-magnify';
import Magnifier from "react-magnifier";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, CustomCard, Box, HStack, Icon, Grid, GridItem, VStack, Text, Button, InputGroup, Input, InputRightElement, Tooltip, Tag, Badge, Image, Tabs, TabList, Tab, TabPanels, TabPanel, Heading, StackDivider, Center, SimpleGrid } from "@chakra-ui/react"
import { ChevronDownIcon, ChevronRightIcon } from "@chakra-ui/icons"
import { AiFillHeart, AiFillStar, AiOutlineStar } from "react-icons/ai";
import { CiHeart, CiLocationOn } from "react-icons/ci";
import { BsCheck } from "react-icons/bs"
import { BiInfoCircle } from "react-icons/bi"
import { SiShopify } from "react-icons/si"
import { GiReturnArrow } from "react-icons/gi"
import { TiThumbsUp } from "react-icons/ti"


const SingleProductPage = () => {
    return (
        <div>

            <Box bgColor={"#f3f3f3"} px={"100px"}>



                <Box w="full">
                    <Text w="full" py={4} fontWeight={500} color={"#888888"} fontSize={"14px"}>
                        Home <Icon as={ChevronRightIcon}></Icon> Product <Icon as={ChevronRightIcon}></Icon> singleProduct
                    </Text>
                </Box>



                <Box w="full">

                    <SimpleGrid templateColumns={"35% 65%"} spacing={0} boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px" divider={<StackDivider borderColor='gray.200' />} w="full" alignItems={"flex-start"}>

                        {/* wishlist */}
                        {/* image */}
                        <Box bgColor={"#fff"} height="full" p={4} zIndex="1">
                            <VStack w="full"  >


                                <Box w="full" textAlign={"right"}>
                                    <Icon as={true ? AiFillHeart : CiHeart} color={"#fc2779"} fontSize={"32px"}></Icon>
                                </Box>

                                {/* image.................................. */}
                                <Box height={"min-content"}>
                                    {/* <Magnifier src={"https://cdn.shopify.com/s/files/1/1338/0845/products/brain-freeze_a_800x1200.jpg?v=1502255076"} width={500} />; */}
                                    <ReactImageMagnify {...{
                                        smallImage: {
                                            alt: 'Wristwatch by Ted Baker London',
                                            isFluidWidth: true,
                                            src: "https://images.unsplash.com/photo-1618614944895-fc409a83ad80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                                        },
                                        largeImage: {
                                            src: "https://images.unsplash.com/photo-1618614944895-fc409a83ad80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
                                            width: 1200,
                                            height: 1800
                                        }
                                    }} />
                                </Box>

                            </VStack>

                        </Box>

                        {/* details */}

                        <Box >

                            <VStack w="full" textAlign={"left"} p={4} bgColor="#fff"  >


                                <Text w="full" fontSize={"20px"} color={"#01325"} fontWeight={500}>Nykaa Skin Secrets Gold Sheet Mask + Nykaa Skin Potion 24k Gold Facial Oil Golden Glow Combo</Text>
                                <Text w="full" fontSize={"16px"} color={"#01325"} fontWeight={500}>(1 pcs)</Text>


                                <VStack textAlign={"left"} alignItems="flex-start" w="full">

                                    <HStack divider={<StackDivider borderColor='gray.200' />} >
                                        <HStack spacing={"2px"}>
                                            <Icon fontSize={"14px"} color="#001325" as={3 >= 1 ? AiFillStar : AiOutlineStar}></Icon>
                                            <Icon fontSize={"14px"} color="#001325" as={3 >= 2 ? AiFillStar : AiOutlineStar}></Icon>
                                            <Icon fontSize={"14px"} color="#001325" as={3 >= 3 ? AiFillStar : AiOutlineStar}></Icon>
                                            <Icon fontSize={"14px"} color="#001325" as={3 >= 4 ? AiFillStar : AiOutlineStar}></Icon>
                                            <Icon fontSize={"14px"} color="#001325" as={3 >= 5 ? AiFillStar : AiOutlineStar}></Icon>
                                            <Text fontSize={"14px"} color="#001325"> 3.2/5</Text>
                                        </HStack>
                                        <Text fontSize={"14px"} color="#001325" fontWeight={500}>19 ratings</Text>
                                    </HStack>

                                    <HStack spacing={"5px"} divider={<StackDivider borderColor='gray.200' />}>
                                        <HStack spacing={"4px"}>
                                            <Text fontSize={"16px"} fontWeight="500" color={"rgba(0,19,37,0.64)"} >MRP:</Text>
                                            <Text fontSize={"16px"} fontWeight="500" color={"rgba(0,19,37,0.64)"} textDecoration={"line-through"}>₹ 2345</Text>
                                            <Text fontSize={"20px"} fontWeight="600" color={"#001325"} >₹999</Text></HStack>
                                        <Text fontSize={"16px"} fontWeight="500" color={"#068743"} >15% off</Text>

                                    </HStack>


                                    <Text fontSize={"16px"} color={"rgba(0,19,37,0.64)"}>
                                        inclusive of all taxes
                                    </Text>


                                    <Box w="full">
                                        <Text fontSize={"14px"} mt={6} mb={2} color="rgba(0,19,37,0.92)" bgColor={"#edeff0"} w="full" p={2} borderRadius={2}>
                                            &#x2022; Free Face Wash on Rs. 699
                                        </Text>
                                    </Box>

                                </VStack>



                                <Box w="full">

                                    <HStack w="full" divider={<StackDivider borderColor='gray.200' />} >


                                        <Box w="40%" textAlign={"center"}>
                                            <Button fontWeight={600} color={"#fff"} bgColor="#fc2779" py={4} colorScheme={"pink"} borderRadius={"2px"} w="80%">
                                                Add to Bag
                                            </Button>
                                        </Box>


                                        <VStack w="60%" alignItems={"flex-start"} >

                                            {
                                                false ? (
                                                    <VStack alignItems={"flex-start"} m="auto">
                                                        <HStack alignItems={"flex-start"}>
                                                            <Center>
                                                                <Icon fontWeight={500} color={"rgba(0, 19, 37, 0.72)"} fontSize={"16px"} as={CiLocationOn}></Icon>
                                                                <Text fontWeight={500} color={"rgba(0, 19, 37, 0.72)"} fontSize={"16px"} >Delivery Options</Text>
                                                            </Center>
                                                        </HStack>

                                                        <InputGroup size='md' colorScheme={"pink"} w="max-content" >
                                                            <Input
                                                                colorScheme={"pink"}
                                                                variant={"outline"}
                                                                borderRadius="2px"
                                                                focusBorderColor='rgba(84,84,84,0.2)'
                                                                placeholder='Enter pincode'
                                                            />
                                                            <InputRightElement width='4.5rem'>
                                                                <Button color="#fc2779" variant={"unstyled"} h='1.75rem' size='sm' >
                                                                    check
                                                                </Button>
                                                            </InputRightElement>
                                                        </InputGroup>
                                                    </VStack>
                                                ) : (

                                                    <VStack spacing={1} alignItems={"flex-start"}>

                                                        <HStack alignItems={"center"} spacing={"3px"}>
                                                            <Icon fontSize={"24px"} as={CiLocationOn}></Icon>
                                                            <Text fontSize={"14px"} color="rgba(0,19,37,0.92)" fontWeight={500}>Delivery Options for</Text>
                                                            <Text fontSize={"14px"} color="#fc2779" pr={"10px"} fontWeight={500}>111111</Text>
                                                            <Button variant={"outline"} color="#fc2779" py="14px" fontSize={"16px"} size={"xs"} colorScheme="pink" borderColor={"#fc2779"} borderRadius="3px">Change</Button>
                                                        </HStack>




                                                        <HStack alignItems={"center"} >
                                                            <Text fontSize={"14px"} color="rgba(0,19,37,.92)">Shipping to:</Text>
                                                            <Text fontSize={"14px"} color="rgba(0,19,37,.92)" fontWeight={500}>{"New Delhi, India"}</Text>
                                                        </HStack>



                                                        <HStack alignItems={"center"} >
                                                            <Icon fontSize={"28px"} color={"#58ce78"} as={BsCheck} />
                                                            <Text fontSize={"14px"} color="rgba(0,19,37,.92)">Delivered by 26th Feb</Text>
                                                        </HStack>


                                                        <HStack alignItems={"center"} >
                                                            <Icon fontSize={"28px"} color={"#58ce78"} as={BsCheck} />
                                                            <Text fontSize={"14px"} color="rgba(0,19,37,.92)">Cash on Delivery available on orders above ₹499</Text>
                                                        </HStack>



                                                        <HStack alignItems={"center"} pl={1}>
                                                            <Icon fontSize={"20px"} color="rgba(0,19,37,0.64)" as={BiInfoCircle}></Icon>
                                                            <Text fontSize={"14px"} color="rgba(0,19,37,0.64)" >More Info</Text>
                                                        </HStack>
                                                    </VStack>

                                                )
                                            }

                                        </VStack>

                                    </HStack>

                                </Box>


                            </VStack>


                            <Box boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px" bgColor={"#f4f4f5"} w="full" p="15px">
                                <HStack w="full" justifyContent="space-around" spacing="30px">
                                    <HStack>
                                        <Icon borderRadius="full" fontWeight={500} fontSize={"24px"} color={"rgba(0,19,37,0.72)"} as={SiShopify}></Icon>
                                        <Text fontWeight={500} fontSize={"15px"} color={"rgba(0,19,37,0.72)"}>100% Genuine Products</Text>
                                    </HStack>


                                    <HStack>
                                        <Icon fontWeight={500} borderRadius="full" fontSize={"24px"} color={"rgba(0,19,37,0.72)"} as={GiReturnArrow}></Icon>
                                        <Text fontWeight={500} fontSize={"15px"} color={"rgba(0,19,37,0.72)"}>Return Policy</Text>
                                    </HStack>


                                    <HStack>
                                        <Text fontWeight={500} fontSize={"15px"} color={"rgba(0,19,37,0.72)"}>Sold by :{"NOIN INC"}</Text>
                                    </HStack>

                                </HStack>
                            </Box>


                        </Box>


                    </SimpleGrid>


                </Box>


                <Box>




                    <HStack>

                        <Box w="70%" >


                            <Box>
                                <Text py={"20px"} fontSize={"20px"} fontWeight={600} color={"#001325"}>Product Description</Text>
                                <VStack alignItems={"flex-start"} p="15px" borderRadius={"3px"} bgColor={"#fff"}>
                                    
                                    <Text color={"rgba(0, 19, 37, 0.72)"} fontSize={"16px"}>
                                        Lippie Pencil A long-wearing and high-intensity lip pencil that glides on easily and prevents feathering. Many of our Lippie Stix have a coordinating Lippie Pencil designed to compliment it perfectly, but feel free to mix and match!
                                    </Text>

                                    <HStack>
                                        <Text fontWeight={700} fontSize={"16px"} color="rgba(0,19,37,.72)">Category:</Text>
                                        <Text  color={"rgba(0, 19, 37, 0.72)"} fontSize={"16px"}>Cosmatics</Text>
                                    </HStack>

                                    <HStack>
                                        <Text fontWeight={700} fontSize={"16px"} color="rgba(0,19,37,.72)">Title:</Text>
                                        <Text  color={"rgba(0, 19, 37, 0.72)"} fontSize={"16px"}>Lippie Pencil</Text>
                                    </HStack>

                                    <HStack>
                                        <Text fontWeight={700} fontSize={"16px"} color="rgba(0,19,37,.72)">Price:</Text>
                                        <Text  color={"rgba(0, 19, 37, 0.72)"} fontSize={"16px"}>$ 345</Text>
                                    </HStack>

                                    <HStack>
                                        <Text fontWeight={700} fontSize={"16px"} color="rgba(0,19,37,.72)">Rating:</Text>
                                        <Text  color={"rgba(0, 19, 37, 0.72)"} fontSize={"16px"}>4.3</Text>
                                    </HStack>
                                    <HStack>
                                        <Text fontWeight={700} fontSize={"16px"} color="rgba(0,19,37,.72)">Brand:</Text>
                                        <Text  color={"rgba(0, 19, 37, 0.72)"} fontSize={"16px"}>sdafsdf</Text>
                                    </HStack>
                                    <HStack>
                                        <Text fontWeight={700} fontSize={"16px"} color="rgba(0,19,37,.72)">Product type:</Text>
                                        <Text  color={"rgba(0, 19, 37, 0.72)"} fontSize={"16px"}>lip liner</Text>
                                    </HStack>
                                 

                                    <HStack>
                                        <Text  fontWeight={700} fontSize={"16px"} color="rgba(0,19,37,.72)">Tags:</Text>
                                        <Badge>Cruelty free</Badge>
                                        <Badge>Vegan</Badge>
                                    </HStack>
                                </VStack>
                            </Box>





                            <Box >
                                <Text  py={"20px"} fontSize={"20px"} fontWeight={600} color={"#001325"}>
                                    Product Details
                                </Text>
                                <Tabs bgColor={"#fff"}>
                                    <TabList>
                                        <Tab>Rating & Reviews</Tab>
                                    </TabList>

                                    <TabPanels>
                                        <TabPanel>
                                            <VStack>
                                                <HStack>
                                                    <HStack>
                                                        <Heading as={"h1"} fontSize="40px">
                                                            3.7/5
                                                        </Heading>
                                                        <VStack>
                                                            <Text>Overall Rating</Text>
                                                            <Text>3 varified ratings</Text>
                                                        </VStack>
                                                    </HStack>

                                                    <VStack>
                                                        <Text>
                                                            Write a review and wind 100 reward points!
                                                        </Text>
                                                        <Button>
                                                            Write Review
                                                        </Button>
                                                    </VStack>
                                                </HStack>


                                                <HStack>

                                                    <VStack>
                                                        <Text>
                                                            Most Useful Review
                                                        </Text>
                                                        <HStack>
                                                            <Image src="https://images-static.nykaa.com/prod-review/default_profile_image.png" borderRadius={"full"} boxSize="30px"></Image>
                                                            <VStack>
                                                                <Text>Athsha Beril</Text>
                                                                <HStack>
                                                                    <Badge>
                                                                        <Icon as={BsCheck}></Icon>
                                                                    </Badge>
                                                                    <Text>Verified Buyers</Text>
                                                                </HStack>
                                                            </VStack>
                                                        </HStack>
                                                    </VStack>

                                                    <VStack>
                                                        <Badge>5 &#9733;</Badge>
                                                        <Text>"Good Products"</Text>
                                                        <Text>Very good and affordable product my kid loves it. Brushing has become more fun for her.
                                                            <HStack>
                                                                <Icon as={TiThumbsUp}></Icon>
                                                                <Text>Helpful</Text>
                                                            </HStack>
                                                        </Text>
                                                    </VStack>

                                                </HStack>
                                            </VStack>
                                        </TabPanel>
                                    </TabPanels>
                                </Tabs>


                            </Box>

                        </Box>




                        <Box w="30%" bgColor={"#fff"} position={"sticky"} top="30px">
                            <VStack>
                                <Image w="200px" src="https://cdn.shopify.com/s/files/1/1338/0845/products/brain-freeze_a_800x1200.jpg?v=1502255076"></Image>
                                <Text>
                                    Agaro Rex DLX Sonic Electric Toothbrush For
                                </Text>
                                <HStack>
                                    <Text>MRP:</Text>
                                    <Text>$970</Text>
                                    <Text>$999</Text>
                                </HStack>
                                <Text>60% Off</Text>
                                <HStack>
                                    <Icon as={3 >= 1 ? AiFillStar : AiOutlineStar}></Icon>
                                    <Icon as={3 >= 2 ? AiFillStar : AiOutlineStar}></Icon>
                                    <Icon as={3 >= 3 ? AiFillStar : AiOutlineStar}></Icon>
                                    <Icon as={3 >= 4 ? AiFillStar : AiOutlineStar}></Icon>
                                    <Icon as={3 >= 5 ? AiFillStar : AiOutlineStar}></Icon>
                                    <Text>(7)</Text>
                                </HStack>
                            </VStack>
                        </Box>



                    </HStack>


                </Box>




            </Box>

        </div>
    )
}

export default SingleProductPage