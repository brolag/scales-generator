import { Player } from "tone"

const Scale = ({synth, scale}) => { 

  const play = (key, octave) => synth.triggerAttackRelease(key + octave, '8n')
  const octave = 4

  return (
    <div className="mb-5">
      <h2 className="font-bold">{`${scale.key} ${scale.mode}`}</h2>
      <div className="flex flex-row">
        {scale.notes.map(key => (
          <button 
            className="p-2 bg-blue-500 shadow-md mr-1 rounded-md h-10 w-10 text-white font-bold" 
            onClick={() => play(key, octave)}>
            {key}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Scale