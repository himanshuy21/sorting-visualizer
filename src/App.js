import { Component } from "react";
import "./App.css";
import Bar from "./Components/Bar";
import BubbleSort from "./Components/Algorithms/BS";
// icons from material ui
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextRoundedIcon from "@mui/icons-material/SkipNextRounded";
import SkipPreviousRoundedIcon from "@mui/icons-material/SkipPreviousRounded";
import RotateLeftRoundedIcon from "@mui/icons-material/RotateLeftRounded";
// class App extends Component {
//   state = {
//     array: [], // store the values
//     arraySteps: [], //sorted array
//     colorKey: [],
//     colorSteps: [], //[colorkey]
//     //setting timeout at every state
//     currentStep: 0,
//     count: 10, //initial count of no. in the array
//     delay: 500,
//     algorithm: "Bubble Sort",
//     timeouts: [],
//   };
//   ALGORITHMS = {
//     "Bubble Sort": BubbleSort,
//   };
//   componentDidMount() {
//     this.generateRandomArray();
//     // here we are calling this generate random array
//   }

//   generateSteps = () => {
//     let array = this.state.array.slice();
//     let steps = this.state.array.slice();
//     let colorSteps = this.state.colorSteps.slice();

//     this.ALGORITHMS[this.state.algorithm](array, 0, steps, colorSteps);

//     this.setState({
//       arraySteps: steps,
//       colorSteps: colorSteps,
//     });
//   };

//   clearTimeouts = () => {
//     this.state.timeouts.forEach((timeout) => this.clearTimeouts(timeout));
//     this.setState({
//       timeouts: [],
//     });
//   };
//   clearColorKey = () => {
//     let blankKey = new Array(this.state.count).fill(0);
//     this.setState({
//       colorKey: blankKey,
//       colorSteps: [blankKey],
//     });
//   };
//   generateRandomNumber = (min, max) => {
//     return Math.floor(Math.random() * (max - min) + min);
//   };
//   generateRandomArray = () => {
//     this.clearTimeouts();
//     this.clearColorKey();
//     let count = this.state.count;
//     let temp = [];

//     // grenerate ramndom array
//     for (let i = 0; i < count; i++) {
//       temp.push(this.generateRandomNumber(50, 200));
//       // i am passing minimum and maximum value to generate the random number
//     }
//     console.log(temp);

//     this.setState(
//       {
//         array: temp,
//         arraySteps: [temp],
//         currentStep: 0,
//       },
//       () => {
//         this.generateSteps();
//       }
//     );
//   };
//   changeArray = (index, value) => {
//     let arr = this.state.array;
//     arr[index] = value;
//     this.setState(
//       {
//         array: arr,
//         arraySteps: [arr],
//         currentStep: 0,
//       },
//       () => {
//         this.generateSteps();
//       }
//     );
//   };
//   start = () => {
//     let steps = this.state.arraySteps;
//     let colorSteps = this.state.colorSteps;

//     this.clearTimeouts();
//     let timeouts = [];
//     let i = 0;

//     while (i < steps.length - this.state.currentStep) {
//       let timeout = setTimeout(() => {
//         let currentStep = this.state.currentStep;
//         this.setState({
//           array: steps[currentStep],
//           colorKey: colorSteps[currentStep],
//           currentStep: currentStep + 1,
//         });
//         timeouts.push(timeout);
//       }, this.state.delay * i);
//       i++;
//     }

//     this.setState({
//       timeouts: timeouts,
//     });
//   };
//   render() {
//     let bars;
//     if (Array.isArray(this.state.array)) {
//       bars = this.state.array.map((value, index) => (
//         <Bar
//           key={index}
//           index={index}
//           length={value}
//           color={this.state.colorKey[index]}
//           changeArray={this.changeArray}
//         />
//       ));
//     } else {
//       bars = <p>Invalid array</p>; // Display an error message or handle the invalid array case
//     }
//     let playButton;
//     if (this.state.arraySteps.length === this.state.currentStep) {
//       playButton = (
//         <button className="controller">
//           <RotateLeftRoundedIcon />
//         </button>
//       );
//     } else {
//       playButton = (
//         <button className="controller" onClick={this.start}>
//           <PlayArrowIcon />
//         </button>
//       );
//     }
//     return (
//       <div className="app">
//         <div className="frame">
//           <div className="barsDiv container card">{bars}</div>
//         </div>
//         <div className="control-pannel">
//           <div className="control-buttons">
//             <button className="controller" onClick={this.previousStep}>
//               <SkipPreviousRoundedIcon />
//             </button>
//             {playButton}
//             <button className="controller" onClick={this.nextStep}>
//               <SkipNextRoundedIcon />
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
class App extends Component {
  state = {
    array: [],
    arraySteps: [],
    colorKey: [],
    colorSteps: [],
    currentStep: 0,
    count: 10,
    delay: 300,
    algorithm: "Bubble Sort",
    timeouts: [],
  };

