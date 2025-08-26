"use client";
import Image from "next/image";

export default function GameProject() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white p-6">
     {/* Header */}
<section className="max-w-4xl mx-auto text-center mb-12">
  <h1 className="text-4xl font-extrabold mb-4">🎮 My First 2D Platformer Game</h1>
  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
    This project was created as part of my <span className="font-semibold">Creative Digital Media Production A-Level</span>, 
    where I explored the exciting process of designing and building digital experiences. 
    Developed in <span className="font-semibold">Construct 3</span>, this 2D platformer was my very first step into 
    the world of game development. 
  </p>
  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
    The game features classic mechanics like jumping, obstacles, and collectible items, 
    but what made it special was the creative process behind it: from developing 
    characters and level designs to experimenting with gameplay flow and player engagement. 
    It was a hands-on way to combine both my <span className="font-semibold">technical curiosity</span> 
    and my <span className="font-semibold">creative storytelling</span>.
  </p>
  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
    This project represents more than just a game — it’s a milestone that showed me 
    how much I enjoy building interactive experiences. It also opened the door to 
    pursuing future projects in <span className="font-semibold">games, media, and software development</span>. 
    Looking back, I see this as the foundation that shaped my ambitions to keep creating, 
    innovating, and pushing myself into bigger projects.
  </p>
</section>


      {/* Screenshots */}
<section className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 mb-12">
  <div className="rounded-xl overflow-hidden shadow-lg">
    <Image 
      src="/game-preview/screen1.png" 
      alt="Game Screenshot 1" 
      width={600} 
      height={400} 
      className="object-cover w-full h-full" 
    />
  </div>
  <div className="rounded-xl overflow-hidden shadow-lg">
    <Image 
      src="/game-preview/screen2.png" 
      alt="Game Screenshot 2" 
      width={600} 
      height={400} 
      className="object-cover w-full h-full" 
    />
  </div>
  <div className="rounded-xl overflow-hidden shadow-lg">
    <Image 
      src="/game-preview/screen3.png" 
      alt="Game Screenshot 3" 
      width={600} 
      height={400} 
      className="object-cover w-full h-full" 
    />
  </div>
</section>


      {/* Instructions */}
<section className="max-w-3xl mx-auto mb-12 bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
  <h2 className="text-2xl font-bold mb-4">🕹️ How to Play</h2>
  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
    <li>Use the <span className="font-semibold">Left (←)</span> and <span className="font-semibold">Right (→)</span> arrow keys to move your character.</li>
    <li>Press the <span className="font-semibold">Upper arrow</span> to jump across platforms and dodge obstacles.</li>
    <li>Press the <span className="font-semibold">Upper arrow twice</span> to perform a double jump.</li>
    <li>Avoid enemies and dangerous obstacles such as spikes and traps.</li>
    <li>Use boosts, powerups and jump pads.</li>
    <li>Reach the end of the level and pass the finishing line to complete each level.</li>
    <li>Progress through increasingly challenging levels to finish the game.</li>
  </ul>
  <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
    ⚡ Best experienced on desktop with a keyboard. Mobile/touch controls will be added in future updates.
  </p>
</section>


      {/* Play Game Button */}
      <section className="text-center mb-16">
        <a
          href="/game-files/index.html"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
        >
          🚀 Play the Game
        </a>
      </section>
    </main>
  );
}
