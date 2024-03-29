
const ArtistCard = ({ track }) => (
  <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
    <img
      src={track?.images?.coverart}
      alt="artist"
      className="w-full h-56 rounded-lg"
    />
    <p className="mt-4 font-semibold text-lg text-white">{track?.subtitle}</p>

  </div>
);

export default ArtistCard;