  ALGORITHMS = {
    "Bubble Sort": BubbleSort,
  };

  componentDidMount() {
    this.generateRandomArray();
  }

  generateSteps = () => {
    let array = this.state.array.slice();
    let steps = this.state.arraySteps.slice();
    let colorSteps = this.state.colorSteps.slice();

    this.ALGORITHMS[this.state.algorithm](array, 0, steps, colorSteps);

    this.setState({
      arraySteps: steps,
      colorSteps: colorSteps,
    });
  };

  clearTimeouts = () => {
    this.state.timeouts.forEach((timeout) => clearTimeout(timeout));
    this.setState({
      timeouts: [],
    });
  };

  clearColorKey = () => {
    let blankKey = new Array(this.state.count).fill(0);

    this.setState({
      colorKey: blankKey,
      colorSteps: [blankKey],
    });
  };

  generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  generateRandomArray = () => {
    this.clearTimeouts();
    this.clearColorKey();
    const count = this.state.count;
    const temp = [];

    for (let i = 0; i < count; i++) {
      temp.push(this.generateRandomNumber(50, 200));
    }

    this.setState(
      {
        array: temp,
        arraySteps: [temp],
        currentStep: 0,
      },
      () => {
        this.generateSteps();
      }
    );
  };

  changeArray = (index, value) => {
    let arr = this.state.array;
    arr[index] = value;
    this.setState(
      {
        array: arr,
        arraySteps: [arr],
        currentStep: 0,
      },
      () => {
        this.generateSteps();
      }
    );
  };

  previousStep = () => {
    let currentStep = this.state.currentStep;
    if (currentStep === 0) return;
    currentStep -= 1;
    this.setState({
      currentStep: currentStep,
      array: this.state.arraySteps[currentStep],
      colorKey: this.state.colorSteps[currentStep],
    });
  };

  nextStep = () => {
    let currentStep = this.state.currentStep;
    if (currentStep >= this.state.arraySteps.length - 1) return;
    currentStep += 1;
    this.setState({
      currentStep: currentStep,
      array: this.state.arraySteps[currentStep],
      colorKey: this.state.colorSteps[currentStep],
    });
  };

  start = () => {
    let steps = this.state.arraySteps;
    let colorSteps = this.state.colorSteps;

    this.clearTimeouts();

    let timeouts = [];
    let i = 0;

    while (i < steps.length - this.state.currentStep) {
      let timeout = setTimeout(() => {
        let currentStep = this.state.currentStep;
        this.setState({
          array: steps[currentStep],
          colorKey: colorSteps[currentStep],
          currentStep: currentStep + 1,
        });
        timeouts.push(timeout);
      }, this.state.delay * i);
      i++;
    }

    this.setState({
      timeouts: timeouts,
    });
  };

  render() {
    let bars = this.state.array.map((value, index) => (
      <Bar
        key={index}
        index={index}
        length={value}
        color={this.state.colorKey[index]}
        changeArray={this.changeArray}
      />
    ));

    let playButton;

    if (this.state.arraySteps.length === this.state.currentStep) {
      playButton = (
        <button className="controller" onClick={this.generateRandomArray}>
          <RotateLeftRoundedIcon />
        </button>
      );
    } else {
      playButton = (
        <button className="controller" onClick={this.start}>
          <PlayArrowIcon />
        </button>
      );
    }

    return (
      <div className="app">
        <div className="frame">
          <div className="barsDiv container card">{bars}</div>
        </div>
        <div className="control-pannel">
          <div className="control-buttons">
            <button className="controller" onClick={this.previousStep}>
              <SkipPreviousRoundedIcon />
            </button>
            {playButton}
            <button className="controller" onClick={this.nextStep}>
              <SkipNextRoundedIcon />
            </button>
          </div>
        </div>
        <div className="pannel"></div>
      </div>
    );
  }
}
export default App;
