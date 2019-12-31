
import React from "react";


let vectors = [
  {
    radio: 60,
    frequency: 100,
    start: 0
  },
  {
    radio: 60,
    frequency: 200,
    start: 0
  },
  {
    radio: 60,
    frequency: 300,
    start: 0
  },
  {
    radio: 60,
    frequency: 400,
    start: 0
  },
  {
    radio: 60,
    frequency: 500,
    start: 0
  },
  //   {
  //   radio: 20,
  //   frequency: 3200,
  //   start: 3
  // },  {
  //   radio: 5,
  //   frequency: 6400,
  //   start: 2
  // }
]


const ZOOM = 10
const TICKS = 1000000


class HomePage extends React.Component {

  componentDidMount() {
    this.canvas = this.refs.canvas;
    this.canvasContext = this.canvas.getContext("2d");
    this.canvas.width = this.canvas.offsetWidth;
    this.canvas.height = this.canvas.offsetHeight;
    this.ticks = 0;

    this.interval = setInterval(this.draw.bind(this), 0.01)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  hz2rad(hz) {
    return hz * 2 * Math.PI
  }

  calculateVector(origin, vector) {
    let time = this.ticks / TICKS;
    let x = Math.cos(vector.start + this.hz2rad(vector.frequency) * time) * vector.radio + origin.x;
    let y = Math.sin(vector.start + this.hz2rad(vector.frequency) * time) * vector.radio + origin.y;
    this.ticks++;
    return { x, y }
  }

  draw() {
    if (this.ticks / ZOOM >= this.canvas.width) {
      this.ticks = 0
      this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    let coords = vectors.reduce((prev, curr) => this.calculateVector(prev, curr), { x: 0, y: 0 })
    this.drawPoint({ x: coords.x + this.canvas.width / 2, y: coords.y, color: "red" })
    vectors.map(vector => {
      this.drawPoint(Object.assign(this.calculateVector({ x: 0, y: 0 }, vector), { x: this.ticks / ZOOM, color: "#444444" }))
    })

    this.drawPoint({ x: this.ticks / ZOOM, y: coords.y, color: "white" })
  }

  drawPoint(coords) {
    this.canvasContext.fillStyle = coords.color; // Red color
    this.canvasContext.beginPath(); //Start path
    this.canvasContext.rect(coords.x % canvas.offsetWidth, coords.y + canvas.offsetHeight / 2, 1, 1); // Draw a point using the arc function of the canvas with a point structure.
    this.canvasContext.fill(); // Close the path and fill.
  }

  render() {
    return <canvas ref={"canvas"} id="canvas">Canvas not supported</canvas>
  }
}

export default HomePage

