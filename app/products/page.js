"use client";
import React from 'react';
import Header from "../../components/Header";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import Footer from '../../components/Footer'
import TopHeader from '../../components/TopHeader';

const Products = () => {
  // Dummy data representing categories and products
  const categories = [
    {
      id: 1,
      name: "Category 1",
      products: [
        {
          id: 11,
          name: "Product 1",
          imageUrl: "https://th.bing.com/th/id/OIP.xbVW1SktYU-7tLg55xKtygHaFj?pid=ImgDet&w=167&h=125&c=7&dpr=2.86",
          rating: 4.5,
          description: "Description 1",
        },
        {
          id: 12,
          name: "Product 2",
          imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRljA99tBrWB0pBPfyZPgehK0Ji9UuhY6s-EegvTb50g3q9fN_I5Z0r2MfP8JNGoYb1Es&usqp=CAU",
          rating: 5.0,
          description: "Description 2",
        },
        {
          id: 11,
          name: "Product 1",
          imageUrl: "https://th.bing.com/th/id/OIP.xbVW1SktYU-7tLg55xKtygHaFj?pid=ImgDet&w=167&h=125&c=7&dpr=2.86",
          rating: 4.5,
          description: "Description 1",
        },
        {
          id: 12,
          name: "Product 2",
          imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRljA99tBrWB0pBPfyZPgehK0Ji9UuhY6s-EegvTb50g3q9fN_I5Z0r2MfP8JNGoYb1Es&usqp=CAU",
          rating: 5.0,
          description: "Description 2",
        },
        {
          id: 11,
          name: "Product 1",
          imageUrl: "https://th.bing.com/th/id/OIP.xbVW1SktYU-7tLg55xKtygHaFj?pid=ImgDet&w=167&h=125&c=7&dpr=2.86",
          rating: 4.5,
          description: "Description 1",
        },
        {
          id: 12,
          name: "Product 2",
          imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRljA99tBrWB0pBPfyZPgehK0Ji9UuhY6s-EegvTb50g3q9fN_I5Z0r2MfP8JNGoYb1Es&usqp=CAU",
          rating: 5.0,
          description: "Description 2",
        },
      ],
    },
    {
      id: 2,
      name: "Category 2",
      products: [
        {
          id: 21,
          name: "Product 3",
          imageUrl: "https://assets.architecturaldigest.in/photos/60083a9d3a9d9570bc841dc5/4:3/w_1024,h_768,c_limit/handicapped-furniture-featured-image-1366x768.jpg",
          rating: 4.2,
          description: "Description 3",
        },
        {
          id: 22,
          name: "Product 4",
          imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGqGjWD-sKLIFHdHf5eOaOqSdQYGKWIn8Mu1KbZ-dxZR69XD8L5rsczJT8peRUh1qRCH4&usqp=CAU",
          rating: 4.8,
          description: "Description 4",
        },
        {
          id: 22,
          name: "Product 4",
          imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGqGjWD-sKLIFHdHf5eOaOqSdQYGKWIn8Mu1KbZ-dxZR69XD8L5rsczJT8peRUh1qRCH4&usqp=CAU",
          rating: 4.8,
          description: "Description 4",
        },
        {
          id: 22,
          name: "Product 4",
          imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGqGjWD-sKLIFHdHf5eOaOqSdQYGKWIn8Mu1KbZ-dxZR69XD8L5rsczJT8peRUh1qRCH4&usqp=CAU",
          rating: 4.8,
          description: "Description 4",
        },
        {
          id: 22,
          name: "Product 4",
          imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGqGjWD-sKLIFHdHf5eOaOqSdQYGKWIn8Mu1KbZ-dxZR69XD8L5rsczJT8peRUh1qRCH4&usqp=CAU",
          rating: 4.8,
          description: "Description 4",
        },
        {
          id: 22,
          name: "Product 4",
          imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGqGjWD-sKLIFHdHf5eOaOqSdQYGKWIn8Mu1KbZ-dxZR69XD8L5rsczJT8peRUh1qRCH4&usqp=CAU",
          rating: 4.8,
          description: "Description 4",
        },
        {
          id: 22,
          name: "Product 4",
          imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGqGjWD-sKLIFHdHf5eOaOqSdQYGKWIn8Mu1KbZ-dxZR69XD8L5rsczJT8peRUh1qRCH4&usqp=CAU",
          rating: 4.8,
          description: "Description 4",
        },
        {
          id: 22,
          name: "Product 4",
          imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGqGjWD-sKLIFHdHf5eOaOqSdQYGKWIn8Mu1KbZ-dxZR69XD8L5rsczJT8peRUh1qRCH4&usqp=CAU",
          rating: 4.8,
          description: "Description 4",
        },
      ],
    },
    // Add more categories and products as needed
  ];

  return (
    <div>
      <TopHeader/>
      <Header />

      <div className='p-3 bg-[#5ce0d8]'>
        <div>
          <h1 className='text-3xl font-extrabold text-[#fefefe] underline'>Our Products</h1>
        </div>

        {categories.map((category) => (
          <div key={category.id}>
            <div className="mb-3">
              <h2 className='text-center font-bold text-xl underline '>{category.name}</h2>
            </div>
            <div className='grid md:grid-cols-5 gap-4'>
              {category.products.map((product) => (
                <Card key={product.id} className="w-full max-w-[15rem] border-[#eeecec] border-2">
                  <CardHeader floated={false} color="blue-gray">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                    />
                    <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                    <IconButton
                      size="sm"
                      color="red"
                      variant="text"
                      className="!absolute top-4 right-4 rounded-full"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-6 w-6"
                      >
                        <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                      </svg>
                    </IconButton>
                  </CardHeader>
                  <CardBody>
                    <div className="mb-3 flex items-center justify-between">
                      <Typography variant="h5" color="blue-gray" className="font-medium">
                        {product.name}
                      </Typography>
                      <Typography
                        color="blue-gray"
                        className="flex items-center gap-1.5 font-normal"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="-mt-0.5 h-5 w-5 text-yellow-700"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {product.rating}
                      </Typography>
                    </div>
                    <Typography color="gray">
                      {product.description}
                    </Typography>
                  </CardBody>
                </Card>
              ))}
            </div>
          </div>
        ))}

        
      </div>
      <div>
      <Footer/>
      </div>
    </div>
  );
};

export default Products;
