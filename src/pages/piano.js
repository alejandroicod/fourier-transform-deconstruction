
import React from "react";

const notes = {
  do: 1,
  "do#": 2,
  re: 3,
  "re#": 4,
  mi: 5,
  fa: 6,
  "fa#": 7,
  sol: 8,
  "sol#": 9,
  la: 10,
  "la#": 11,
  si: 12
};

class PianoPage extends React.Component {

  constructor(args) {
    super(args)
    this.state = {
      chord: [],
      frequency: 65.41
    }
    this.AudioContext = window.AudioContext // Default
      || window.webkitAudioContext // Safari and old versions of Chrome
      || false;
  }

  calculate(octave, note) {
    var semitones = notes[note];
    return 440 * Math.pow(2, octave - 3 + (semitones - 10) / 12);
  }

  calculateFrequency() {
    var octave = this.refs.octave.value;
    var note = this.refs.note.value;
    this.setState({ frequency: Math.round(this.calculate(octave, note) * 100) / 100 });
  }

  play(event, octave, note) {
    if (!octave) octave = this.refs.octave.value;
    if (!note) note = this.refs.note.value;

    var frequency = this.calculate(octave, note);
    var context = new this.AudioContext();
    var g = context.createGain();
    var oscillator = context.createOscillator();
    oscillator.connect(g);
    g.connect(context.destination);
    oscillator.frequency.value = frequency;
    oscillator.start(0);

    let chord = this.state.chord
    chord.push({
      octave: octave,
      note: note,
      frequency: frequency,
      oscillator: oscillator
    });
    this.setState({ chord })
  }

  stop(event, octave, note) {
    let chord = this.state.chord
    if (chord.length) {
      if (!octave || !note) chord.pop().oscillator.stop();
      else
        chord = chord.filter(item => {
          if (item.octave == octave && item.note == note) {
            item.oscillator.stop();
            return false;
          }
          return true;
        });
      this.setState({ chord })
    }
  }

  stopAll() {
    let chord = this.state.chord
    while (chord.length) chord.pop().oscillator.stop();
    this.setState({ chord })
  }

  isNotePlaying(octave, note) {
    return this.state.chord.some(item => {
      return item.octave == octave && item.note == note
    });
  }

  renderPiano() {
    let keys = []
    for (let octave = 0; octave < 8; octave++) {
      keys.push(Object.keys(notes).map(note => {
        var loopOctave = octave;
        return <div key={note} className={`key ${~note.indexOf("#") ? 'black' : ''} ${this.isNotePlaying(loopOctave, note) ? 'active' : ''}`}
          onClick={function (e) { (this.isNotePlaying(loopOctave, note) ? this.stop(e, loopOctave, note) : this.play(e, loopOctave, note)) }.bind(this)} />
      }));
    }
    return keys
  }

  render() {
    return (
      <React.Fragment>
        <h1>Frequency calculator</h1>
        <div>
          <label>Octave</label>
          <select ref="octave" name="octave" id="octave" onChange={this.calculateFrequency.bind(this)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div>
          <label>Note</label>
          <select ref="note" name="note" id="note" onChange={this.calculateFrequency.bind(this)}>
            <option value="do">Do</option>
            <option value="do#">Do# / Reb</option>
            <option value="re">Re</option>
            <option value="re#">Re# / Mib</option>
            <option value="mi">Mi</option>
            <option value="fa">Fa</option>
            <option value="fa#">Fa# / Solb</option>
            <option value="sol">Sol</option>
            <option value="sol#">Sol# / Lab</option>
            <option value="la">La</option>
            <option value="la#">La# / Sib</option>
            <option value="si">Si</option>
          </select>
        </div>
        <div>
          <label>Frequency</label>
          <input ref="result" name="result" id="result" readOnly value={this.state.frequency} /> Hz
          <button onClick={this.play.bind(this)}>Play note</button>
          <button onClick={this.stop.bind(this)}>Stop last note</button>
          <button onClick={this.stopAll.bind(this)}>Stop chord</button>
        </div>
        <div id="piano">
          {this.renderPiano()}
        </div>
      </React.Fragment>
    )
  }
}

export default PianoPage

