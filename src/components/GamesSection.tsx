import { useEffect, useState } from "react";

type RecentGame = {
  appid: number;
  name: string;
  playtime2Weeks: number;
  playtimeForever: number;
  image?: string;
};

const RECENT_GAMES_URL = "/recent-games.json";

type RecentGameApiRecord = {
  appid: number;
  name: string;
  playtime2Weeks?: number;
  playtimeForever?: number;
  playtime_2weeks?: number;
  playtime_forever?: number;
  image?: string;
};

function formatMinutes(minutes: number) {
  if (minutes < 60) {
    return `${minutes}m`;
  }

  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  if (remainingMinutes === 0) {
    return `${hours}h`;
  }

  return `${hours}h ${remainingMinutes}m`;
}

function buildSteamImageUrl(appid: number) {
  return `https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/${appid}/capsule_616x353.jpg`;
}

function normalizeGame(record: RecentGameApiRecord): RecentGame {
  return {
    appid: record.appid,
    name: record.name,
    playtime2Weeks: record.playtime2Weeks ?? record.playtime_2weeks ?? 0,
    playtimeForever: record.playtimeForever ?? record.playtime_forever ?? 0,
    image: record.image,
  };
}

function getGameInitials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

function GamesSection() {
  const [games, setGames] = useState<RecentGame[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function loadGames() {
      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch(RECENT_GAMES_URL, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const data = (await response.json()) as RecentGameApiRecord[];
        setGames(data.map(normalizeGame).slice(0, 3));
      } catch (fetchError) {
        if (
          fetchError instanceof DOMException &&
          fetchError.name === "AbortError"
        ) {
          return;
        }

        setError("Unable to load the latest games right now.");
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    }

    void loadGames();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <section
      id="games"
      className="border-t border-white/10 px-6 py-16 sm:px-10 lg:px-14"
    >
      <div className="max-w-5xl">
        <p className="mb-4 font-semibold uppercase tracking-[0.42em] text-white/80 sm:text-2xl">
          Games
        </p>
        <p className="max-w-4xl text-[1.02rem] leading-7 text-white/80 sm:text-[1.08rem]">
          The three most recent games I&apos;ve been playing, loaded directly
          from my Steam Activity through AWS Lambda!
        </p>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {isLoading ? (
          Array.from({ length: 3 }).map((_, index) => (
            <div
              key={`game-skeleton-${index}`}
              className="h-full rounded-3xl border border-white/12 bg-white/4 p-4"
            >
              <div className="aspect-16/10 rounded-2xl bg-white/8" />
              <div className="mt-4 h-4 w-3/4 rounded-full bg-white/10" />
              <div className="mt-3 h-3 w-1/2 rounded-full bg-white/8" />
              <div className="mt-5 h-10 rounded-2xl bg-white/6" />
            </div>
          ))
        ) : error ? (
          <div className="rounded-3xl border border-white/12 bg-white/4 p-6 text-white/72">
            {error}
          </div>
        ) : (
          games.map((game) => <GameCard key={game.appid} game={game} />)
        )}
      </div>
    </section>
  );
}

type GameCardProps = {
  game: RecentGame;
};

function GameCard({ game }: GameCardProps) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/12 bg-white/4 shadow-[0_18px_50px_rgba(0,0,0,0.18)] transition-transform duration-300 ease-out hover:-translate-y-1">
      <div className="relative aspect-16/10 overflow-hidden bg-black/40">
        {imageFailed ? (
          <div className="flex h-full w-full items-center justify-center p-4">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-white/15 bg-white/8 text-[1.4rem] font-black tracking-[0.16em] text-white/85">
              {getGameInitials(game.name) || "GM"}
            </div>
          </div>
        ) : (
          <img
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            src={game.image ?? buildSteamImageUrl(game.appid)}
            alt={`${game.name} artwork`}
            loading="lazy"
            onError={() => setImageFailed(true)}
          />
        )}
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/15 to-transparent" />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-subway text-[clamp(1.3rem,2.5vw,1.85rem)] font-black leading-[0.96] tracking-[0.06em] text-white">
          {game.name}
        </h3>

        <div className="mt-3 flex items-center justify-between gap-4 text-[0.9rem] font-semibold uppercase tracking-[0.22em] text-white/60">
          <span>Total: {formatMinutes(game.playtimeForever)}</span>
          <span>Recent: {formatMinutes(game.playtime2Weeks)}</span>
        </div>
      </div>
    </article>
  );
}

export default GamesSection;
