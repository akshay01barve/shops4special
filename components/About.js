import React from 'react'

const About = () => {
  return (
    <div>
        <div className='md:flex md:flex-row p-2 '>
            <div className='md:w-[70%]'><img src='./blind.jpg' className='md:w-[99%]'/></div>
            <div className='md:w-[50%] md:m-auto '>
            <h1 className='text-3xl font-bold underline mb-3 text-center'>HOW IT ALL STARTED</h1>
            <h2 className='text-justify text-lg '>The journey began with a spark of empathy and a recognition of the high risks and obstacles that individuals with visual impairments encounter in their everyday lives. Motivated by a desire to make a meaningful difference, Shop4Specials embarked on a mission to help these specially abled individuals by supplying them with high-quality products that would revolutionize the way they interact with the world around them.

With each step forward, the focus remained on offering not just products, but pathways to empowerment and inclusion. This commitment to serving the needs of the visually impaired community became the driving force behind every decision and action taken by Shop4Specials.</h2>
            </div>
        </div>


      <div className='md:flex md:flex-row md:justify-between gap-4 p-2'>
      <div className='p-3 border border-black'>
       <div >
        <h1 className='text-3xl font-bold underline text-center mb-2'>OUR STORY</h1>
        <h2 className='text-justify text-lg '>Every great journey begins with a story, and ours is a testament to perseverance, dedication, and the power of community. Founded in 2016, Shop4Specials set out on a mission to make a meaningful difference in the lives of individuals living with vision loss or visual impairment. With a commitment to offering high-quality products at reasonable prices, our journey began humbly but with a clear vision for the future.

From those early days, we have experienced steady growth and evolution, continually striving to improve and expand our offerings to better serve our customers. This progress wouldn't have been possible without the hard work, dedication, and unwavering support of our passionate team and the wider community.

As we reflect on our journey, we are proud of how far we have come and inspired by the opportunities that lie ahead. With each day, we renew our commitment to empowering individuals to live independently and participate fully in today's world. Together, we are shaping a future where accessibility knows no bounds, and everyone has the tools they need to thrive. Join us as we continue to write the next chapter of the Shop4Specials story—one filled with innovation, inclusivity, and endless possibilities.</h2>
        </div>
       </div>

         <div className='p-3 border border-black'>
         <div >
        <h1 className='text-3xl font-bold underline text-center mb-2'>OUR APPROACH</h1>
        <h2 className="text-justify text-lg m">At Shop4Specials, our vision is clear: to emerge as the leading provider of strategic solutions, offering exceptional and personalized products designed to empower individuals with disabilities. We envision a future where every person, regardless of their abilities, has access to the tools and resources they need to live life to the fullest.

Our commitment is unwavering—we strive to collaborate closely with our customers, understanding their unique needs and challenges, and working together to overcome them. Whether you're embarking on a new journey or seeking to expand your horizons, we are dedicated to propelling you towards your goals.

In this vision, inclusivity is paramount. We believe in creating a world where everyone has the opportunity to thrive, where barriers are broken down, and where accessibility is not just a goal but a reality. Together, we can pave the way for a more equitable and empowered future. Join us as we turn this vision into a tangible reality, one innovative solution at a time.</h2> </div>
         </div>
      </div>
    </div>
  )
}

export default About