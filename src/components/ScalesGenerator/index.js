import * as Tone from 'tone'
import Scale from '../Scale'
import modes from '../../data/modes'

const ScalesGenerator = () => {
  const synth = new Tone.AMSynth().toDestination()

  return (
    <div className="flex flex-col">
      { modes.map(scale => (<Scale  synth={synth} scale={scale} />)) } 
    </div>
  )
}

export default ScalesGenerator