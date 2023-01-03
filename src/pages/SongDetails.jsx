import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';
import { setActiveSong, playPause } from '../redux/features/playerSlice';

import { useGetSongDetailsQuery, useGetSongRelatedQuery } from '../redux/services/shazamCore';

const SongDetails = () => {
  const dispatch = useDispatch();
  const { songid } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data: songData, isFething: isFethingSongDetails } = useGetSongDetailsQuery({ songid });
  const { data, isFething: isFethingRelatedSongs, error } = useGetSongRelatedQuery({ songid });

  if (isFethingSongDetails || isFethingRelatedSongs) return <Loader title="Searching song details" />;
  if (error) return <Error />;

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };
  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ data, song, i }));
    dispatch(playPause(true));
  };

  return (
    <div className="">
      <DetailsHeader
        artistId=""
        songData={songData}
      />
      <div>
        <h2 className="text-white font-bold text-3xl">Lyrics:</h2>
      </div>
      <div className="mt-5 border-t-2">
        {songData?.sections[1].type === 'LYRICS'
          ? songData?.sections[1].text.map((lines, i) => (
            <p className="text-gray-400">{lines}</p>
          )) : <p>Sorry, no Lyrics found!</p>}
      </div>
      <RelatedSongs
        data={data}
        isPlaying={isPlaying}
        activeSong={activeSong}
        handlePauseClick={handlePauseClick}
        handlePlayClick={handlePlayClick}
      />
    </div>

  );
};

export default SongDetails;
