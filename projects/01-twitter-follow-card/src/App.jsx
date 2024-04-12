import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

const users = [
  {
    userName: "midudev",
    name: "Miguel Angel Duran",
    isFollowing: true,
  },
  {
    userName: "mogolico01",
    name: "Carlitos Perez",
    isFollowing: false,
  },
  {
    userName: "heladodefrutilla",
    name: "Ethan Agustin Almiron",
    isFollowing: true,
  },
  {
    userName: "coti",
    name: "Constanza Gomez",
    isFollowing: false,
  },
  {
    userName: "boca",
    name: "Lautaro Rodriguez",
    isFollowing: false,
  },
  {
    userName: "comoyoninguna",
    name: "David Romulo Hurtado",
    isFollowing: false,
  },
];

export function App() {
  return (
    <section className="App">
      {users.map(({ userName, name, isFollowing }) => (
        <TwitterFollowCard
          key={userName}
          userName={userName}
          name={name}
          initialIsFollowing={isFollowing}
        ></TwitterFollowCard>
      ))}
    </section>
  );
}
