import React from 'react';

const SimilarArtist = ({ data }) => {
  const ArtistRelated = data?.data[0]?.relationships?.albums?.data;
  return (
    <div className="w-full flex flex-col py-2 p-4 rounded-lg  mb-2">
      <div className="flex-1 flex flex-row justify-between items-center">

        <div className="flex-1 flex flex-col justify-center mx-3">
          <p className="text-white">{data?.data[0]?.attributes?.name}</p>
        </div>
      </div>
      <div className="flex flex-col">
        {ArtistRelated?.map((song, i) => (

          <p className="text-gray-300">{song?.id}</p>

        ))}
      </div>
    </div>
  );
};

export default SimilarArtist;
