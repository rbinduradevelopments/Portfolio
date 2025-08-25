export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-gray-300 p-8">
      {/* Intro Section */}
      <h1 className="text-5xl font-extrabold text-gray-900 mb-4 text-center">
        Hi, my name is Redeemed Bindura 
      </h1>

     <p className="text-lg text-gray-700 max-w-2xl text-center mb-6">
  Welcome to my Website Portfolio. I am interested and invested in building 
  diverse projects including{" "}
  <span className="font-semibold">
    Websites, Games, Software applications, Business ventures, Digital products, and Creative brands
  </span>.  
  I’m passionate about exploring different ways to bring ideas to life — from tech 
  solutions and startups to creative media and future innovations like{" "}
  <span className="font-semibold">AI projects. Web Apps, SaaS Tools and Mobile apps</span>.  
  This portfolio reflects not only what I’ve built so far, but also the ambitions 
  I’m working toward for the future.
</p>


     {/* Background Story */}
<section className="bg-white shadow-lg rounded-2xl p-6 max-w-2xl mb-6">
  <h2 className="text-2xl font-bold text-gray-800 mb-2">My Story</h2>
  <p className="text-gray-600 leading-relaxed">
    Looking back, I’ve always wanted to make a difference in the world through 
    creativity, innovation, and determination. I was born and raised in Zimbabwe, 
    where I spent most of my childhood before moving to the United Kingdom in my 
    late teens. One of the defining moments in my journey came at the age of 14, 
    when my father bought me my first laptop. I was fascinated by technology — how 
    software, phones, and computers worked — and that curiosity soon grew into a 
    real passion. It led me to pursue Computer Science at GCSE and A Level, where 
    I achieved strong results and discovered my aspiration to become a software 
    engineer.
  </p>
  <p className="text-gray-600 leading-relaxed mt-4">
    Growing up, I was also influenced by the vibrant fashion culture around me. 
    Fashion gave me a way to self-express, and I even started my own clothing brand 
    in Zimbabwe, making a few sales before pausing when I relocated. Today, I’m 
    working on reviving that brand with a renewed purpose — not just as a business, 
    but as something meaningful and impactful.
  </p>
  <p className="text-gray-600 leading-relaxed mt-4">
    Alongside tech and fashion, I’ve always had an entrepreneurial spirit. From a 
    young age, I enjoyed planning, visualizing, and turning ideas into reality. 
    This became clear when I studied Business and Enterprise Skills at GCSE — even 
    with just six months of preparation, I earned a solid grade, reinforcing my 
    belief that entrepreneurship is part of who I am.
  </p>
  <p className="text-gray-600 leading-relaxed mt-4">
    I also pursued my creative side through media. At A Level, I completed a Pearson 
    BTEC Level 3 in Creative Digital Media Production, graduating with distinction. 
    Through this, I explored projects such as digital game development, media 
    representation, and production design. My first ever 2D platformer game was 
    built during this time, sparking my love for game development and digital 
    creativity.
  </p>
  <p className="text-gray-600 leading-relaxed mt-4">
    Over the years, I’ve invested in developing a wide range of skills — in tech, 
    business, fashion, and media — all with one mission in mind: to create projects 
    that are innovative, impactful, and make life better in some way. Now, at 20, 
    I feel I have a lot to show, which is why I built this portfolio — to share my 
    journey, showcase my projects, and connect with people who share the same drive 
    for growth and change.
  </p>
</section>

{/* Ambitions */}
<section className="bg-white shadow-lg rounded-2xl p-6 max-w-2xl mb-6">
  <h2 className="text-2xl font-bold text-gray-800 mb-2">My Ambitions</h2>
  <p className="text-gray-600 leading-relaxed">
    My ambition is simple but powerful: to turn my ideas into reality. I want to 
    continue building across different fields — from software and game development 
    to business ventures, media, and fashion. I aspire to create solutions that not 
    only showcase my skills but also have a positive impact on the world. 
  </p>
  <p className="text-gray-600 leading-relaxed mt-4">
    In the future, I aim to expand into AI projects, mobile apps, and startups that 
    address real-world problems. At the same time, I want to grow as an entrepreneur, 
    develop meaningful brands, and collaborate with others to make bold ideas happen. 
    This portfolio is just the beginning of that journey — a place where I can share 
    my progress, my ambitions, and the vision I’m working towards.
  </p>
</section>

{/* Button to Projects */}
<a
  href="/projects"
  className="px-6 py-3 bg-blue-600 text-white rounded-2xl shadow hover:bg-blue-700 transition"
>
  Explore My Projects 🚀
</a>

    </main>
  );
}
