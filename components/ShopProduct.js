import React from "react";
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import Link from "next/link";

const ShopProduct =()=> {
  const list = [
    {
      title: "AUDIO ASSISTANTS",
      img: "./product1.jpg",
      
    },
    {
      title: "EMBOSSERS",
      img: "./product2.jpg",
    
    },
    {
      title: "MAGNIFIER",
      img: "./product4 (1).png",
      
    },
    {
      title: "BRAILLE EQUIPMENTS",
      img: "./product4 (2).png",
     
    },

  
  ];

  return (
   <div>
     <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
      {list.map((item, index) => (
        <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")} className="md:w-[250px]">
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className="w-full object-cover h-[140px] md:h-[160px] "
              src={item.img}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b className="flex justify-center">{item.title}</b>
            
          </CardFooter>
        </Card>
      ))}

      
    </div>
    <div className="flex justify-center mt-4">
      <Button color="primary" variant="shadow" size="lg">
       <Link href="/products"> View More</Link>
      </Button> 
      </div>
   </div>
  );
}


export default ShopProduct