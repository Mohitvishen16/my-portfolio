import bike from "../assets/projects/bike-rental.png";
import ttt from "../assets/projects/tic-tac-toe.png";

export default function Projects() {
  return (
    <section id="projects" className="mt-24">
      <h2 className="text-3xl font-semibold mb-8">Projects</h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="glass p-6 hover:scale-105 transition">
          <img src={bike} alt="Bike Rental" className="rounded-xl mb-4" />
          <h3 className="text-xl font-bold">Bike Rental Website</h3>
          <p className="mt-2 text-sm opacity-80">
            Full-stack bike rental platform with booking system and database.
          </p>
          <p className="mt-2 text-xs text-cyan-300">
            HTML • CSS • JavaScript • Node.js • MySQL
          </p>
        </div>

        <div className="glass p-6 hover:scale-105 transition">
          <img src={ttt} alt="Tic Tac Toe" className="rounded-xl mb-4" />
          <h3 className="text-xl font-bold">Tic Tac Toe Game</h3>
          <p className="mt-2 text-sm opacity-80">
            Interactive browser-based game with clean UI and logic handling.
          </p>
          <p className="mt-2 text-xs text-cyan-300">
            JavaScript
          </p>
        </div>
      </div>
    </section>
  );
}
