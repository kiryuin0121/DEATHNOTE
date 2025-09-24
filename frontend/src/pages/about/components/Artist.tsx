import { Artist as ArtistType } from "../../../types/song";
import { motion } from "motion/react";
type Props = {
  artist: ArtistType;
};
const Artist = ({ artist }: Props) => {
  return (
    <section className="w-[90%] h-[93vh] py-10 mx-auto overflow-y-scroll no-scrollbar">
      <motion.div
        initial={{ opacity: 0, x: "5%" }}
        animate={{ opacity: 1, x: "0%" }}
        transition={{ duration: 0.25 }}
        className="w-full min-h-[93vh]"
      >
        <section className="flex items-center justify-around gap-x-4 mb-6 pb-8 border-b border-deathDarkGray">
          <h3 className="text-center text-xl mb-4 text-white">{artist.name}</h3>
          <figure className="h-[25vh] aspect-square border border-deathDarkGray">
            <img src={artist.imgUrl} alt={artist.name} />
          </figure>
        </section>
        <div className="mx-4 min-h-screen flex flex-col gap-y-8">
          <section>
            <h4 className="text-lg text-center mb-2 text-white">
              &lt;Comment&gt;
            </h4>
            <p className="leading-7 text-[15px] text-neutral-300">
              {artist.comment}
            </p>
          </section>
          <section>
            <h4 className="text-lg text-center mb-2 text-white">
              &lt;Profile&gt;
            </h4>
            <p className="leading-7 text-[15px] text-neutral-300">
              {artist.profile}
            </p>
          </section>
        </div>
      </motion.div>
    </section>
  );
};

export default Artist;
