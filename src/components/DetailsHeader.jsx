import { Link } from 'react-router-dom';

const DetailsHeader = ({ artistId, artistData, songData }) => {
  const artist = artistData?.data[0]?.attributes;

  return (
    <div className="relative w-full flex flex-col">
      <div className="w-full bg-gradient-to-l from-transparent to to-black  sm:h-48 h-28" />

      <div className="absolute flex items-center inset-0 ">
        <img
          src={artistId ? artist?.artwork?.url.replace('{w}', '500').replace('{h}', '500')
            : songData?.images?.coverart}
          alt="art"
          className="sm:w-48 w-28 rounded-full sm:h-48 h-28 object-cover border-2 shadow-xl shadow-black"
        />

        <div>
          <p className="text-white ml-7 font-bold">{artistId ? artist?.name : songData?.title}</p>
          {!artistData && (
          <Link to={`/artists/${songData?.artists[0].adamid}`}>
            <p className="text-gray-400 ml-7 text-base mt-3">{songData?.subtitle}</p>
          </Link>
          )}
          <p className="text-gray-400 ml-7 text-base mt-3">
            {artistId
              ? artist?.genreNames[0]
              : songData?.genres?.primary}
          </p>
        </div>
      </div>
      <div className="w-full sm:h-44 h-24" />
    </div>
  );
};
export default DetailsHeader;
