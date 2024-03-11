"use client";
import React,{useState} from 'react';
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
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  // Dummy data representing categories and products
  const categories = [
    {
      id: 1,
      name: "Blindness Products",
      products: [
        {
          id: 11,
          name: "Mantis Q40 braille display",
          imageUrl: "./productimage/blindnessproduct/mantis.jpg",
          rating: 4.5,
          description: "The Mantis Q40 is the first-ever Bluetooth® QWERTY keyboard and 40-cell refreshable braille display that you can pair with your screen reader or smartphone or simply use as a standalone device. Either way, you have braille at your fingertips, every time.",
        },
        {
          id: 12,
          name: "Brailliant BI 40X braille display",
          imageUrl: "./productimage/blindnessproduct/brailliant.jpg",
          rating: 5.0,
          description: "Uniquely powered by Bluetooth 5 wireless technology, this refreshable 40–cell braille display will double your pairing speed and quadruple your range. Plus, the Brailliant BI X series of braille displays are the first to include text-to-speech, bringing you closer to a hybrid notetaker feel.",
        },
        {
          id: 11,
          name: "Brailliant BI 20X braille display",
          imageUrl: "./productimage/blindnessproduct/brailliant_bi_20x.jpg",
          rating: 4.5,
          description: "Brailliant BI 20X is the ideal portable 20–cell refreshable braille display that you can pair with your favorite devices or use with standalone applications. The Brailliant BI X series of braille displays are the first to include text-to-speech, bringing you closer to a hybrid notetaker feel.",
        },
        {
          id: 12,
          name: "BrailleNote Touch Plus 18 – Tablet and note taker",
          imageUrl: "./productimage/blindnessproduct/braillenote_touch.jpg",
          rating: 5.0,
          description: "The 18-cell revolutionary notetaker BrailleNote Touch Plus 18 combines the simplicity of a note-taking tool with the power of a smart digital device. Supported by the Android Oreo platform, it takes your braille experience to new levels .",
        },
        {
          id: 11,
          name: "BrailleNote Touch Plus 32 – Tablet and note taker",
          imageUrl: "./productimage/blindnessproduct/braillenote_touch_18.jpg",
          rating: 4.5,
          description: "The 32-cell BrailleNote Touch Plus 32 combines the simplicity of a note-taking tool with the power of a smart digital device. Supported by the Android Oreo platform, it takes your braille experience to new level.",
        },
        {
          id: 12,
          name: "Audio Assistants devices",
          imageUrl: "./productimage/blindnessproduct/stream.jpg",
          rating: 5.0,
          description: "For those who find reading tiring, there are solutions to read text aloud. Combined with the daisy mp3 player function, our Victor Reader product line acts as both an audio player and a digital talking book reader.",
        },
        {
          id: 12,
          name: "StellarTrek",
          imageUrl: "./productimage/blindnessproduct/stellartrek-frontview.jpg",
          rating: 5.0,
          description: "The StellarTrek, as the name suggests, is an exceptional digital orientation and mobility assistant with state-of-the-art GPS technology and a user-friendly tactile interface with buttons to guide you along your chosen route using appropriate voice inputs.",
        },
        {
          id: 12,
          name: "Braille Embosser",
          imageUrl: "./productimage/blindnessproduct/embosser_.jpg",
          rating: 5.0,
          description: "Embossers translates alphanumerics into simple or complex tactile concepts like clockwork. Used in a variety of educational, professional and personal settings, it offers you a simple way to prepare tactile graphics, embossing any black lines, letters or shapes that are drawn or printed.",
        },
        {
          id: 12,
          name: "Accessories",
          imageUrl: "./productimage/blindnessproduct/etui_ferme_plus.jpg",
          rating: 5.0,
          description: "The 32-cell BrailleNote Touch Plus 32 combines the simplicity of a note-taking tool with the power of a smart digital device. Supported by the Android Oreo platform, it takes your braille experience to new level.",
        },
        {
          id: 12,
          name: "Braille Papers",
          imageUrl: "./productimage/blindnessproduct/braille_paper.jpg",
          rating: 5.0,
          description: "Braille paper is a thick stock paper used specifically with braille embossers to print reading material for the blind and visually impaired human beings.  Braille paper holds the shape of the braille dot and lasts longer – ultimately making the reading process easier and more enjoyable for a blind human beings.",
        },
        {
          id: 12,
          name: "Braille Kit",
          imageUrl: "./productimage/blindnessproduct/universal-braille.png",
          rating: 5.0,
          description: "A braille kit includes Abacus eith box, Hindi and English Alphabet Trainer, Barille Cube and 20 braillepaper, Barille Slate and Stylus, Five Letter block, Geometry kit, Tracing Wheel, Type set and User manual.",
        },
      ],
    },
    {
      id: 2,
      name: "Low Vision Products",
      products: [
        {
          id: 21,
          name: "Explorē 5 – Pocket-size video magnifier",
          imageUrl: "./productimage/lowvisionproducts/explore.jpg",
          rating: 4.2,
          description: "This portable vision aid is suitable for anyone with vision loss who is looking for an independent living product that is easy to use and provides a clear image. With its high-definition image and precise autofocus, you’ll see things up to 22 times more clearly.",
        },
        {
          id: 22,
          name: "Explorē 8 – Handheld video magnifier",
          imageUrl: "./productimage/lowvisionproducts/duo_explore_8_blue_screen.jpg",
          rating: 4.8,
          description: "The explorē 8 is a touchscreen portable magnifier that is ideal for anyone with vision loss who needs an electronic reading aid for magnifying documents. With a magnification of up to 30X, it is perfect for small tasks and reading at home or on the go.",
        },
        {
          id: 22,
          name: "Explorē 12 – Portable video magnifier",
          imageUrl: "./productimage/lowvisionproducts/explore_12_recette_-_dsc07236-lr-en.jpg",
          rating: 4.8,
          description: "the ultimate electronic portable magnifier designed specifically for individuals living with low vision or sight loss. This cutting-edge video magnifier offers unmatched HD image quality, taking your reading and viewing experience to extraordinary heights.",
        },
        {
          id: 22,
          name: "Reveal 16i – Smart desktop magnifier",
          imageUrl: "./productimage/lowvisionproducts/reveal_16_i_map_1.jpg",
          rating: 4.8,
          description: "With Reveal 16i video magnifier, you can enjoy best-in-class image quality showcased on a large 16-inch touchscreen. With up to 10x optical zoom and up to 45x digital magnification, this electronic reading aid is ideal for anyone living with vision loss or low vision.",
        },
        {
          id: 22,
          name: "Connect 12 – Smart portable HD magnifier, 10X distance viewing",
          imageUrl: "./productimage/lowvisionproducts/connect12-dsc09616-2-lr.jpg",
          rating: 4.8,
          description: "Combining the power and connectivity of mainstream technology with the efficiency and ease of use of assistive technology, Connect 12 is a unique, powerful, and portable digital magnifier. This versatile device has a range of features designed to address low vision needs, including crisp, high-definition magnification up to 24x.",
        },
        {
          id: 22,
          name: "New tablet upgrade for Connect 12",
          imageUrl: "./productimage/lowvisionproducts/connect12-tablet-5.jpg",
          rating: 4.8,
          description: "This tablet upgrade includes the following improvements",
        },
        {
          id: 22,
          name: "Low Vision Kit",
          imageUrl: "./productimage/lowvisionproducts/low-viion-kit.jpg",
          rating: 4.8,
          description: "The kit is designed for the professionals of low vision care. It contains optical devices, filters, nonoptical devices, vision stimulation materials, visual acuity charts for distance, writting head and near & Electronic Magnifiers.",
        },
       
      ],
    },
    // Add more categories and products as needed
  ];

  const sortedCategories = selectedCategory
  ? [categories.find(cat => cat.id === selectedCategory), ...categories.filter(cat => cat.id !== selectedCategory)]
  : categories;

  return (
    <div>
      <Header />
      <div className='p-3'>
        <div className='flex flex-row justify-between'>
          <div><h1 className='text-3xl font-extrabold underline'>Our Products</h1></div>
          <div>
            <select onChange={(e) => handleCategorySelect(parseInt(e.target.value))}>
              <option value="">Select Category</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>{category.name}</option>
              ))}
            </select>
          </div>
        </div>
        {sortedCategories.map((category) => (
          <div key={category.id}>
            <div className="mb-3">
              <h2 className='text-center font-bold text-xl underline'>{category.name}</h2>
            </div>
            <div className='grid md:grid-cols-4 gap-4'>
              {category.products.map((product) => (
                <Card key={product.id} className="w-full max-w-[21rem] border-[#eeecec] border-2">
                  <CardHeader floated={false} color="blue-gray">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className='h-[160px] w-full'
                    />
                    <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                  </CardHeader>
                  <CardBody>
                    <div className="mb-3 flex items-center justify-between">
                      <Typography variant="h5" color="blue-gray" className="font-medium text-center underline">
                        {product.name}
                      </Typography>
                    </div>
                    <Typography color="gray" className='text-justify'>
                      {product.description}
                    </Typography>
                  </CardBody>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Products;



// "use client";
// import React from 'react';
// import Header from "../../components/Header";
// import {
//   Card,
//   CardHeader,
//   CardBody,
//   Typography,
//   IconButton,
// } from "@material-tailwind/react";
// import Footer from '../../components/Footer'
// import TopHeader from '../../components/TopHeader';

// const Products = () => {
//   // Dummy data representing categories and products
//   const categories = [
//     {
//       id: 1,
//       name: "Blindness Products",
//       products: [
//         {
//           id: 11,
//           name: "Mantis Q40 braille display",
//           imageUrl: "./productimage/blindnessproduct/mantis.jpg",
//           rating: 4.5,
//           description: "The Mantis Q40 is the first-ever Bluetooth® QWERTY keyboard and 40-cell refreshable braille display that you can pair with your screen reader or smartphone or simply use as a standalone device. Either way, you have braille at your fingertips, every time.",
//         },
//         {
//           id: 12,
//           name: "Brailliant BI 40X braille display",
//           imageUrl: "./productimage/blindnessproduct/brailliant.jpg",
//           rating: 5.0,
//           description: "Uniquely powered by Bluetooth 5 wireless technology, this refreshable 40–cell braille display will double your pairing speed and quadruple your range. Plus, the Brailliant BI X series of braille displays are the first to include text-to-speech, bringing you closer to a hybrid notetaker feel.",
//         },
//         {
//           id: 11,
//           name: "Brailliant BI 20X braille display",
//           imageUrl: "./productimage/blindnessproduct/brailliant_bi_20x.jpg",
//           rating: 4.5,
//           description: "Brailliant BI 20X is the ideal portable 20–cell refreshable braille display that you can pair with your favorite devices or use with standalone applications. The Brailliant BI X series of braille displays are the first to include text-to-speech, bringing you closer to a hybrid notetaker feel.",
//         },
//         {
//           id: 12,
//           name: "BrailleNote Touch Plus 18 – Tablet and note taker",
//           imageUrl: "./productimage/blindnessproduct/braillenote_touch.jpg",
//           rating: 5.0,
//           description: "The 18-cell revolutionary notetaker BrailleNote Touch Plus 18 combines the simplicity of a note-taking tool with the power of a smart digital device. Supported by the Android Oreo platform, it takes your braille experience to new levels .",
//         },
//         {
//           id: 11,
//           name: "BrailleNote Touch Plus 32 – Tablet and note taker",
//           imageUrl: "./productimage/blindnessproduct/braillenote_touch_18.jpg",
//           rating: 4.5,
//           description: "The 32-cell BrailleNote Touch Plus 32 combines the simplicity of a note-taking tool with the power of a smart digital device. Supported by the Android Oreo platform, it takes your braille experience to new level.",
//         },
//         {
//           id: 12,
//           name: "Audio Assistants devices",
//           imageUrl: "./productimage/blindnessproduct/stream.jpg",
//           rating: 5.0,
//           description: "For those who find reading tiring, there are solutions to read text aloud. Combined with the daisy mp3 player function, our Victor Reader product line acts as both an audio player and a digital talking book reader.",
//         },
//         {
//           id: 12,
//           name: "StellarTrek",
//           imageUrl: "./productimage/blindnessproduct/stellartrek-frontview.jpg",
//           rating: 5.0,
//           description: "The StellarTrek, as the name suggests, is an exceptional digital orientation and mobility assistant with state-of-the-art GPS technology and a user-friendly tactile interface with buttons to guide you along your chosen route using appropriate voice inputs.",
//         },
//         {
//           id: 12,
//           name: "Braille Embosser",
//           imageUrl: "./productimage/blindnessproduct/embosser_.jpg",
//           rating: 5.0,
//           description: "Embossers translates alphanumerics into simple or complex tactile concepts like clockwork. Used in a variety of educational, professional and personal settings, it offers you a simple way to prepare tactile graphics, embossing any black lines, letters or shapes that are drawn or printed.",
//         },
//         {
//           id: 12,
//           name: "Accessories",
//           imageUrl: "./productimage/blindnessproduct/etui_ferme_plus.jpg",
//           rating: 5.0,
//           description: "The 32-cell BrailleNote Touch Plus 32 combines the simplicity of a note-taking tool with the power of a smart digital device. Supported by the Android Oreo platform, it takes your braille experience to new level.",
//         },
//         {
//           id: 12,
//           name: "Braille Papers",
//           imageUrl: "./productimage/blindnessproduct/braille_paper.jpg",
//           rating: 5.0,
//           description: "Braille paper is a thick stock paper used specifically with braille embossers to print reading material for the blind and visually impaired human beings.  Braille paper holds the shape of the braille dot and lasts longer – ultimately making the reading process easier and more enjoyable for a blind human beings.",
//         },
//         {
//           id: 12,
//           name: "Braille Kit",
//           imageUrl: "./productimage/blindnessproduct/universal-braille.png",
//           rating: 5.0,
//           description: "A braille kit includes Abacus eith box, Hindi and English Alphabet Trainer, Barille Cube and 20 braillepaper, Barille Slate and Stylus, Five Letter block, Geometry kit, Tracing Wheel, Type set and User manual.",
//         },
//       ],
//     },
//     {
//       id: 2,
//       name: "Low Vision Products",
//       products: [
//         {
//           id: 21,
//           name: "Explorē 5 – Pocket-size video magnifier",
//           imageUrl: "./productimage/lowvisionproducts/explore.jpg",
//           rating: 4.2,
//           description: "This portable vision aid is suitable for anyone with vision loss who is looking for an independent living product that is easy to use and provides a clear image. With its high-definition image and precise autofocus, you’ll see things up to 22 times more clearly.",
//         },
//         {
//           id: 22,
//           name: "Explorē 8 – Handheld video magnifier",
//           imageUrl: "./productimage/lowvisionproducts/duo_explore_8_blue_screen.jpg",
//           rating: 4.8,
//           description: "The explorē 8 is a touchscreen portable magnifier that is ideal for anyone with vision loss who needs an electronic reading aid for magnifying documents. With a magnification of up to 30X, it is perfect for small tasks and reading at home or on the go.",
//         },
//         {
//           id: 22,
//           name: "Explorē 12 – Portable video magnifier",
//           imageUrl: "./productimage/lowvisionproducts/explore_12_recette_-_dsc07236-lr-en.jpg",
//           rating: 4.8,
//           description: "the ultimate electronic portable magnifier designed specifically for individuals living with low vision or sight loss. This cutting-edge video magnifier offers unmatched HD image quality, taking your reading and viewing experience to extraordinary heights.",
//         },
//         {
//           id: 22,
//           name: "Reveal 16i – Smart desktop magnifier",
//           imageUrl: "./productimage/lowvisionproducts/reveal_16_i_map_1.jpg",
//           rating: 4.8,
//           description: "With Reveal 16i video magnifier, you can enjoy best-in-class image quality showcased on a large 16-inch touchscreen. With up to 10x optical zoom and up to 45x digital magnification, this electronic reading aid is ideal for anyone living with vision loss or low vision.",
//         },
//         {
//           id: 22,
//           name: "Connect 12 – Smart portable HD magnifier, 10X distance viewing",
//           imageUrl: "./productimage/lowvisionproducts/connect12-dsc09616-2-lr.jpg",
//           rating: 4.8,
//           description: "Combining the power and connectivity of mainstream technology with the efficiency and ease of use of assistive technology, Connect 12 is a unique, powerful, and portable digital magnifier. This versatile device has a range of features designed to address low vision needs, including crisp, high-definition magnification up to 24x.",
//         },
//         {
//           id: 22,
//           name: "New tablet upgrade for Connect 12",
//           imageUrl: "./productimage/lowvisionproducts/connect12-tablet-5.jpg",
//           rating: 4.8,
//           description: "This tablet upgrade includes the following improvements",
//         },
//         {
//           id: 22,
//           name: "Low Vision Kit",
//           imageUrl: "./productimage/lowvisionproducts/low-viion-kit.jpg",
//           rating: 4.8,
//           description: "The kit is designed for the professionals of low vision care. It contains optical devices, filters, nonoptical devices, vision stimulation materials, visual acuity charts for distance, writting head and near & Electronic Magnifiers.",
//         },
       
//       ],
//     },
//     // Add more categories and products as needed
//   ];

//   return (
//     <div>
      
//       <Header />

//       <div className='p-3 '>
//         <div className='flex flex-row justify-between'>
//           <div><h1 className='text-3xl font-extrabold  underline'>Our Products</h1></div>
//          <div>Filter</div>
//         </div>

//         {categories.map((category) => (
//           <div key={category.id}>
//             <div className="mb-3">
//               <h2 className='text-center font-bold text-xl underline '>{category.name}</h2>
//             </div>
//             <div className='grid md:grid-cols-4 gap-4'>
//               {category.products.map((product) => (
//                 <Card key={product.id} className="w-full max-w-[21rem] border-[#eeecec] border-2">
//                   <CardHeader floated={false} color="blue-gray">
//                     <img
//                       src={product.imageUrl}
//                       alt={product.name}
//                       className='h-[160px] w-full'
//                     />
//                     <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                 
//                   </CardHeader>
//                   <CardBody>
//                     <div className="mb-3 flex items-center justify-between">
//                       <Typography variant="h5" color="blue-gray" className="font-medium text-center underline">
//                         {product.name}
//                       </Typography>
                   
//                     </div>
//                     <Typography color="gray" className='text-justify'>
//                       {product.description}
//                     </Typography>
//                   </CardBody>
//                 </Card>
//               ))}
//             </div>
//           </div>
//         ))}

        
//       </div>
//       <div>
//       <Footer/>
//       </div>
//     </div>
//   );
// };

// export default Products;
