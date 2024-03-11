import React from 'react'

const About = () => {
  return (
    <div>
        <div className='md:flex md:flex-row p-2 '>
            <div className='md:w-[70%]'><img src='./blind.jpg' className='md:w-[99%]'/></div>
            <div className='md:w-[50%] md:m-auto '>
            <h1 className='text-3xl font-bold underline mb-3 text-center'>HOW IT ALL STARTED</h1>
            <h2 className='text-justify text-lg '> From the spark of an idea to help vision loss or visual impairment peoples living with high risk in daily lifestyle. Then a journey started of helping specially abled human beings from supplying good products which helps them to intract the world in a new way.</h2>
            </div>
        </div>


      <div className='md:flex md:flex-row md:justify-between gap-4 p-2'>
      <div className='p-3 border border-black'>
       <div >
        <h1 className='text-3xl font-bold underline text-center mb-2'>OUR STORY</h1>
        <h2 className='text-justify text-lg '>Every great journey begins with a story. Ours is no different. Established in 2016, we embarked on a mission to provide high-quality products at reasonable prices. What started as a humble beginning has since grown better from every tomorrow, thanks to the hard work, dedication, and unwavering support of our team and community.</h2>
        </div>
       </div>

         <div className='p-3 border border-black'>
         <div >
        <h1 className='text-3xl font-bold underline text-center mb-2'>OUR APPROACH</h1>
        <h2 className="text-justify text-lg m">Our vision is to stand as the foremost provider of strategic solutions, consistently delivering exceptional and personalized products thoes would help specially abled human beings. Whether you’re starting a new venture, or poised for expansion, our commitment is to collaborate and propel together towards our goals.</h2> </div>
         </div>
      </div>
    </div>
  )
}

export default About