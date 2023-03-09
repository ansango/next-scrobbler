import { lastFmClient } from "lastfm-client-ts";

import {
  Title,
  Subtitle,
  SubtitleLegend,
  Legend,
  LegendItalicBold,
  Heading,
  LinkYouTube,
  ActiveBullet,
  LinkExternal,
  Section,
  Container,
} from "@/components";
import { formatDate } from "@/lib";

const {
  userApiMethods: { getInfo, getRecentTracks },
} = lastFmClient();

export const revalidate = 10;

export default async function Home() {
  const { recenttracks } = await getRecentTracks(
    { user: "ansango", limit: "5" },
    { cache: "no-cache", next: { revalidate: 10 } }
  );

  const { user } = await getInfo({ user: "ansango" });

  return (
    <Container>
      <Section className="text-center">
        <div className="pb-10 lg:pb-20">
          <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 mx-auto mb-5 rounded-full">
            <div className="border-2 lg:border-[3px] border-secondary p-4 lg:p-6 rounded-full flex justify-center items-center animate-pulse duration-[4000ms]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                className="w-8 h-8 lg:w-10 lg:h-10 flex justify-center items-center text-secondary"
              >
                <g fill="none">
                  <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"></path>
                  <path
                    fill="currentColor"
                    d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2Zm0 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16Zm0 6a2 2 0 1 1 0 4a2 2 0 0 1 0-4Zm-.56-3.493a1 1 0 0 1-.61 1.276a5.02 5.02 0 0 0-2.664 2.216a1 1 0 1 1-1.732-1.001a7.019 7.019 0 0 1 3.73-3.1a1 1 0 0 1 1.276.609Z"
                  ></path>
                </g>
              </svg>
            </div>
          </div>
          <Title>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary to-primary">
              The Playlist <br className="hidden lg:block" />
              All-Time Favorite Tunes
            </span>
          </Title>

          <p className="max-w-xl mx-auto mt-8 text-center text-offset">
            Explore my collection and embark on a sonic journey, experiencing a curated selection of
            amazing tracks.
          </p>
        </div>
      </Section>

      <Section>
        <div className="flex flex-col max-w-screen-lg mx-auto text-left">
          <div className="w-full mx-auto space-y-5">
            <Subtitle>What tha hell is this?</Subtitle>
            <Heading>
              <LinkExternal href={user.url} className="cursor-pointer font-medium">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  className="inline-flex mr-2"
                >
                  <path
                    fill="currentColor"
                    d="m10.584 17.21l-.88-2.392s-1.43 1.594-3.573 1.594c-1.897 0-3.244-1.649-3.244-4.288c0-3.382 1.704-4.591 3.381-4.591c2.42 0 3.189 1.567 3.849 3.574l.88 2.749c.88 2.666 2.529 4.81 7.285 4.81c3.409 0 5.718-1.044 5.718-3.793c0-2.227-1.265-3.381-3.63-3.931l-1.758-.385c-1.21-.275-1.567-.77-1.567-1.595c0-.934.742-1.484 1.952-1.484c1.32 0 2.034.495 2.144 1.677l2.749-.33c-.22-2.474-1.924-3.492-4.729-3.492c-2.474 0-4.893.935-4.893 3.932c0 1.87.907 3.051 3.189 3.601l1.87.44c1.402.33 1.869.907 1.869 1.704c0 1.017-.99 1.43-2.86 1.43c-2.776 0-3.93-1.457-4.59-3.464l-.907-2.75c-1.155-3.573-2.997-4.893-6.653-4.893C2.144 5.333 0 7.89 0 12.233c0 4.18 2.144 6.434 5.993 6.434c3.106 0 4.591-1.457 4.591-1.457z"
                  ></path>
                </svg>
                {user.realname}
              </LinkExternal>
            </Heading>
            <p className="text-offset">
              This is a selection of my favorite songs, carefully curated over the years. Since
              2007, I have been recording my listening habits on Last.fm, although unfortunately I
              lost my previous account and had to start over.
            </p>
            <p className="text-offset">
              Now I&apos;m on my second account and have been recording my music since 2018. To
              date, I&apos;ve listened to a total of{" "}
              <span className="font-bold">{user.playcount} songs</span>, and my library contains{" "}
              <span className="font-bold">{user.track_count} tracks</span>,{" "}
              <span className="font-bold">{user.album_count} albums</span>, and{" "}
              <span className="font-bold">{user.artist_count} artists</span>.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="space-y-5 max-w-screen-lg mx-auto">
          <Subtitle>
            Recent Tracks
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className="inline-flex ml-2 w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"
            >
              <g fill="none">
                <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"></path>
                <path
                  fill="currentColor"
                  d="M21 5.18V17a4 4 0 1 1-2-3.465V9.181L9 10.847V18c0 .06-.005.117-.015.174A3.5 3.5 0 1 1 7 15.337v-8.49a2 2 0 0 1 1.671-1.973l10-1.666A2 2 0 0 1 21 5.18ZM5.5 17a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3ZM17 15a2 2 0 1 0 0 4a2 2 0 0 0 0-4Zm2-9.82L9 6.847V8.82l10-1.667V5.18Z"
                ></path>
              </g>
            </svg>
          </Subtitle>
          <SubtitleLegend>* last played *</SubtitleLegend>
          <ul className="grid gap-5 grid-cols-12">
            {recenttracks.track.filter((track) => track.date === undefined).length > 0 && (
              <li className="col-span-12">
                <Heading>
                  {recenttracks.track
                    .filter((track) => track.date === undefined)
                    .map((track) => (
                      <>
                        {track.name}
                        <LinkYouTube query={`${track.name} ${" "}${track.artist["#text"]}`} />
                      </>
                    ))}
                </Heading>
                <p className="space-x-2">
                  <LegendItalicBold>
                    {recenttracks.track
                      .filter((track) => track.date === undefined)
                      .map((track) => track.artist["#text"])}
                  </LegendItalicBold>
                  <Legend>*</Legend>
                  <Legend className="relative">
                    now
                    <ActiveBullet />
                  </Legend>
                </p>
              </li>
            )}
            {recenttracks.track
              .filter((track) => track.date !== undefined)
              .map((track, index) => {
                return (
                  <li key={`${track.url}-${index}`} className="col-span-12 lg:col-span-8">
                    <Heading>
                      {track.name}
                      <LinkYouTube query={`${track.name} ${" "}${track.artist["#text"]}`} />
                    </Heading>
                    <p className="space-x-2">
                      <LegendItalicBold> {track.artist["#text"]}</LegendItalicBold>
                      <Legend>{track.date && <>*</>}</Legend>
                      <Legend>{formatDate(track.date["#text"] as unknown as Date, "en-US")}</Legend>
                    </p>
                  </li>
                );
              })}
          </ul>
        </div>
      </Section>
    </Container>
  );
}
